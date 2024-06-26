import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const { event } = useParams();
  const [gevents, setGevents] = useState([]);



  useEffect(() => {
    axios.get(`/candidates/${event}`).then((res) => {
      if (res.data.success) {
        setCandidates(res.data.existingCandidates);
      }
    });
  }, [event]);

  const onDelete = (id) => {
    axios.delete(`/candidate/delete/${id}`).then((res) => {
      alert("deleted");
      // Update the state directly to refresh the list
      setCandidates((prevCandidates) =>
        prevCandidates.filter((candidate) => candidate._id !== id)
      );
    });
  };

  const filterData = (candidates, searchKey, currentEvent) => {
    const result = candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(searchKey.toLowerCase()) &&
      candidate.event === currentEvent
    );
    setCandidates(result);
  };

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get(`/candidates/${event}`).then((res) => {
      if (res.data.success) {
        filterData(res.data.existingCandidates, searchKey, event);
      }
    }).catch((error) => {
      console.error("AxiosError:", error);
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('/events').then((res) => {
      if (res.data.success) {
        if(event=='dancing'){
          const dancingEvents = res.data.existingEvents.filter(event => event.category === "Dancing");
          setGevents(dancingEvents);
        }
        else{
          const dancingEvents = res.data.existingEvents.filter(event => event.category === "Beatbox");
          setGevents(dancingEvents);
        }
       
       // console.log("dancing events", dancingEvents)
      }
    }).catch((error) => {
      console.error("Error fetching events:", error);
    });
  }


  

  return (
    <div>
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 ml-auto"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearchArea}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
        <p style={{ color: 'white' }}>Candidate details</p>
        <table className="table" style={{ color: 'white' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Event</th>
              <th>Category</th>
              <th>Phone Number</th>
           
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <Link to={`/candidate/${candidate._id}`}>
                    {candidate.name}
                  </Link>
                </td>
                <td>{candidate.event === 'beatbox' ? 'Open' :candidate.age}</td>
                <td>{candidate.event === 'beatbox' ? 'Open' : candidate.gender}</td>
                <td>{candidate.event}</td>
                <td>{candidate.category}</td>
                <td>{candidate.phoneNumber}</td>
                
            
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2>Available Events</h2>
          <div style={{ margin: 'auto', width: 'fit-content' }}>
  <div style={{ display: 'flex', justifyContent: 'center', border: '2px solid white', padding: '10px', maxWidth: '800px' }}>
    <div style={{ color: 'white' }}>
      {gevents.map((event, index) => (
        <tr key={index}>
          <td style={{ paddingRight: '20px' }}>
            <h5>{index+1}</h5>
          </td>
          <td style={{ paddingRight: '20px', color: 'red' }}>
            <h5>{event.topic}</h5>
          </td>
          <td style={{ paddingRight: '20px' }}>
            <h5>{event.type}</h5>
          </td>
          <td style={{ paddingRight: '20px' }}>
            <h5>{event.gender}</h5>
          </td>
          <td>
            <h5>{event.ageGroup}</h5>
          </td>
        </tr>
      ))}
    </div>
  </div>
</div>


        </div>
  {event === 'dancing' && (
    <div style={{ color: 'white' }}>
      <h4>HipHop</h4>
      <h5> Under 18 <a href="/subcandidates/dancing?cat=u18bh">Boys </a> or <a href="/subcandidates/dancing?cat=u18gh">girls</a></h5>
      <h5> Over  18 <a href="/subcandidates/dancing?cat=o18bh">Boys </a> or <a href="/subcandidates/dancing?cat=o18gh">girls</a></h5>
      <h5> Under 16  <a href="/subcandidates/dancing?cat=u16bh">Boys </a> or <a href="/subcandidates/dancing?cat=u16gh">girls</a></h5>
     <br></br>
      <h4>Free Styles</h4>
      <h5> Under 18 <a href="/subcandidates/dancing?cat=u18ba">Boys </a> or <a href="/subcandidates/dancing?cat=u18ga">girls</a></h5>
      <h5> Over  18 <a href="/subcandidates/dancing?cat=o18ba">Boys </a> or <a href="/subcandidates/dancing?cat=o18ga">girls</a></h5>
      <h5> Under 16  <a href="/subcandidates/dancing?cat=u16ba">Boys </a> or <a href="/subcandidates/dancing?cat=u16ga">girls</a></h5>
    </div>
  )}

{/* {event !== 'dancing' && (
    <div style={{ color: 'white' }}>
     
    </div>
  )} */}
   
      </div>
    </div>
  );
};

export default EventCandidates;
