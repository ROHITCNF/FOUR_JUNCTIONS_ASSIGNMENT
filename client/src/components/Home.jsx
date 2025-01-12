import { useEffect, useState } from "react";
import { MOVIE_LIST } from "../utils/constants";
import MovieCard from "./MovieCard";
import ShimmerMovieCard from "./ShimmerUi/ShimmerMovieCard";
const Home = () => {
  const [movieList, setMovieList] = useState(null);

  const fetchMovieList = async () => {
    const data = await Promise.resolve("resolved");
    setMovieList(MOVIE_LIST);
  };
  useEffect(() => {
    fetchMovieList();
  }, []);

  return !movieList ? (
    <ShimmerMovieCard />
  ) : (
    <div className="flex flex-wrap justify-between gap-y-12 p-10">
      {movieList.map((val) => {
        return <MovieCard movieData={val} />;
      })}
    </div>
  );
};

export default Home;
