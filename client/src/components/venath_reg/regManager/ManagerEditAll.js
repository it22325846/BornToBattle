import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const AdminEditAll = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const username = localStorage.getItem('username') || '';


  useEffect(() => {
    retrieveCandidates();
  }, []); // This mimics componentDidMount

  const retrieveCandidates = () => {
    axios.get("/candidates")
      .then((res) => {
        if (res.data.success) {
          setCandidates(res.data.existingCandidates);
          console.log("username", username);
        }
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  };

  const onDelete = (id, username) => {
    axios.delete(`/candidate/delete/${id}`)
      .then((res) => {
        axios.delete(`/signup/delete/${username}`).then((res) => {
          console.log("usernameeeee", username);

          // localStorage.removeItem('username'); 
          window.alert("Deleted");
          window.location.href = "/editcandidates";
        });
        retrieveCandidates();
        // window.alert("Deleted");
        // window.location.href = "/editcandidates";
      })
      .catch((error) => {
        console.error("Delete Error:", error);
      });
  };

  const filterData = (candidates, searchKey) => {
    const result = candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(searchKey) ||
      (candidate.event && candidate.event.toLowerCase().includes(searchKey)) ||
      (searchKey === "male" && candidate.gender === "male") ||
      (searchKey === "female" && candidate.gender === "female")
    );
    setCandidates(result);
  };

  const handleSearchArea = (e) => {
    const { value } = e.target;
    setSearchKey(value.toLowerCase());

    axios.get("/candidates")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingCandidates, value.toLowerCase());
        }
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  };

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
          <button className="btn btn-success" type="button">Search</button>
        </form>
        <p style={{ color: 'white' }}>Student details</p>
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
                  <a href={`/candidate/${candidate._id}`}>
                    {candidate.name}
                  </a>
                </td>
                <td>{candidate.age}</td>
                <td>{candidate.gender}</td>
                <td>{candidate.event}</td>
                <td>{candidate.category}</td>
                <td>{candidate.phoneNumber}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => window.location.href = `/editc/${candidate._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(candidate._id, candidate.un)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEditAll;
