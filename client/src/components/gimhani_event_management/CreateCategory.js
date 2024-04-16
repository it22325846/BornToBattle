//import React, { Component } from 'react'
import React, { useState } from 'react';
import axios from 'axios';


const CreateCategory = () => {
  const [formData, setFormData] = useState({
    topic: '',
    judgesCount: '',
    rules: '',
    registrationOpen: '',
  });
  //formData represents the current state value
  //setFormData is a function used to update the state

  const HandleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    axios.post('http://localhost:8000/cat/save', formData)
      .then((res) => {
        if (res.data.success) {
          setFormData({
            topic: '',
            judgesCount: '',
            rules: '',
            registrationOpen: '',
          });
          window.location.href = '/e';
        }

      })
      .catch((error) => {
        console.error('Error occurred while creating event:', error);
      });
  };

  const containerStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: 'gray',
    color: 'white',
    maxWidth: '600px',
    margin: 'auto', // Center the container
  };

  return(
    <div className="container mt-5" style={containerStyle}>
  
    <form>
      <div className="mb-3">
        <label htmlFor="topic" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name of the event"
          value={formData.topic}
          onChange={HandleInputChange}
          id="topic"
          name="topic"
        />
      </div>

      {/* <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter description"
          value={formData.description}
          onChange={HandleInputChange}
          id="description"
          name="description"
        />
      </div> */}

      <div className="mb-3">
        <label htmlFor="judgesCount" className="form-label">
          Judges count
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Judges"
          value={formData.judgesCount}
          onChange={HandleInputChange}
          id="judgesCount"
          name="judgesCount"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rules" className="form-label">
          Rules
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Rules"
          value={formData.rules}
          onChange={HandleInputChange}
          id="rules"
          name="rules"
        />
      </div>

      <div className="mb-3">
  <label className="form-label">Is registration open?</label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      id="registrationOpenYes"
      name="registrationOpen"
      value="true"
      checked={formData.registrationOpen === 'true'}
      onChange={HandleInputChange}
    />
    <label className="form-check-label" htmlFor="registrationOpenYes">
      Yes
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      id="registrationOpenNo"
      name="registrationOpen"
      value="false"
      checked={formData.registrationOpen === 'false'}
      onChange={HandleInputChange}
    />
    <label className="form-check-label" htmlFor="registrationOpenNo">
      No
    </label>
  </div>
</div>


    

      <button type="submit" className="btn btn-danger" onClick={onSubmit}>
        Submit
      </button>
    </form>
  </div>
  );
};

export default CreateCategory;
