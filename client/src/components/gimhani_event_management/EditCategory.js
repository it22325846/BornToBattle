import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
// import { events } from './candidates';

export default function EditEvent() {
  const [category, setCategory] = useState({
    topic: '',
    judgesCount: '',
    rules: '',
    registrationOpen: '',
  });

  const { id } = useParams();
  //const history = useHistory(); // Initialize useHistory hook

  // To retrieve data related to a specific post
  useEffect(() => {
    console.log('Fetching post with ID:', id);
    axios.get(`http://localhost:8000/cat/${id}`).then((res) => {
      console.log('Axios response:', res);
      if (res.data.success) {
        setCategory(res.data.categories);
      }
    });
  }, [id]);

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      topic: category.topic,
      judgesCount: category.judgesCount,
      rules: category.rules,
      registrationOpen: category.registrationOpen,

      
      // eventCategory: event.eventCategory,
      // style: event.style,
    };

    console.log(data);

    axios.put(`http://localhost:8000/cat/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Category updated successfully!");
        setCategory({
            topic: "",
            judgesCount: "",
            rules: "",
            registrationOpen: "",
        });

         window.location.href = '/e';
         // history.push('/Events');
      }
    });
  };

  return (
    <div className="container mt-5" style={{border: '2px solid black', padding: '20px',backgroundColor: 'gray',  maxWidth: '600px'}}>
       {/* <div className="card-header text-white bg-danger"> */}
      <h2>Update Category</h2>

      {category.topic !== "" && category.description !== "" ? (
        <form onSubmit={onSubmit}>
         <div className="mb-3">
        <label htmlFor="topic" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name of the event"
          value={category.topic}
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
          value={category.judgesCount}
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
          value={category.rules}
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
      checked={category.registrationOpen === 'true'}
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
      checked={category.registrationOpen === 'false'}
      onChange={HandleInputChange}
    />
    <label className="form-check-label" htmlFor="registrationOpenNo">
      No
    </label>
  </div>
  </div>

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
