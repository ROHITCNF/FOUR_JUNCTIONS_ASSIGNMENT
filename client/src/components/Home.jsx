import { useEffect, useState } from "react";
import { MOVIE_LIST } from "../utils/constants";
import MovieCard from "./MovieCard";
import ShimmerMovieCard from "./ShimmerUi/ShimmerMovieCard";
import { GET_ALL_MOVIE } from "../utils/endpoint";
const Home = () => {
  const [movieList, setMovieList] = useState(null);

  const fetchMovieList = async () => {
    const data = await fetch(GET_ALL_MOVIE);
    const dataJson = await data.json();
    setMovieList(dataJson?.data);
  };
  useEffect(() => {
    fetchMovieList();
  }, []);

  return !movieList ? (
    <ShimmerMovieCard />
  ) : (
    <div className="flex flex-wrap justify-between gap-y-12 p-10">
      {movieList.map((val, index) => {
        return <MovieCard key={index} movieData={val} />;
      })}
    </div>
  );
};

export default Home;
