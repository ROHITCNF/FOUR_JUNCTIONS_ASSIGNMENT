import { useState } from "react";
import { ADD_NEW_PRODUCER } from "../utils/endpoint";

const AddProducer = () => {
  const [producerData, setProducerData] = useState({
    name: "",
    dob: "",
    gender: "",
    bio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProducerData({
      ...producerData,
      [name]: value,
    });
  };
  const handleAddProducerButton = async(e) => {
    e.preventDefault();
    let payloadData = {
      name: producerData?.name,
      dob : producerData?.dob,
      gender : producerData?.gender,
      bio : producerData?.bio,
    };
    let requestConfig = {
      method : 'POST',
      headers : {
        'Content-Type':'application/json',
      },
      body : JSON.stringify(payloadData) 
    }
    const apiData = await fetch(ADD_NEW_PRODUCER , requestConfig);
    const data = await apiData.json();
    if(data?.code === 200){
        window.location.href =  window.location.href ;
    }
  };
  return (
    <div className="w-[30rem] p-5 flex flex-col items-center  fixed inset-0 left-[35%] top-[20%]">
      <div className="py-5">
        <h1> Add New Producer</h1>
      </div>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Producer Name"
          name="name"
          onChange={handleChange}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="date"
          className="grow"
          placeholder="DOB"
          name="dob"
          onChange={handleChange}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Gender"
          name="gender"
          onChange={handleChange}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder="Bio"
          name="bio"
          onChange={handleChange}
        />
        <span className="badge badge-info">Optional</span>
      </label>

      <div className="py-5">
        <button className="btn btn-primary" onClick={handleAddProducerButton}>
          Add Producer
        </button>
      </div>
    </div>
  );
};

export default AddProducer;
