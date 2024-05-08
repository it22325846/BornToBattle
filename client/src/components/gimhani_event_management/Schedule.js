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
   // <div style={{ backgroundImage: url("/Images/b2b4.jpg")}}>
    <div style={{ minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
    <div className="container" style={{ backgroundColor: '#ced4da', opacity: 0.9 }}>

    {/* <p style={{ color: 'black', fontSize: '1.5rem' }}>Welcome to the biggest battle of the year!</p> */}
    <div>
      <h2 style={{ color: 'black'}}> Discover All Events Here! </h2>

 {/* Search Bar */}
      <div className="row mb-3">
        <div className="col-lg-12">
          <input
            className="form-control"
            type="search"
            placeholder="Search by event name"
            onChange={handleSearchArea}
            style={{ height: '50px', fontSize: '1.5rem' }}
          />
        </div>
      </div>

      <div>
      <h3 style={{ color: 'black' }}>Dancing Events</h3>
        <table className="table">
          <thead>
            <tr>
                <th scope="col" style={{ color: 'black' }}>Event Name</th>
                <th scope="col" style={{ color: 'black' }}>Individual/Group</th>
                <th scope="col" style={{ color: 'black' }}>Gender</th>
                <th scope="col" style={{ color: 'black' }}>Age category</th>
                <th scope="col" style={{ color: 'black' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {dancingEvents.map((event, index) => (
              <tr key={index}>
                <td style={{ color: 'black' }}>{event.topic}</td>
                <td style={{ color: 'black' }}>{event.type}</td>
                  <td style={{ color: 'black' }}>{event.gender}</td>
                  <td style={{ color: 'black' }}>{event.ageGroup}</td>
                  <td style={{ color: 'black' }}>{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h5  style={{ color: 'red' }}>Total Dancing Events: {totalDancingEvents}</h5>
        </div>
      </div>

      <div>
        <h3  style={{ color: 'black' }}>Beatbox Events</h3>
        <table className="table">
          <thead>
            <tr>
            <th scope="col" style={{ color: 'black' }}>Event Name</th>
                <th scope="col" style={{ color: 'black' }}>Individual/Group</th>
                <th scope="col" style={{ color: 'black' }}>Gender</th>
                <th scope="col" style={{ color: 'black' }}>Age category</th>
                <th scope="col" style={{ color: 'black' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {beatboxEvents.map((event, index) => (
              <tr key={index}>
                <td style={{ color: 'black' }}>{event.topic}</td>
                <td style={{ color: 'black' }}>{event.type}</td>
                  <td style={{ color: 'black' }}>{event.gender}</td>
                  <td style={{ color: 'black' }}>{event.ageGroup}</td>
                  <td style={{ color: 'black' }}>{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h5  style={{ color: 'red' }}>Total Beatbox Events: {totalBeatboxEvents}</h5>
        </div>
      </div>

      <div>
        <h4  style={{ color: 'black', fontWeight:'bold' }}>Total Events: {totalEvents}</h4>
      </div>
    </div>

    </div>
    </div>
   // </div>
  );
};

export default Schedule;