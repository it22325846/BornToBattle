import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CandidateDetails = () => {
  const [candidate, setCandidate] = useState({});
  const { id } = useParams();
  const username = localStorage.getItem("username") || "";

  // useEffect(() => {
  //   axios.get(`/candidate/${id}`).then((res) => {
  //     if (res.data.success) {
  //       setCandidate(res.data.Candidate);
  //     }
  //   });
  // }, [id]);

  useEffect(() => {
    if (id !== candidate._id) {
      axios.get(`/candidate/${id}`).then((res) => {
        if (res.data.success) {
          setCandidate(res.data.Candidate);
        }
      });
    }
  }, [id, candidate._id]);

  console.log("Student Details:", candidate);
  // console.log('ddddd Details:', username);

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {candidate.name}</p>
      <p>Age: {candidate.age}</p>
      <p>Gender: {candidate.gender}</p>
      <p>Event: {candidate.event}</p>
      <p>Category: {candidate.category}</p>
      <p>Phone Number: {candidate.phoneNumber}</p>

      {candidate.un === username ? (
        <Link to={`/edit/${candidate._id}`} className="btn btn-warning">
          <i className="fas fa-edit"></i>&nbsp;Edit
        </Link>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CandidateDetails;
