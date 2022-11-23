import React from "react";
import "../Records/Records.css";
import { useContext, useEffect } from "react";
import { Data } from "../../Context/Workoutcontext";

const Records = () => {
  const { workout, getworkout, deleteworkout, updatedata } = useContext(Data);
  useEffect(() => {
    getworkout(); 
  }, []);
  return (
    <div>
      {workout &&
        workout.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h1>{item.title}</h1>
              <p> Reps : {item.reps}</p>
              <p> Load : {item.load}</p>
              <div className="btns">
                <button className="btn" onClick={() => updatedata(item)}>
                  <img src={require("../../asserts/edit.png")} alt="" /> Edit
                </button>{" "}
                <button className="btn" onClick={() => deleteworkout(item._id)}>
                  <img src={require("../../asserts/delete.png")} alt="" />
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
