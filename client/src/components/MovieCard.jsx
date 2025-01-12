const MovieCard = (props) => {
  const { name, posterUrl, generes, rating } = props?.movieData;
  return (
    <div className="card bg-base-100 w-96 h-[40rem] shadow-xl cursor-pointer">
      <figure className="h-[30rem] w-full overflow-hidden">
        <img
          src={posterUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
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
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
