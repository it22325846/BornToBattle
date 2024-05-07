import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form.css"; // Assuming you have CSS for styling
import { useNavigate } from "react-router-dom";

export default function CandidateDetails({}) {
  const [candidate, setCandidate] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function fetchCandidateDetails() {
      axios.get("http://localhost:8020/candidate/read")
      .then( (res) => {
        setCandidate(res.data);
      }).catch( (err) => {
        alert(err.message)
      })
    }
    fetchCandidateDetails();
  }, []);

  function handleDelete(candidateId) {
    axios.delete(`http://localhost:8020/candidate/delete/${candidateId}`)
    .then( () => {
      alert("candidate deleted")
    }).catch( (err) => {
      alert(err.message);
    })
  }

  const navToUpdate = (candidateId) => {
    navigate(`/updatecandidate/${candidateId}`)
  }

  return (
    <div className="container bg-dark p-3 rounded text-white">
      <div>
        <h2>Candidate Details</h2>
        {candidate.map((candids) => (
          <div key={candids._id}>
            <p>Name: {candids.name}</p>
            <p>Age: {candids.age}</p>
            <p>Gender: {candids.gender}</p>
            <p>Email: {candids.email}</p>
            <p>Contact Number: {candids.contact_number}</p>
            <p>Competition Type: {candids.comp_type}</p>
            <div>
              {candids.image && (
                <img
                  src={`http://localhost:8020/candidate/uploads/${candids.image}`}
                  style={{width: '300px'}}
                ></img>
              )}
            </div>
            <button className="btn btn-primary" onClick={() => navToUpdate(candids._id)}>
              Update
            </button>
            <button className="btn btn-danger" onClick={(e) => handleDelete(candids._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
