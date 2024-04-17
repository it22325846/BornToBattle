import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const { event } = useParams();


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

  // const handleConfirm = (id) => {

  // }

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
              <th>Action</th>
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
                <td>{candidate.age}</td>
                <td>{candidate.gender}</td>
                <td>{candidate.event}</td>
                <td>{candidate.category}</td>
                <td>{candidate.phoneNumber}</td>
                
                <td>
                  {/* <Link to={`/edit/${candidate._id}`} className="btn btn-warning">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </Link>
                  <a className="btn btn-danger" href="#" onClick={() => onDelete(candidate._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ color: 'white' }}>
        <h4>HipHop</h4>
        <h5> Under 18 <a href="/subcandidates/dancing?cat=u18bh">Boys </a> or <a href="/subcandidates/dancing?cat=u18gh">girls</a></h5>
        <h5> Over  18 <a href="/subcandidates/dancing?cat=o18bh">Boys </a> or <a href="/subcandidates/dancing?cat=o18gh">girls</a></h5>

        <h5> Under 16  <a href="/subcandidates/dancing?cat=u16bh">Boys </a> or <a href="/subcandidates/dancing?cat=u16gh">girls</a></h5>
        {/* <h5> Over  16 <a href="/subcandidates/dancing?cat=u16bh">Boys </a> or <a href="/subcandidates/dancing?cat=u16gh">girls</a></h5> */}

<br></br>
        <h4>All Styles</h4>
        <h5> Under 18 <a href="/subcandidates/dancing?cat=u18ba">Boys </a> or <a href="/subcandidates/dancing?cat=u18gh">girls</a></h5>
        <h5> Over  18 <a href="/subcandidates/dancing?cat=o18ba">Boys </a> or <a href="/subcandidates/dancing?cat=o18gh">girls</a></h5>

        <h5> Under 16  <a href="/subcandidates/dancing?cat=u16ba">Boys </a> or <a href="/subcandidates/dancing?cat=u16gh">girls</a></h5>
        {/* <h5> Over  16 <a href="/subcandidates/dancing?cat=u16ba">Boys </a> or <a href="/subcandidates/dancing?cat=u16gh">girls</a></h5> */}
        

        </div>



        {/* <button className="btn btn-success">
          <Link to="/add" style={{ color: 'black' }}>
            Create New Student
          </Link>
        </button> */}
      </div>
    </div>
  );
};

export default EventCandidates;
