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
      .get('http://localhost:8020/events')
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

      <p style={{ color: 'black', fontSize: '1.5rem' }}>Welcome to the biggest battle of the year!</p>


      <div className="row mb-4">
  <div className="col-lg-4 col-md-4 col-sm-6">
    <img src="/Images/event1.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
  </div>
  <div className="col-lg-4 col-md-4 col-sm-6">
    <img src="/Images/event2.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
  </div>




 
</div>


      {/* Search Bar */}
      <div className="row mb-3">
          <div className="col-lg-12">
            <input
              className="form-control form-control-lg"
              type="search"
              placeholder="Search by event name"
              onChange={handleSearchArea}
              style={{ height: '50px', fontSize: '1.5rem' }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4>All Events</h4>
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
               
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, index) => (
                <tr key={event._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{event.category}</td>
                  <td>
                    {/* <a href={`/eventd/${event._id}`}> */}
                        {event.topic}
                        {/* </a> */}
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

<p style={{ color: 'blue', fontWeight: 'bold' }}> View Schedule</p>


          {/* Calendar Image */}
  <div className="col-lg-4 col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
    <a href="/calendar">
      <img src="/Images/calendar1.jpg" alt="Calendar" style={{ width: '50%', height: '50%', cursor: 'pointer' }} />
    </a>
  </div>

 {/* View Schedule Button */}
 {/* <div style={{ marginTop: '10px', textAlign: 'center' }}>
      <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <a href="/calendar" style={{ textDecoration: 'none', color: 'white' }}>
    View Schedule
  </a>
</button>

      </div> */}
       
      </div>
    </div>
  );
};

export default DisplayEvents;
