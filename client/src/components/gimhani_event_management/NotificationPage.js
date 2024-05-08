import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8020/notifs');
      setNotifications(response.data.existingNotifications); // Update here
      console.log("fetched data", response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };
  

  const ltext = localStorage.getItem('Ltext'); // Set session for user type
  const levent = localStorage.getItem('Ltopic'); // Store
  const lid = localStorage.getItem('LtopicId');
  

  return (
    <div className="container mt-5" style={{ color: "white" }}>
      <h1 style={{ textAlign: 'center' }}> All Notifications</h1>
      <h5> Click to see new details of the event</h5>
      <h2 style={{ textAlign: 'left' }}>{ltext}<a href={`/displayevents/${lid}`}>{levent}</a></h2>
      
      <table className="table" style={{ color: "white" }}>
        <thead>
          <tr>
            {/* <th>Text</th>
            <th>Topic</th>
            <th>Topic ID</th> */}
          </tr>
        </thead>
        <tbody>
        {notifications && notifications.map(notification => (
  <tr key={notification.topicId}>
    <td>
      <ul>
        <li>
          <a href={`/displayevents/${notification.topicId}`}>{notification.text}</a>
        </li>
      </ul>
    </td>
    <td>{notification.topic}</td>
  </tr>
))}


        </tbody>
      </table>
    </div>
  );
};

export default NotificationPage;
