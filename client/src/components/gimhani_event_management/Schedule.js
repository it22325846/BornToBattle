import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    retrieveEvents();
  }, []);

  const retrieveEvents = () => {
    axios.get("http://localhost:8020/events")
      .then((res) => {
        if (res.data.success) {
          setEvents(res.data.existingEvents);
          setLoading(false);
          setError(null);
        } else {
          setLoading(false);
          setError('Failed to fetch events');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('Network error');
        console.error(error);
      });
  }

  const handleSearchArea = (e) => {
    setSearchKey(e.currentTarget.value.toLowerCase());
  };

  const filteredEvents = events.filter((event) =>
    event.topic.toLowerCase().includes(searchKey)
  );

  const totalEvents = events.length;

  return (
    <div>
      <h2>All Events</h2>

      <div className="row">
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search by event name"
            onChange={handleSearchArea}
          />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event Name</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event, index) => (
            <tr key={index}>
              <td>{event.topic}</td>
              <td>{event.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h4>Total Events: {totalEvents}</h4>
      </div>
    </div>
  );
};

export default Events;
