import { useState } from "react";
import { Link } from "react-router-dom";
import EditMovieDetails from "./EditMovieDetails";

const MovieCard = (props) => {
  const {_id,name, posterUrl, generes, rating , year} = props?.movieData;
  const [movieData, setMovieData] = useState({
    _id: _id || "",
    name: name || "",
    posterUrl: posterUrl || "",
    generes: generes || [],
    rating: rating || "",
    year: year || "",
  });
   const [editFlag , setEditFlag] = useState(false);

    const handleEditClick = (event)=>{
      event.preventDefault();
      event.stopPropagation();
      setEditFlag(true);
    }
     const disableEditForm = (data)=>{
      console.log('Updated Data :', data);
      setEditFlag(false);
      setMovieData({...movieData , ...data})
     }
    if(editFlag){
      return <EditMovieDetails movieData={props?.movieData} editSucesssFul={disableEditForm}/>;
    }
  return (
    <Link to={`/movie/details/${_id}`}>
          { console.log('Render happende')}
     <div className="card bg-base-100 w-96 h-[40rem] shadow-xl cursor-pointer">
      <figure className="h-[30rem] w-full overflow-hidden">
        <img
          src={movieData?.posterUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movieData?.name}</h2>
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
          {movieData?.rating ?? 0.0}
          <div>{movieData?.year}</div>
        </div>
      </div>
       
       {/* EDIT Functionality */}
       <div onClick={handleEditClick} className="px-10 text-red-700 cursor-pointer">EDIT DETAILS</div>
    </div>
    </Link>
  );
};

export default MovieCard;
