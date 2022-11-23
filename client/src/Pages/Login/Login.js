import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login, error} = useLogin()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await login(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h1>Login Here !</h1>
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

        <button>LOGIN</button>
        {error && <p>{error}</p>}
        
        <p>
          Don't have account <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
