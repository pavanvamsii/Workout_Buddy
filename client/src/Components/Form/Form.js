import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import "../Form/Form.css"
import { Data } from '../../Context/Workoutcontext';

const Form = () => {

  // posting data
  const {workout,setworkout,getworkout,form, setform} = useContext(Data)


  const handleupdate = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  //for posting data
  const createworkout = async (e) => {
    e.preventDefault();
    const Response = await axios.post(
      "http://localhost:4000/api/workout",
      form
    );

    setworkout([...workout, Response.data]);

    setform({
      title: "",
      reps: "",
      load: "",
    });

    getworkout();
  };
//----------------------------------------------------------
// UPDATE Form
const {updateform, setupdate} = useContext(Data);

const handleupdateform = (e) => {
    const { name, value } = e.target;

    setupdate({
      ...updateform,
      [name]: value,
    });
  };

  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateform;

    await axios.patch(`http://localhost:4000/api/workout/${_id}`, {
      title,
      reps,
      load,
    });
    getworkout();

    setupdate({
      title: "",
      reps: "",
      load: "",
    });
  };

//-----------------------------------------------------------
  return (
    <div>
      {/* CREATE FORM */}
       {!updateform._id && (
        <form className='form' onSubmit={createworkout}>
          <h1>CREATE WORKOUT</h1>


          <div className='ilabel'>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={form.title}
            placeholder="Enter title"
            onChange={handleupdate}
          />
          </div>


          <div className='ilabel'>
          <label>Reps : </label>
          <input
            type="text"
            name="reps"
            value={form.reps}
            placeholder="Enter reps"
            onChange={handleupdate}
          />
          </div>


          <div className='ilabel'>
          <label>Load : </label>
          <input
            type="text"
            name="load"
            value={form.load}
            placeholder="Enter load"
            onChange={handleupdate}
          />
          </div>


          <button>submit</button>
        </form>
        
      )}


      {/* UPDATE FORM */}
      {updateform._id && (
        <form className='form' onSubmit={updateWorkout}>
          <h1>Edit WORKOUT</h1>

          <div className='ilabel'>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={updateform.title}
            placeholder="enter title"
            onChange={handleupdateform}
          />
          </div>

          <div className='ilabel'>
          <label>Reps : </label>
          <input
            type="text"
            name="reps"
            value={updateform.reps}
            placeholder="enter reps"
            onChange={handleupdateform}
          />
          </div>


          <div className='ilabel'>
          <label>Load : </label>
          <input
            type="text"
            name="load"
            value={updateform.load}
            placeholder="enter load"
            onChange={handleupdateform}
          />
          </div>

          <button>update</button>
        </form>
      )}
    </div>
  )
}

export default Form