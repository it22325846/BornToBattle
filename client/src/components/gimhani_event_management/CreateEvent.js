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

  const [categories, setCategories] = useState([]);

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
    setFormData({
      ...formData,
      [name]: value,
    });
    // if (name === 'category' && value === 'beatbox') {
    //   setFormData({
    //     ...formData,
    //     ageGroup: 'Open',
    //     gender: 'Open',
    //   });
    // }  
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   // Update form data
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });

  //   // Handle specific logic based on category selection
  //   if (name === 'category') {
  //     if (value === 'Beatbox') {
  //       // Set type to 'individual' if category is 'beatbox'
  //       setFormData({
  //         ...formData,
  //         type: 'individual',
  //         gender: 'Open',
  //         ageGroup: 'Open',
  //       });
  //     } else {
  //       // Reset type if category is not 'beatbox'
  //       setFormData({
  //         ...formData,
  //         type: '', // Reset type to default (empty)
  //       });
  //     }
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();

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
          />
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
            type="text"
            className="form-control"
            placeholder="Enter event time"
            value={formData.time}
            onChange={handleInputChange}
            id="time"
            name="time"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
