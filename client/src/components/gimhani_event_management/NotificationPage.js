import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8020/notifications');
      setNotifications(response.data.notifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              <strong>Action:</strong> {notification.action}, 
              <strong> Event ID:</strong> {notification.eventId}, 
              <strong> Timestamp:</strong> {notification.timestamp}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
