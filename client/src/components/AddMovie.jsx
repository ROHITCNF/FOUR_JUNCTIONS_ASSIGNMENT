import React, { useState } from "react";
import AddProducer from "./AddProducer";
import AddCast from "./AddCast";
import { ADD_NEW_MOVIE } from "../utils/endpoint";

const AddMovie = () => {
  const [addProducerFlag , setProducerFlag] = useState(false);
  const [addCastFlag , setCastFlag] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    posterUrl: "",
    producer: "",
    rating: "",
    cast: "",
    year : ""
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMovieButton = async(e) => {
    e.preventDefault();
    console.log("Movie Data:", formData);
    let payloadData = {
      name: formData?.name,
      posterUrl: formData?.posterUrl,
      producer: formData?.producer,
      rating: formData?.rating,
      cast: formData?.cast.toLowerCase().split(',').map((val)=> val.trim()),
      year : formData?.year ,
    };
    let requestConfig = {
      method : 'POST',
      headers : {
        'Content-Type':'application/json',
      },
      body : JSON.stringify(payloadData) 
    }
    const apiData = await fetch(ADD_NEW_MOVIE , requestConfig);
    const data = await apiData.json();
  };
const handleAddNewCastClick = ()=>{
  setCastFlag(true);
  setProducerFlag(false);
}
const handleAddNewProducerClick = ()=>{
  setCastFlag(false);
  setProducerFlag(true);
}
if(addProducerFlag && !addCastFlag){
  return <AddProducer></AddProducer>;
}
if(addCastFlag && !addProducerFlag){
  return  <AddCast></AddCast>;
}
  return (
    <div className="w-[30rem] p-5 flex flex-col items-center  fixed inset-0 left-[35%] top-[20%]">
      <div className="py-5">
        <h1> Add New Movie</h1>
      </div>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Movie Name" name="name" onChange={handleChange}/>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Release Year" name="year" onChange={handleChange}/>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Producer" name="producer" onChange={handleChange}/>
        <button className="btn btn-info" onClick={handleAddNewProducerClick} >Add New Producer</button>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="PosterUrl" name="posterUrl" onChange={handleChange}/>
        <span className="badge badge-info">Optional</span>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Rating" name="rating" onChange={handleChange}/>
        <span className="badge badge-info">Optional</span>
        <div className="">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" className="grow" placeholder="Cast" name="cast" onChange={handleChange}/>
        <button className="btn btn-info " onClick={handleAddNewCastClick}>Add New Cast</button>
      </label>
      <div className="py-5"> 
      <button className="btn btn-primary" onClick={handleAddMovieButton}>Add Movie</button>
      </div>
    </div>
  );
};

export default AddMovie;
