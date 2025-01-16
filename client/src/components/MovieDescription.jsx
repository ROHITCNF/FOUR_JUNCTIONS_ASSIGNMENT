import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_MOVIE } from "../utils/endpoint";

const MovieDescription = (props) => {
  const [movieData, setMovieData] = useState(null);

  const params = useParams();
  const { movieId } = params;

  const fetchMovieData = async () => {
    const apiData = await fetch(`${GET_MOVIE}${movieId}`);
    const apiDataJson = await apiData.json();
    setMovieData(apiDataJson?.data);
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  if (!movieData) {
    return <h1>Loading........</h1>;
  }
  const { name, posterUrl, year, rating, generes  , producer , cast} = movieData;
  return (
    <div className="card bg-base-100 w-96  shadow-xl cursor-pointer">
      <figure className="h-[30rem] w-full overflow-hidden">
        <img
          src={posterUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name.toUpperCase()}</h2>
        {/* genre type */}
        <div className="card-actions justify-start">
          {generes?.map((val, index) => (
            <div key={index} className="badge badge-outline">
              {val || "Unknown Genre"}
            </div>
          ))}
        </div>
        {/* Ratings*/}
        <div className="rating flex gap-x-5">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          {rating ?? 0.0}
          <div>{year}</div>
        </div>
        {/* Producer */}
        <p>
            Producer : <span  className="cursor-pointer bg-red-800">{producer?.name.toUpperCase()}_{producer?.gender}_{producer?.dob}</span>
        </p>
        {/* CASTs */}
        <p>
            Cast :  <div>
            {cast.map((val)=>{
             return  <p className="bg-red-800 cursor-pointer"key={val._id}>{val.name.toUpperCase()}___{val?.gender}___{val?.dob}</p>
            })}
            </div>
        </p>
      </div>
    </div>
  );
};

export default MovieDescription;
