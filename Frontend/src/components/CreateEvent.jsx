import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/CreateEvent.css";

const EventForm = () => {

    const [currentDate, setCurrentDate] = useState("");
    const navigate = useNavigate();
    const [endDate, setEndDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [requiresTickets, setRequiresTickets] = useState("no");
    const [ticketCount, setTicketCount] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(date.toLocaleDateString(undefined, options));
  }, []);


  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    setStartDate(selectedStartDate);

    if (endDate && selectedStartDate > endDate) {
      setEndDate(selectedStartDate); 
    }
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    setEndDate(selectedEndDate);

    if (selectedEndDate < startDate) {
      alert("End date must be after the start date.");
      setEndDate(""); 
    }
  };

  const handleTicketChange = (event) => {
    setTicketCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="Event-body">
      <div className="Event-form-container">
        <div className="Event-form-header">
          <h5>Fill Out Event Details Form</h5>
          <p className="Event-current-date">{currentDate}</p>
        </div>

        <form className="Event-form" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="meetingLink" className="form-label">
              Meeting Link:
            </label>
            <input
              type="url"
              className="form-control"
              id="meetingLink"
              placeholder="Enter meeting link"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Enter location"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Participation Method:</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="method"
                  id="online"
                  value="Online"
                  required
                />
                <label className="form-check-label" htmlFor="online">
                  Online
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="method"
                  id="inPerson"
                  value="InPerson"
                  required
                />
                <label className="form-check-label" htmlFor="inPerson">
                  In Person
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Event Type:</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Type"
                  id="public"
                  value="public"
                  required
                />
                <label className="form-check-label" htmlFor="public">
                  Public
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Type"
                  id="Private"
                  value="Private"
                  required
                />
                <label className="form-check-label" htmlFor="Private">
                  Private
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Does the event require tickets?</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ticketsRequired"
                  value="yes"
                  checked={requiresTickets === "yes"}
                  onChange={() => setRequiresTickets("yes")}
                  required
                />
                <label className="form-check-label" htmlFor="yes">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ticketsRequired"
                  value="no"
                  checked={requiresTickets === "no"}
                  onChange={() => setRequiresTickets("no")}
                  required
                />
                <label className="form-check-label" htmlFor="no">
                  No
                </label>
              </div>
            </div>
          </div>

          {requiresTickets === "yes" && (
            <div className="mb-3">
              <label htmlFor="ticketCount" className="form-label">
                Number of Tickets:
              </label>
              <input
                type="number"
                className="form-control"
                id="ticketCount"
                value={ticketCount}
                onChange={handleTicketChange}
                placeholder="Enter number of tickets"
                required
              />
            </div>
          )}

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                required
              />
            </div>
          </div>

          <div className="mb-3 mt-3">
            <label htmlFor="startTime" className="form-label">
              Start Time
            </label>
            <input
              type="time"
              className="form-control"
              id="startTime"
              required
            />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn Event-submit-btn"
              onClick={() => navigate(-1)} 
              type="button" 
            >
              Back
            </button>
            <button
              type="submit"
              className="btn Event-submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
