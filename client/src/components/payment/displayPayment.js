import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/payform.css"; // Assuming you have CSS for styling
import { useNavigate } from "react-router-dom";

export default function CandidateDetails({}) {
  const [candidate, setCandidate] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    function fetchCandidateDetails() {
      axios
        .get("http://localhost:8020/payment/read")
        .then((res) => {
          console.log("gggggg");
          setCandidate(res.data);
        })
        .catch((err) => {
          console.log("gggggg");
          alert(err.message);
        });
    }
    fetchCandidateDetails();
  }, []);

  function handleDelete(candidateId) {
    axios
      .delete(`http://localhost:8020/payment/delete/${candidateId}`)
      .then(() => {
        alert("candidate deleted");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const navToUpdate = (candidateId) => {
    navigate(`/paymentupdate/${candidateId}`);
  };

  return (
    <div className="container bg-dark p-4 rounded text-white">
      <div>
        <h2 className="" style={{ fontWeight: "bolder" }}>
          Candidate Details
        </h2>
        {candidate.map((candids) => (
          <div key={candids._id}>
            <div className="row">
              <div style={{textAlign: 'start'}}>
                <p>Name:   {candids.name}</p>
                <p>Age:   {candids.age}</p>
                <p>Gender:   {candids.gender}</p>
                <p>Email:   {candids.email}</p>
                <p>Contact Number:   {candids.contact_number}</p>
                <p>Competition Type:   {candids.comp_type}</p>
              </div>
              <div>
                {candids.image && (
                  <img
                    src={`http://localhost:8020/payment/uploads/payment/${candids.image}`}
                    style={{ width: "300px", marginLeft: '1.5in' }}
                  ></img>
                )}
              </div>
            </div>
            <button
              className="btn btn-warning"
              onClick={() => navToUpdate(candids._id)}
            >
              Update
            </button>
            <button
              className="btn btn-danger ml-4"
              onClick={(e) => handleDelete(candids._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
