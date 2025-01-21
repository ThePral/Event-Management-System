import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import LoginSignup from "./components/LoginSignup";
import Forgetpass from "./components/Forgetpass";
import ResetCode from "./components/ResetCode";
import EditProf from "./components/EditProf";
import CreateEvent from "./components/CreateEvent";
import OurTeam from "./components/OurTeam";
import Dashboard from "./components/Dashboard";
import Events from "./components/Events";
import AdminPanel from "./components/AdminPannel";
import axios from "axios";
import { ToastContainer } from "react-toastify";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE, OPTIONS";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, X-Requested-With, Content-Type, Accept";
axios.defaults.headers.common["withCredentials"] = false;

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<LoginSignup />}
          />
          <Route
            path='/forgetpass'
            element={<Forgetpass />}
          />
          <Route
            path='/ResetCode'
            element={<ResetCode />}
          />
          <Route
            path='/EditProf'
            element={<EditProf />}
          />
          <Route
            path='/CreateEvent'
            element={<CreateEvent />}
          />
          <Route
            path='/OurTeam'
            element={<OurTeam />}
          />
          <Route
            path='/Dashboard'
            element={<Dashboard />}
          />
          <Route
            path='/Events'
            element={<Events />}
          />
          <Route
            path='/AdminPannel'
            element={<AdminPanel />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
