import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditJudge = () => {
  
  const [judge, setJudge] = useState({});
  const { id } = useParams();
  const username = localStorage.getItem('username') || '';
  const userType = localStorage.getItem('userType') || '';


  const [error, setError] = useState('');
const [ageError, setAgeError] = useState("");
const [perror, setPerror] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    event: '',
    phoneNumber: '',
    institute: '',
    description: '',
    email:'',
    un: '',
    password: ''
  });
  
console.log("id is ",id);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      // Validate phone number to accept exactly 10 digits
      const isValidPhoneNumber = /^\d{10}$/.test(value);  // \d  a digit, and {10} count
      if (!isValidPhoneNumber && value.length > 0) { 
        
        setPerror('Phone number must be 10 digits');
      } else {
        setPerror('');
      }
    }


    const onlyLettersRegex = /^[A-Za-z]+$/;
       // Check if the input value contains only letters
       if (name === 'name' && !onlyLettersRegex.test(value)) {
        // Set an error message if the input value contains non-letter characters
        setError('Name should only contain letters');
        setFormData(prevState => ({ ...prevState, [name]: '' }));
        return;
      } else {
        // Clear the error message if the input value is valid
        setError('');
      }

      if (name === 'age') {
        if (value === '' || parseInt(value) <= 0 || parseInt(value) > 100) {
          setAgeError("Invalid Age");
          setFormData(prevState => ({ ...prevState, [name]: '' }));
          return;
        } else {
          setAgeError("");
        }
      }

  };

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, age, gender, event, phoneNumber, institute, description,email, un, password } = formData;

  const data = {
    name: name,
    age: age,
    gender: gender,
    event: event,
    phoneNumber: phoneNumber,
    institute: institute,
    description: description,
    email: email,
    un: un,
    password: password
  };

  console.log("Submitting data:", data);

  axios.put(`/judge/update/${id}`, data)
    .then((res) => {
      console.log("Update response:", res.data);
      if (res.data && res.data.status === "Judge updated") {
        alert("Success")
        if(userType=='judge')
        {
          window.location.href = '/judgeprofile';
        }
        else{
          window.location.href = '/editJudges';
        }
        
        setFormData({
          name: '',
          age: '',
          gender: '',
          phoneNumber: '',
          institute: '',
          description: '',
          email:'',
          un: '',
          password: ''
        });
        
      }
    })
    .catch((error) => {
      console.error("Update error:", error);
      alert("Error occurred while updating judge details.");
    });
};




  useEffect(() => {
    axios.get(`/judge/${id}`).then((res) => {
      if (res.data.success) {
        setJudge(res.data.Judge)
        setFormData({
          name: res.data.Judge.name,
          age: res.data.Judge.age,
          gender: res.data.Judge.gender,
          event: res.data.Judge.event,
          phoneNumber: res.data.Judge.phoneNumber,
          institute: res.data.Judge.institute,
          description: res.data.Judge.description,
          email:res.data.Judge.email,
          un: res.data.Judge.un,
          password: res.data.Judge.password
        });
        
      }
    });
  }, [id]);

  console.log('judge Details:', judge);
  

  return (
    <div>
    <h2>Edit Judge</h2>
    <form onSubmit={handleSubmit} style={{marginLeft: '1rem' ,color: 'white'  }}>
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
          //required
          disabled
        >
          <option value="">Select Gender</option>
          <option value="male" >Male</option>
          <option value="female" >Female</option>
        </select>
      </div>


      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Event
        </label>
        <br></br>
        <select
          className="form-select"
          id="event"
          name="event"
          value={formData.event}
          onChange={handleChange}
          //required
          disabled
        >
         <option value="">Select event</option>
          <option value="dancing" >dancing</option>
          <option value="rap" >rap</option>
          <option value="beatbox" >beatbox</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
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
                  {perror && <p className="text-danger">{perror}</p>}

      </div>

      
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
         Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '30%' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="institute" className="form-label">
          Institute
        </label>
        <input
          type="text"
          className="form-control"
          id="institute"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          required
          style={{ width: '30%' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{ width: '30%' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="un" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="un"
          name="un"
          value={formData.un}
          onChange={handleChange}
          required
          disabled
          style={{ width: '30%' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: '30%' }}
          disabled
        />
      </div>
      
      <div>
  <a href='/editpwd' style={{ color: 'white' }}>Change the password <i className="fa-solid fa-pen-to-square"></i></a>
</div>


      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  );
};

export default EditJudge;
