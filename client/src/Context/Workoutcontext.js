import { createContext, useState } from "react";
import React from "react";
import axios from "axios";
// import {useAuthContext} from '../Hooks/useAuthContext'
export const Data = createContext();

const Workoutcontext = ({ children }) => {

  // const {user} = useAuthContext()
  // state for getting the data
  const [workout, setworkout] = useState(null);
  // get req function
  const getworkout = async () => {
    const response = await axios.get("http://localhost:4000/api/workout");
    const data = response.data;
    setworkout(data);
  };

  // Post req state
  const [form, setform] = useState({
    title: "",
    reps: "",
    load: "",
  });



  
  // Delete Request

  const deleteworkout = async (_id) => {
    await axios.delete(`http://localhost:4000/api/workout/${_id}`);
    getworkout();
  };

  //Update Request
  const [updateform, setupdate] = useState({
      _id: null,
      title: "",
      reps: "",
      load: "",
    });

    const updatedata = (item) => {
      setupdate({
        _id: item._id,
        title: item.title,
        reps: item.reps,
        load: item.load,
      });
    };

  return (
    <>
      <Data.Provider value={{ workout, setworkout, getworkout, form, setform,deleteworkout,updateform, setupdate,updatedata}}>
        {children}
      </Data.Provider>
    </>
  );
};

export default Workoutcontext;
