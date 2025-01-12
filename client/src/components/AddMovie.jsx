import React, { useState } from "react";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    name: "",
    posterUrl: "",
    producer: "",
    rating: "",
    genres: "",
    cast: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Data:", formData);
    // Add logic to save data or call an API
  };

  return (
    <div className="w-[30rem] p-5 flex flex-col items-center  fixed inset-0 left-[35%] top-[20%]">
      <div>
        <h1> Add New Movie</h1>
      </div>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Movie Name" />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          disabled={true}
          type="text"
          className="grow"
          placeholder="Genere"
        />

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Genere Dropdown Menu
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Action</a>
            </li>
            <li>
              <a>Adventure</a>
            </li>
            <li>
              <a>Animation</a>
            </li>
            <li>
              <a>Anime</a>
            </li>
            <li>
              <a>Comedy</a>
            </li>
            <li>
              <a>Crime</a>
            </li>
            <li>
              <a>Documentary</a>
            </li>
            <li>
              <a>Drama</a>
            </li>
            <li>
              <a>Family</a>
            </li>
            <li>
              <a>Fantasy</a>
            </li>
            <li>
              <a>Horror</a>
            </li>
            <li>
              <a>Romance</a>
            </li>
            <li>
              <a>Sci-Fi</a>
            </li>
            <li>
              <a>Thriller</a>
            </li>
          </ul>
        </div>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Producer" />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="PosterUrl" />
        <span className="badge badge-info">Optional</span>
      </label>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Rating" />
        <div className="">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Cast" />
      </label>
    </div>
  );
};

export default AddMovie;
