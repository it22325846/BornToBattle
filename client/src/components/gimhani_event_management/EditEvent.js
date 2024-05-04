import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
// import { events } from './candidates';

export default function EditEvent() {
  const [event, setEvent] = useState({
    topic: "",
    type: "", 
    gender: "",
    ageGroup: "", 
    time: "",
  });

  const { id } = useParams();
  //const history = useHistory(); // Initialize useHistory hook

  // To retrieve data related to a specific post
  useEffect(() => {
    console.log('Fetching post with ID:', id);
    axios.get(`http://localhost:8020/event/${id}`).then((res) => {
      console.log('Axios response:', res);
      if (res.data.success) {
        setEvent(res.data.event);
      }
    });
  }, [id]);

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      topic: event.topic,
      type: event.type,
      gender: event.gender,
      ageGroup: event.ageGroup,
      time: event.time,
      
      // eventCategory: event.eventCategory,
      // style: event.style,
    };

    console.log(data);

    axios.put(`http://localhost:8020/event/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Event updated successfully!");
        setEvent({
          topic: "",
          type: "", 
          gender: "",
          ageGroup: "", 
          time: "",
        });

         window.location.href = '/e';
         // history.push('/Events');
      }
    });
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
    <div className="container mt-5" style={{border: '2px solid black', padding: '20px',backgroundColor: 'gray',  maxWidth: '600px'}}>
       {/* <div className="card-header text-white bg-danger"> */}
      <h2>Update Event</h2>

      {event.topic !== "" && event.description !== "" ? (
        <form onSubmit={onSubmit}>
          <div className="mb-3">
          <label htmlFor="topic" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter event name"
            value={event.topic}
            onChange={HandleInputChange}
            id="topic"
            name="topic"
            style={inputStyle}
          
          />
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Individual/Group
          </label>
          <select
            className="form-control"
            value={event.type}
            onChange={HandleInputChange}
            id="type"
            name="type"
            style={inputStyle}
          >
            <option value="individual">Individual</option>
            <option value="group">Group</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-control"
            value={event.gender}
            onChange={HandleInputChange}
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

        <div className="mb-3">
            <label htmlFor="ageGroup" className="form-label">
              Age Category
            </label>
            <select
              className="form-control"
              value={event.ageGroup}
              onChange={HandleInputChange}
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

          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <input
              type="time"
              className="form-control"
              placeholder="Enter Time"
              value={event.time}
              onChange={HandleInputChange}
              id="time"
              name="time"
              style={inputStyle}
            ></input>
          </div>

      

               {/* <div className="mb-3">
            <label htmlFor="eventCategory" className="form-label">
              Event Category
            </label>
            <select
              className="form-control"
              value={event.eventCategory}
              onChange={HandleInputChange}
              id="eventCategory"
              name="eventCategory"
            >
              <option value="">Select Event Category</option>
              <option value="dancing">Dancing</option>
              <option value="rap">Rap</option>
              <option value="beatboxing">Beatboxing</option>
            </select>
               </div>

               <div className="mb-3">
            <label htmlFor="style" className="form-label">
              Style
            </label>
            <select
              className="form-control"
              value={event.style}
              onChange={HandleInputChange}
              id="style"
              name="style"
            >
              <option value="">Select Style</option>
              <option value="traditional">Traditional</option>
              <option value="hiphop">Hip Hop</option>
              <option value="na">N/A</option>
            </select>
               </div> */}

          <button type="submit" className="btn btn-warning">
            Save
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
   
  );
}
