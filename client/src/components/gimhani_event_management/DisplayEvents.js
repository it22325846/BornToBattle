import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    retrieveEvents();
  }, []);

  const retrieveEvents = () => {
    axios
      .get('http://localhost:8000/events')
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
  };

  const handleSearchArea = (e) => {
    setSearchKey(e.currentTarget.value.toLowerCase());
  };

  const filteredEvents = events.filter((event) =>
    event.topic.toLowerCase().includes(searchKey)
  );

  return (
    <div style={{ minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div className="container" style={{ backgroundColor: '#ced4da' }}>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Events</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by event name"
              onChange={handleSearchArea}
            />
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Event No</th>
                <th scope="col">Event Category</th>
                <th scope="col">Event Name</th>
                <th scope="col">Individual/Group</th>
                <th scope="col">Gender</th>
                <th scope="col">Age category</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, index) => (
                <tr key={event._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{event.category}</td>
                  <td>
                    <a href={`/event/${event._id}`}>{event.topic}</a>
                  </td>
                  <td>{event.type}</td>
                  <td>{event.gender}</td>
                  <td>{event.ageGroup}</td>
                  <td>{event.time}</td>
                
              
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button>
          <a href="/calendar">View Schedule</a>
        </button>
      </div>
    </div>
  );
};

export default DisplayEvents;
