import React, { useState } from "react";
import { EDIT_MOVIE_DATA } from "../utils/endpoint";
const EditMovieDetails = ({ movieData, editSucesssFul }) => {
  const [formData, setFormData] = useState({
    name: movieData?.name || "",
    rating: movieData?.rating || "",
    year: movieData?.year || "",
    posterUrl: movieData?.posterUrl || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    let requestConfig = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const apiData = await fetch(`${EDIT_MOVIE_DATA}${movieData?._id}` , requestConfig);
    const data = await apiData.json();
    if(data?.code === 200){
      editSucesssFul(formData); // Trigger a save callback if provided
    }
  };

  return (
    <div className="card bg-base-100 w-96 h-[40rem] shadow-xl p-5">
      <h2 className="text-xl font-semibold mb-4">Edit Movie Details</h2>

      <label className="block mb-3">
        <span className="text-sm font-medium">Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Enter movie name"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Rating</span>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Enter rating (e.g., 8.5)"
          min="0"
          max="10"
          step="0.1"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Year</span>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Enter release year"
          min="1900"
          max={new Date().getFullYear()}
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Poster URL</span>
        <input
          type="url"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Enter poster URL"
        />
      </label>

      <div className="flex justify-end mt-5">
        <button
          className="btn btn-primary"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditMovieDetails;
