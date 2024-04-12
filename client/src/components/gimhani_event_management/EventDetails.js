import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/event/${id}`).then((res) => {
      if (res.data.success) {
        setEvent(res.data.event);
      }
    });
  }, [id]);

  return (
    <div className="container d-flex justify-content-center" style={{ marginTop: '30px', backgroundColor: '#ced4da' }}>
      <div>
        <h3 className="text-body-emphasis" style={{ color: 'red' }}>{event.topic}</h3>
        <hr />

        <dl className='row'>
          <dt className='col-sm-3'> Event Category</dt>
          <dd className='col-sm-9'>{event.category}</dd>
          <dt className='col-sm-3'> Event Name</dt>
          <dd className='col-sm-9'>{event.topic}</dd>
          <dt className='col-sm-3'> Individual/Group</dt>
          <dd className='col-sm-9'>{event.type}</dd>
          <dt className='col-sm-3'> Gender</dt>
          <dd className='col-sm-9'>{event.gender}</dd>
          <dt className='col-sm-3'>Age group</dt>
          <dd className='col-sm-9'>{event.ageGroup || 'N/A'}</dd>
          <dt className='col-sm-3'>Time</dt>
          <dd className='col-sm-9'>{event.time}</dd>
         
          {/* <dt className='col-sm-3'>Event category</dt>
          <dd className='col-sm-9'>{event.eventCategory || 'N/A'}</dd>
          <dt className='col-sm-3'>Style</dt>
          <dd className='col-sm-9'>{event.style || 'N/A'}</dd> */}
        </dl>
      </div>
    </div>
  );
};

export default EventDetails;
