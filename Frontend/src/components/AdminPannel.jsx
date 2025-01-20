import React from 'react';
import "./style/AdminPannel.css";

const goBack = () => {
  window.history.back();
};

const AdminPanel = () => {
  return (
    <div className="container">

      <button onClick={goBack} className="Admin-back-button">
        <i className="fa fa-arrow-left"></i> 
      </button>


      <h1 className="admin-title">Admin Panel</h1>

      <div className="Admin-table-container">
        <h3 className="Admin-table-title">User List</h3>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>john.doe@example.com</td>
              <td>+1234567890</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>Smith</td>
              <td>jane.smith@example.com</td>
              <td>+9876543210</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="Admin-table-container">
        <h3 className="Admin-table-title">Event List</h3>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Meeting Link</th>
              <th>Location</th>
              <th>Participation Method</th>
              <th>Event Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Start Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Online Conference</td>
              <td>
                <a href="#">Join Link</a>
              </td>
              <td>Zoom</td>
              <td>Online</td>
              <td>Conference</td>
              <td>2025-02-01</td>
              <td>2025-02-01</td>
              <td>10:00 AM</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Workshop</td>
              <td>
                <a href="#">Join Link</a>
              </td>
              <td>Google Meet</td>
              <td>Online</td>
              <td>Workshop</td>
              <td>2025-02-05</td>
              <td>2025-02-05</td>
              <td>2:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
