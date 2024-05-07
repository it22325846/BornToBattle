import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditCandidate = () => {
  const [candidate, setCandidate] = useState({});
  const { id } = useParams();
  const username = localStorage.getItem('username') || '';

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    event: '',
    phoneNumber: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, gender, event, phoneNumber, category } = formData;

    const data = {
      name: name,
      age: age,
      gender: gender,
      event: event,
      phoneNumber: phoneNumber,
      category: category
    };

    console.log("Submitting data:", data);

    axios.put(`/candidate/update/${id}`, data)
      .then((res) => {
        console.log("Update response:", res.data);
        if (res.data && res.data.status === "Candidate updated") {
          alert("Success")
          window.location.href = '/cprofile';
          setFormData({
            name: '',
            age: '',
            gender: '',
            phoneNumber: '',
            event:'',
            category: ''
          });
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        alert("Error occurred while updating candidate details.");
      });
  };

  useEffect(() => {
    axios.get(`/candidate/${id}`).then((res) => {
      if (res.data.success) {
        setCandidate(res.data.Candidate);
        setFormData({
          name: res.data.Candidate.name,
          age: res.data.Candidate.age,
          gender: res.data.Candidate.gender,
          event: res.data.Candidate.event,
          phoneNumber: res.data.Candidate.phoneNumber,
          category: res.data.Candidate.category
        });
      }
    });
  }, [id]);

  console.log('candidate Details:', candidate);

  const handleEventChange = (e) => {
    const selectedEvent = e.target.value;
    setFormData({ ...formData, event: selectedEvent, category: '' });
  };

  const eventCategoryOptions = {
    dancing: ['Hiphop', 'AllStyles'],
    beatbox: ['FreeStyle', 'Sound Effect']
  };

  return (
    <div>
      <h2>Edit Candidate</h2>
      <form onSubmit={handleSubmit} style={{ marginLeft: '1rem', color: 'white' }}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <i className="fa-solid fa-pen-to-square"></i>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '30%' }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age <i className="fa-solid fa-pen-to-square"></i>
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            style={{ width: '30%' }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <br />
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            // required
            disabled
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="event" className="form-label">
            Event
          </label>
          <br />
          <select
            className="form-select"
            id="event"
            name="event"
            value={formData.event}
            onChange={handleEventChange}
            // required
          >
            <option value="">Select Event</option>
            <option value="dancing">Dancing</option>
            <option value="beatbox">Beatbox</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category <i className="fa-solid fa-pen-to-square"></i>
          </label>
          <br />
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {eventCategoryOptions[formData.event] &&
              eventCategoryOptions[formData.event].map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number <i className="fa-solid fa-pen-to-square"></i>
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={{ width: '30%' }}
          />
        </div>

        <div>
          <a href='/editpwd' className="text-dark">Change the password <i className="fa-solid fa-pen-to-square"></i></a>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCandidate;
