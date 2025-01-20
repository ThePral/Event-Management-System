import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Events.css";
import { Link } from "react-router-dom";


const Events = () => {
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h2 className="Events-h2">Would you like to join an existing event?</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="eventLink" className="form-label">
              Event Link
            </label>
            <input
              type="url"
              className="form-control"
              id="eventLink"
              placeholder="Enter the event link"
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Join Event
          </button>
        </form>
      </section>

      {/* Section 2: Create a New Event */}
      <section className="mb-5">
        <h2 className="Events-h2">Would you like to create a new event?</h2>
        <Link to="/CreateEvent" className="btn btn-secondary">Create Event</Link>

      </section>

      {/* Section 3: Event List with Pagination */}
      <section>
        <h2 className="Events-h2">Event overview</h2>
        <ul className="nav Events-nav-tabs mb-3" id="eventTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              type="button"
              role="tab"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="participated-tab"
              data-bs-toggle="tab"
              data-bs-target="#participated"
              type="button"
              role="tab"
            >
              Participated
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="organized-tab"
              data-bs-toggle="tab"
              data-bs-target="#organized"
              type="button"
              role="tab"
            >
              My Organized Events
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="public-tab"
              data-bs-toggle="tab"
              data-bs-target="#public"
              type="button"
              role="tab"
            >
              Public Events
            </button>
          </li>
        </ul>
        <div className="tab-content" id="eventTabContent">
          {/* All Events Tab */}
          <div className="tab-pane fade show active" id="all" role="tabpanel">
            <ul className="list-group">
              <li className="list-group-item">Event 1</li>
              <li className="list-group-item">Event 2</li>
              <li className="list-group-item">Event 3</li>
            </ul>
          </div>
          <div className="tab-pane fade" id="participated" role="tabpanel">
            <ul className="list-group">
              <li className="list-group-item">Participated Event 1</li>
              <li className="list-group-item">Participated Event 2</li>
            </ul>
          </div>
          <div className="tab-pane fade" id="public" role="tabpanel">
            <ul className="list-group">
              <li className="list-group-item">Public Event 1</li>
              <li className="list-group-item">Public Event 2</li>
            </ul>
          </div>
          {/* Organized Events Tab */}
          <div className="tab-pane fade" id="organized" role="tabpanel">
            <ul className="list-group">
              <li className="list-group-item">Organized Event 1</li>
              <li className="list-group-item">Organized Event 2</li>
            </ul>
          </div>
        </div>
        {/* Pagination */}
        <nav aria-label="Event pagination">
          <ul className="pagination Events-pagination justify-content-center mt-3">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="text-center mt-5">
        <Link to="/Dashboard" className="btn btn-secondary">Back to Dashboard</Link>

      </div>
    </div>
  );
};

export default Events;
