const ShimmerMoviecard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src="" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Movie Name
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>Movie Description</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Rating</div>
          <div className="badge badge-outline">Movie Type</div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMoviecard;
