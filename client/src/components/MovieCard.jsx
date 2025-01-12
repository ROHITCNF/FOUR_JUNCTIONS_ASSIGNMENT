const MovieCard = (props) => {
  const movieData = props?.movieData?.node;
  console.log(movieData);
  const movieName = movieData?.originalTitleText?.text;
  const imgUrl = movieData?.primaryImage?.url;
  const genreType = movieData?.titleGenres?.genres;
  const rating = movieData?.ratingsSummary?.aggregateRating;
  return (
    <div className="card bg-base-100 w-96 h-[40rem] shadow-xl cursor-pointer">
      <figure className="h-[30rem] w-full overflow-hidden">
        <img
          src={imgUrl}
          alt={movieName}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movieName}</h2>
        {/* genre type */}
        <div className="card-actions justify-start">
          {genreType?.map((val, index) => (
            <div key={index} className="badge badge-outline">
              {val?.genre?.text || "Unknown Genre"}
            </div>
          ))}
        </div>
        {/* Ratings*/}
        <div className="rating flex gap-x-5">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          {rating ?? 0.0}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
