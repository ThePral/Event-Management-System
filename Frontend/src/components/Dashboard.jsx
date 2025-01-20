import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './style/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-none d-md-flex flex-column Dashboard-sidebar">
          <h2>User Panel</h2>
          <ul className="flex-grow-1">
            <li>
              <i className="fa fa-users"> 
                <Link to="/EditProf"> &nbsp; Profile</Link>
              </i>
            </li>
            <li>
              <i className="fa fa-file">
                <Link to="/Events"> &nbsp; Events</Link>
              </i>
            </li>
          </ul>
          <button className="btn btn-secondary w-100" >
          <Link to="/">Log Out</Link>
          </button>
        </nav>

        <nav className="navbar navbar-dark bg-dark d-md-none">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileSidebar"
              aria-controls="mobileSidebar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand ms-2">User Panel</span>
          </div>
        </nav>
        <div className="collapse bg-dark d-md-none" id="mobileSidebar">
          <div className="p-3">
            <ul className="list-unstyled">
              <li className="mb-2 text-white">
                <i className="fa fa-users"></i>
                <Link to="/EditProf" className="text-white">Profile</Link>
              </li>
              <li className="mb-2 text-white">
                <i className="fa fa-file"></i>
                <Link to="/Events" className="text-white">Events</Link>
              </li>
            </ul>
            <button className="btn btn-secondary w-100">Logout</button>
          </div>
        </div>

        {/* Main Content */}
        <main className="Dashboard-main col-md-9 col-lg-10 ms-auto">
          <div className="Dashboard-content-header d-flex justify-content-between align-items-center">
            <h1>Welcome to User Panel</h1>
          </div>

          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="D-card p-3">
                <h3>
                  <i className="fa fa-users"></i> Event Created
                </h3>
                <ul>
                  <li>event1</li>
                  <li>event2</li>
                  <li>event3</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="D-card p-3">
                <h3>
                  <i className="fa fa-envelope"></i> Messages
                </h3>
                <ul>
                  <li>
                    <p>Create, edit, and organize website content and articles.</p>
                  </li>
                  <li>
                    <p>Create, edit, and organize website content and articles.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="D-card p-3">
                <h3>
                  <i className="fa fa-list"></i> Event Participated
                </h3>
                <ul>
                  <li>event1</li>
                  <li>event2</li>
                  <li>event3</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
