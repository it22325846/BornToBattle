import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    topic: '',
    type: '', // Default value for type
    gender: '', // Default value for gender
    ageGroup: '', // Default value for ageGroup
    time: '',
    
  });

  console.log('form data is set');

  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    // Fetch categories from backend when component mounts
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8020/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Clear the error message for the current input field
    // setErrors({
    //   ...errors,
    //   [name]: '', // Clear the error message for the current field
    // });

    const onlyLettersRegex = /^[A-Za-z]+$/;
    if (name === 'topic' && !onlyLettersRegex.test(value)) {
      // Set an error message if the input value contains non-letter characters
      setError('Name should only contain letters');
      setFormData(prevState => ({ ...prevState, [name]: '' }));
      return;
    } else {
      // Clear the error message if the input value is valid
      setError('');
    }
    // // Handle specific logic based on category selection
    // if (name === 'category' && value === 'Beatbox') {
    //   // Set type to 'individual' and disable type selection for 'Beatbox' category
    //   setFormData({
    //     ...formData,
    //     type: 'individual', // Lock type to 'individual'
    //   });
    // }
  

  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Perform form validation
    const validationErrors = {};

    
    if (!formData.topic) {
    
      alert("Event name is required");
    }
    if (!formData.type) {
      // validationErrors.type = 'Please select Individual/Group';
      alert("Please select Individual/Group");
    }
    if (!formData.gender) {
      // validationErrors.gender = 'Please select Gender';
      alert("Please select Gender");
      
    }
    if (!formData.ageGroup) {
      // validationErrors.ageGroup = 'Please select Age Category';
      alert("Please select Age Category");
    }
    if (!formData.time) {
      // validationErrors.time = 'Event time is required';
      alert("Event time is required")
    }
  
    try {
      // Check if the entered time already exists in the database
      const response = await axios.get('http://localhost:8020/events');
      const existingEvents = response.data.existingEvents;

      const isTimeExists = existingEvents.some((event) => event.time === formData.time);
  
      if (isTimeExists) {
        validationErrors.time = 'Event time clashes with another event';
      }
    }
//     try {
//   // Check if the entered time has at least a one-hour gap from existing events in the database
//   const response = await axios.get('http://localhost:8020/events');
//   const existingEvents = response.data.existingEvents;

//   // Convert time strings to Date objects for easier comparison
//   const newEventTime = new Date(formData.time);

//   const isTimeAvailable = !existingEvents.some((event) => {
//     // Convert existing event time string to Date object
//     const existingEventTime = new Date(event.time);
    
//     // Calculate the time difference in milliseconds
//     const timeDifference = Math.abs(newEventTime - existingEventTime);

//     // Check if the time difference is less than or equal to one hour (in milliseconds)
//     // 1 hour = 60 minutes * 60 seconds * 1000 milliseconds
//     return timeDifference <= (1 * 60 * 60 * 1000);
//   });

//   if (!isTimeAvailable) {
//     validationErrors.time = 'There should be at least a one-hour gap between events';
//   }
// } 
catch (error) {
      console.error('Error checking existing events:', error);
      validationErrors.time = 'Error checking existing events';
    }
  
    setErrors(validationErrors);
  
    // // Check if there are any validation errors
    // if (Object.keys(validationErrors).length > 0) {
    //   alert("Select a different time");
    //   return; // Stop submission if there are validation errors
    // }

    if (validationErrors.time) {
         alert("Event time clashes with another event. Select a different time");
         return; // Stop submission if there are validation errors
       }
  
    try {
      const response = await axios.post('http://localhost:8020/event/save', formData);
      if (response.data.success) {
        setFormData({
          topic: '',
          type: '',
          gender: '',
          ageGroup: '',
          time: '',
          
        });
        console.log('time is set');
        // Clear all errors after successful submission
        setErrors({});
        alert("Event created successfully");
        // Redirect to events page after successful submission
        window.location.href = '/e';
      } else {
        alert("Failed to create event");
      }
    } catch (error) {
      console.error('Error occurred while creating event:', error);
      alert("Failed to create event. Please try again.");
    }
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

  const inputStyle = {
    width: '100%', // Full width
    padding: '6px', // Padding around text
    fontSize: '16px', // Font size
    marginBottom: '15px', // Spacing between inputs
    boxSizing: 'border-box', // Include padding in width calculation
    borderRadius: '5px', // Rounded corners
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      <h2 style={{ color: 'black' }}>Add New Event</h2>
      <form onSubmit={onSubmit}>

      <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Event Category
          </label>
          <select
            className="form-control"
            value={formData.category}
            onChange={handleInputChange}
            id="category"
            name="category"
            style={inputStyle}
          >
            <option value="">Select Event Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.topic}>
                {category.topic}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="topic" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter event name"
            value={formData.topic}
            onChange={handleInputChange}
            id="topic"
            name="topic"
            required
            style={inputStyle}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        {/* {formData.category === 'Beatbox' ? (
          <input
            type="text"
            className="form-control"
            value="individual"
            disabled
          />
        ) : ( */}
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Individual/Group
          </label>
          <select
            className="form-control"
            value={formData.type}
            onChange={handleInputChange}
            id="type"
            name="type"
            // disabled={formData.category === 'Beatbox'}
            style={inputStyle}
          >
            <option value="">Select Type</option>
            <option value="individual">Individual</option>
            <option value="group">Group</option>
          </select>
        </div>
         {/* )} */}

{/* {formData.type === 'Group' ? (
          <input
            type="text"
            className="form-control"
            value="Open"
            disabled
          />
        ) : ( */}
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-control"
            value={formData.gender}
            onChange={handleInputChange}
            id="gender"
            name="gender"
            style={inputStyle}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="open">Open</option>
          </select>
        </div>
          {/* )} */}

{/* {formData.type === 'Group' ? (
          <input
            type="text"
            className="form-control"
            value="Open"
            disabled
          />
        ) : ( */}
        <div className="mb-3">
          <label htmlFor="ageGroup" className="form-label">
            Age Category
          </label>
          <select
            className="form-control"
            value={formData.ageGroup}
            onChange={handleInputChange}
            id="ageGroup"
            name="ageGroup"
            style={inputStyle}
          >
            <option value="">Select Age Category</option>
            <option value="under18">Under 18</option>
            <option value="above18">Above 18</option>
            <option value="open">Open</option>
          </select>
        </div>
          {/* )} */}

        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            placeholder="Enter event time"
            value={formData.time}
            onChange={handleInputChange}
            id="time"
            name="time"
            required
          />
          
        </div>

        
        {/* Display error message for time */}
        {errors.time && (
          <div className="alert alert-danger">{errors.time}</div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;