import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <p className="btn btn-ghost text-xl">
          <Link to={"/"}>Imdb</Link>
        </p>
      </div>
      {/* Trial */}
      <div className="flex gap-5 px-4">
        <p>
          <Link to={"/"}>Home</Link>
        </p>
        <p>
          <Link to={"/add_movie"}>Add-Movie</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
