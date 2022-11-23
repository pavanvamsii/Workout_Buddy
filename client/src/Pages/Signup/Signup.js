import React from "react";
import { Link } from "react-router-dom";
import "../Signup/Signup.css";
import { useState } from "react";
import { useSignup } from "../../Hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup , error} = useSignup();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(email,password)
    // console.log(email, password);

    setEmail("")
    setPassword("")
  };
  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h1>Signup Here!</h1>
        <div>
          <label> Email : </label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button>Signup</button>

        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
