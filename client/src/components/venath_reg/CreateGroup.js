import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateGroup() {
  const [formData, setFormData] = useState({
    groupName:'',
    name: '',
    age: '',
    gender: '',
    event: 'dancing', // Default event value
    phoneNumber: '',
    category: 'Open', // Default category value
    username: localStorage.getItem('username') || '',
    members: Array.from({ length: 4 }, () => ({
      name: '',
      age: '',
      gender: '',
    })),
  });

  const [phoneNumberError, setPhoneNumberError] = useState('');

  useEffect(() => {
    localStorage.setItem('userType', "group");//set session for user type for testing, chard to input manymembers


    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      alert('Please log in');
      window.location.href = '/signup';
    } else {
      setFormData((prevState) => ({ ...prevState, username: storedUsername }));
    }
    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Custom validation for phone number
    if (name === 'phoneNumber' && !value.trim()) {
      setPhoneNumberError('Phone number is required');
      return;
    }

    // Clear phone number error if valid
    if (name === 'phoneNumber' && phoneNumberError) {
      setPhoneNumberError('');
    }

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index][field] = value;
    setFormData((prevState) => ({ ...prevState, members: updatedMembers }));
  };

  const handleSubmit = (e) => {
    //localStorage.setItem('userType', "group");//set session for user type
    e.preventDefault();

    const { groupName, name, age, gender, event, phoneNumber, category, members } = formData;

    const data = {
      groupName,
      name,
      age,
      gender,
      event,
      phoneNumber,
      category,
      username,
      members,
    };

    axios
      .post('/group/save', data)
      .then((res) => {
        if (res.data.success) {
          alert('Sign-up successful!');
          window.location.href = '/'; // Redirect after successful submission
        }
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };

  const { username } = formData;

  return (
    <div>
      {username === 'admin' ? (
        <p>Add candidate and give username and password to them</p>
      ) : (
        <p style={{ color: 'white' }}> Welcome, {username}</p>
      )}

      <h2 style={{ marginLeft: '1rem' }}>Apply For Group Battle</h2>

      <form onSubmit={handleSubmit} style={{ marginLeft: '1rem' , color: 'white' }}>

      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Group Name
          </label>
          <input
            type="text"
            className="form-control"
            id="groupName"
            name="groupName"
            value={formData.groupName}
            onChange={handleChange}
            required
            style={{ width: '30%' }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Group Leader Name
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
            required
            style={{ width: '10%' }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
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

          {phoneNumberError && <div style={{ color: 'red' }}>{phoneNumberError}</div>}
        </div>

        {/* Members Section */}
        <h3>Group Members</h3>
        <br></br>
        {formData.members.map((member, index) => (
          <div key={index} className="mb-3">
<h4><b style={{ color: 'red' }}> Member {index + 1} Name:</b></h4>
            <label htmlFor={`name_${index}`} className="form-label">
              Member {index + 1} Name:
            </label>
            <input
              type="text"
              id={`name_${index}`}
              value={member.name}
              onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
              style={{ width: '30%' }}
            />

            <label htmlFor={`age_${index}`} className="form-label">
              Member {index + 1} Age:
            </label>
            <input
              type="number"
              id={`age_${index}`}
              style={{ width: '30%' }}
              value={member.age}
              onChange={(e) => handleMemberChange(index, 'age', e.target.value)}
            />

            <label htmlFor={`gender_${index}`} className="form-label">
              Member {index + 1} Gender:
            </label>
            <select
              id={`gender_${index}`}
              style={{ width: '30%' }}
              value={member.gender}
              onChange={(e) => handleMemberChange(index, 'gender', e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br></br>
            <br></br>
          </div>
          
        ))}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateGroup;
