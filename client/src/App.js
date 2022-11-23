import "./App.css";
import {BrowserRouter as Router , Routes , Route , Navigate} from "react-router-dom"
import { useAuthContext } from "./Hooks/useAuthContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

function App() {
  const {user} = useAuthContext()
  return (
    <div className="sec">
        <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
          <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
