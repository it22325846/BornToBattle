import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Schedule = () => {
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

  const filterByCategory = (category) => {
    return events.filter((event) =>
      event.category.toLowerCase() === category && event.topic.toLowerCase().includes(searchKey)
    );
  };

  const dancingEvents = filterByCategory('dancing');
  const beatboxEvents = filterByCategory('beatbox');

  const totalDancingEvents = dancingEvents.length;
  const totalBeatboxEvents = beatboxEvents.length;
  const totalEvents = events.length;

  return (
    <div>
      <h2>Events</h2>

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

      <div>
      <h3 style={{ color: 'white' }}>Dancing Events</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Event Name</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {dancingEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.topic}</td>
                <td>{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h5  style={{ color: 'white' }}>Total Dancing Events: {totalDancingEvents}</h5>
        </div>
      </div>

      <div>
        <h3  style={{ color: 'white' }}>Beatbox Events</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Event Name</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {beatboxEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.topic}</td>
                <td>{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h5  style={{ color: 'white' }}>Total Beatbox Events: {totalBeatboxEvents}</h5>
        </div>
      </div>

      <div>
        <h4  style={{ color: 'white' }}>Total Events: {totalEvents}</h4>
      </div>
    </div>
  );
};

export default Schedule;
