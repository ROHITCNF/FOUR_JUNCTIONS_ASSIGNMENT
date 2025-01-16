import { useState } from "react";
import { ADD_NEW_CAST } from "../utils/endpoint";
const AddCast = () => {
    const [castData, setProducerData] = useState({
        name: "",
        dob: "",
        gender: "",
        bio: "",
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setProducerData({
          ...castData,
          [name]: value,
        });
      };
    const handleAddMovieButton = async(e)=>{
        e.preventDefault();
        let payloadData = {
          name: castData?.name,
          dob : castData?.dob,
          gender : castData?.gender,
          bio : castData?.bio,
        };
        let requestConfig = {
          method : 'POST',
          headers : {
            'Content-Type':'application/json',
          },
          body : JSON.stringify(payloadData) 
        }
        const apiData = await fetch(ADD_NEW_CAST , requestConfig);
        const data = await apiData.json();
        if(data?.code === 200){
            window.location.href =  window.location.href ;
        } 
    }
    return (
        <div className="w-[30rem] p-5 flex flex-col items-center  fixed inset-0 left-[35%] top-[20%]">
          <div className="py-5">
            <h1> Add New Cast</h1>
          </div>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" placeholder="Cast Name" name="name" onChange={handleChange}/>
          </label>
    
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="Date" className="grow" placeholder="DOB" name="dob" onChange={handleChange}/>
          </label>
    
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" placeholder="Gender" name="gender" onChange={handleChange}/>
          </label>
    
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" placeholder="Bio" name="bio" onChange={handleChange}/>
            <span className="badge badge-info">Optional</span>
          </label>
    
          <div className="py-5"> 
          <button className="btn btn-primary" onClick={handleAddMovieButton}>Add Cast</button>
          </div>
        </div>
      );
}

export default AddCast