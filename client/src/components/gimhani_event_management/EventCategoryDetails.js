import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventCategoryDetails = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8020/cat/${id}`).then((res) => {
      if (res.data.success) {
        setCategory(res.data.categories);
      }
    });
  }, [id]);

  return (
    <div className="container d-flex justify-content-center" style={{ marginTop: '30px', backgroundColor: '#ced4da' }}>
      <div>
        <h3 className="text-body-emphasis" style={{ color: 'red' }}>{category.topic}</h3>
        <hr />

        <dl className='row'>
          <dt className='col-sm-3'> Event Category</dt>
          <dd className='col-sm-9'>{category.topic}</dd>
          <dt className='col-sm-3'> Judges count</dt>
          <dd className='col-sm-9'>{category.judgesCount}</dd>
          <dt className='col-sm-3'> Rules </dt>
          <dd className='col-sm-9'>{category.rules}</dd>
          <dt className='col-sm-3'> registrationOpen</dt>
          <dd className='col-sm-9'>{category.registrationOpen}</dd>
          {/* <dt className='col-sm-3'>Age group</dt>
          <dd className='col-sm-9'>{event.ageGroup || 'N/A'}</dd>
          <dt className='col-sm-3'>Time</dt>
          <dd className='col-sm-9'>{event.time}</dd> */}
         
          {/* <dt className='col-sm-3'>Event category</dt>
          <dd className='col-sm-9'>{event.eventCategory || 'N/A'}</dd>
          <dt className='col-sm-3'>Style</dt>
          <dd className='col-sm-9'>{event.style || 'N/A'}</dd> */}
        </dl>
      </div>
    </div>
  );
};

export default EventCategoryDetails;
