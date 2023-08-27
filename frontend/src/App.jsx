import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
// import { Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/home" element={<ProtectedRoute Component={FormPage} />} /> */}
      </Routes>
    </>
  );
}

export default App;
