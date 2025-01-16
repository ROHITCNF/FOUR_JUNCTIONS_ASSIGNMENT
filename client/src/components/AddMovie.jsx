import React, { useState, useEffect } from "react";
import AddProducer from "./AddProducer";
import AddCast from "./AddCast";
import { ADD_NEW_MOVIE, GET_ALL_ACTORS, GET_ALL_PRODUCERS } from "../utils/endpoint";

const AddMovie = () => {
  const [addProducerFlag, setProducerFlag] = useState(false);
  const [addCastFlag, setCastFlag] = useState(false);
  const [producers, setProducers] = useState([]);
  const [casts, setCasts] = useState([]);
  const [filteredProducers, setFilteredProducers] = useState([]);
  const [filteredCasts, setFilteredCasts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    posterUrl: "",
    producer: "",
    rating: "",
    cast: [],
    year: "",
  });

  useEffect(() => {
    // Fetch producers and casts on component load
    const fetchData = async () => {
      const producersResponse = await fetch(GET_ALL_PRODUCERS);
      const producersData = await producersResponse.json();
      setProducers(producersData?.data);

      const castsResponse = await fetch(GET_ALL_ACTORS);
      const castsData = await castsResponse.json();
      setCasts(castsData?.data);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "producer") {
      setFormData({ ...formData, producer: value });
      const filtered = producers.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducers(filtered);
    }

    if (name === "castSearch") {
      const filtered = casts.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCasts(filtered);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddMovieButton = async (e) => {
    e.preventDefault();
    console.log("Movie Data:", formData);
    let payloadData = {
      name: formData?.name,
      posterUrl: formData?.posterUrl,
      producer: formData?.producer,
      rating: formData?.rating,
      cast: formData?.cast.map((val) => val.trim()),
      year: formData?.year,
    };
    let requestConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadData),
    };
    const apiData = await fetch(ADD_NEW_MOVIE, requestConfig);
    const data = await apiData.json();
    console.log("API Response:", data);
  };

  const handleSelectProducer = (producer) => {
    setFormData({ ...formData, producer: producer.name });
    setFilteredProducers([]);
  };

  const handleSelectCast = (cast) => {
    if (!formData.cast.includes(cast.name)) {
      setFormData({ ...formData, cast: [...formData.cast, cast.name] });
    }
    setFilteredCasts([]);
  };

  const handleRemoveCast = (castName) => {
    setFormData({
      ...formData,
      cast: formData.cast.filter((name) => name !== castName),
    });
  };

  const handleAddNewCastClick = () => {
    setCastFlag(true);
    setProducerFlag(false);
  };

  const handleAddNewProducerClick = () => {
    setCastFlag(false);
    setProducerFlag(true);
  };

  if (addProducerFlag && !addCastFlag) {
    return <AddProducer />;
  }
  if (addCastFlag && !addProducerFlag) {
    return <AddCast />;
  }

  return (
    <div className="w-[30rem] p-5 flex flex-col items-center fixed inset-0 left-[35%] top-[20%]">
      <h1 className="py-5">Add New Movie</h1>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Movie Name"
          name="name"
          onChange={handleChange}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Release Year"
          name="year"
          onChange={handleChange}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Producer"
          name="producer"
          onChange={handleChange}
          value={formData.producer}
          autoComplete="off"
        />
        <button className="btn btn-info" onClick={handleAddNewProducerClick}>
          Add New Producer
        </button>
        {filteredProducers.length > 0 && (
          <ul className="absolute bg-gray-800 text-white rounded shadow-md mt-1 p-2 w-full">
            {filteredProducers.map((producer) => (
              <li
                key={producer._id}
                onClick={() => handleSelectProducer(producer)}
                className="cursor-pointer hover:bg-gray-600 p-2"
              >
                {producer.name}
              </li>
            ))}
          </ul>
        )}
      </label>

      

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="PosterUrl"
          name="posterUrl"
          onChange={handleChange}
        />
        <span className="badge badge-info">Optional</span>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Rating"
          name="rating"
          onChange={handleChange}
        />
        <span className="badge badge-info">Optional</span>
      </label>



      <label className="input input-bordered flex flex-col gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Search Cast"
          name="castSearch"
          onChange={handleChange}
          autoComplete="off"
        />
        {filteredCasts.length > 0 && (
          <ul className="absolute bg-gray-800 text-white rounded shadow-md mt-1 p-2 w-full">
            {filteredCasts.map((cast) => (
              <li
                key={cast._id}
                onClick={() => handleSelectCast(cast)}
                className="cursor-pointer hover:bg-gray-600 p-2"
              >
                {cast.name}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.cast.map((cast) => (
            <span
              key={cast}
              className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
              onClick={() => handleRemoveCast(cast)}
            >
              {cast} ×
            </span>
          ))}
        </div>
      </label>
      <div className="py-5">
        <button className="btn btn-primary" onClick={handleAddMovieButton}>
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
