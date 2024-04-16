import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateCandidate() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    event: "",
    phoneNumber: "",
    category: "",
    un: "",
    username: localStorage.getItem('username') || '',
    categoryOptions: {
      dancing: ['Hiphop', 'AllStyles'],
      rap: ['N/A'],
      beatbox: ['N/A'],
    },
  });
  const [ageError, setAgeError] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      alert('Please log in');
      window.location.href = '/signup';
    } else {
      setFormData(prevState => ({ ...prevState, username: storedUsername }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age' && parseInt(value) <= 0) {
      setAgeError("Invalid");
      return;
    }

    // Clear the error if age is valid
    if (name === 'age' && ageError) {
      setAgeError("");
    }
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, gender, event, phoneNumber, category, username } = formData;

    const data = {
      name: name,
      age: age,
      gender: gender,
      event: event,
      phoneNumber: phoneNumber,
      category: category,
      un: username,
    };

    console.log(data);

    axios.post("/candidates/save", data)
      .then((res) => {
        if (res.data.success) {
          alert('Sign-up successful!');
          if (username === 'admin') {
            window.location.href = '/admin';
          } else {
            window.location.href = '/profile';
          }
        }
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
  };

  const { event, categoryOptions, username } = formData;
  const categories = categoryOptions[event] || [];

  return (
    <div>
      {username === 'admin' ? (
        <p>Add candidate and give un and pw to them</p>
      ) : (
        <p>Welcome, {username}</p>
      )}
      <h2 style={{ marginLeft: '1rem' }}>Apply for event / <a href="/creategroup">Apply as a team</a></h2> 
      <form onSubmit={handleSubmit} style={{ marginLeft: '1rem' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
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
            Age
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
          {ageError && <div style={{ color: 'red' }}>{ageError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <br></br>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={{ width: '10%'}}
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
          <br></br>
          <select
            className="form-select"
            id="event"
            name="event"
            value={event}
            onChange={handleChange}
            required
            style={{ width: '10%' }}
          >
            <option value="">Select event</option>
            <option value="dancing">Dancing</option>
            {/* <option value="rap">Rap</option> */}
            <option value="beatbox">beatbox</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <br></br>
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            style={{ width: '10%' }}
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={{ width: '30%' }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateCandidate;
