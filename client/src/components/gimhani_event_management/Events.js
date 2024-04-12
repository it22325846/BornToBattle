import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKey, setSearchKey] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    retrieveEvents();
    retrieveCategories();
  }, []);

  const retrieveEvents = () => {
    axios.get("http://localhost:8000/events")
      .then((res) => {
        if (res.data.success) {
          setEvents(res.data.existingEvents);
          setLoading(false);
          setError(null);
        } else {
          setLoading(false);
          setError('Failed to fetch posts');
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('Network error');
        console.error(error);
      });
  }

  const retrieveCategories = () =>{
    axios.get("http://localhost:8000/cat")
    .then((res)=>{
      if(res.data.success){
        setCategories(res.data.existingCategories);
        // setLoading(false);
        // setError(null);
      } 
      })
      .catch((error) => {
        console.error('Error occurred while fetching categories:', error);
      });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/event/delete/${id}`).then((res) => {
      alert("Deleted successfully");
      retrieveEvents();
    });
  }

  const filterData = (events, searchKey) => {
    const result = events.filter((event) =>
      event.topic.toLowerCase().includes(searchKey) ||
      event.description.toLowerCase().includes(searchKey)
    );
    setEvents(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/events")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingEvents, searchKey);
        }
      });
  }

  const totalEvents = events.length;

  return (
    <div>
<h2> Main event Categories </h2>


<div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
  {categories.map((category, index) => (
    <div key={index} style={{ border: '1px solid black', flex: '1 1 auto', minWidth: '200px', padding: '5px', borderRadius: '5px' }}>
      <p style={{ margin: '0', lineHeight: '1.5' }}>{category.topic}</p>
    </div>
    // justifyContent: 'space-between'-- evenly distribute the child elements along the main axis
  ))}
</div>
<div className="d-flex justify-content-between align-items-center">


          <button className="btn btn-dark">
            <a href="/addcat" style={{ textDecoration: 'none', color: 'white' }}>
              Add New Event Category
            </a>
          </button>
          </div>

{/* retrive and display main event category names */}
          {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {categories.map((category, index) => (
      <div key={index} style={{ border: '1px solid black'}}>
        <p style={{ margin: '0', lineHeight: '1.5' }}>{category.topic}</p>
      </div>
    ))}


  </div> */}



          
    <div style={{
      backgroundImage: "url('/b2b4.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div className="container" style={{ backgroundColor: '#ced4da' }}>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

            <h4>All Events</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="search"
              name="searchQuery"
              onChange={handleSearchArea}
            />
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Event No</th>
              <th scope="col">Event Category</th>
              <th scope="col">Event Name</th>
              <th scope="col">Individual/Group</th>
              <th scope="col">Gender</th>
              <th scope="col">Age category</th>
              <th scope="col">Time</th>
              {/* <th scope="col">Time</th> */}
             
              
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{event.category}</td>
                <td>
                  <a href={`/event/${event._id}`}>
                    {event.topic}
                  </a>
                </td>
                <td>{event.type}</td>
                <td>{event.gender}</td>
               
                <td>{event.ageGroup}</td>
                <td>{event.time}</td>
                {/* <td>{event.style}</td> */}
                <td>
                  <a className="btn btn-warning" href={`/edit/${event._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button className="btn btn-danger" onClick={() => onDelete(event._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-dark">
            <a href="/add" style={{ textDecoration: 'none', color: 'white' }}>
              Add New Event
            </a>
          </button>

          <div >
            <h4>Total Events: {totalEvents}</h4>
          </div>
        </div>


      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button> <a href="/calendar"> View Schedule </a></button>
      </div>
    </div>

    </div>
  );

  //view schedule button
  
}

export default Events;
