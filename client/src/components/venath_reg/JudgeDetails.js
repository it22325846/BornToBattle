import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const JudgeDetails = () => {
  const [judge, setJudge] = useState({});
  const { id } = useParams();
  const username = localStorage.getItem("username") || "";

  useEffect(() => {
    if (id !== judge._id) {
      axios.get(`/judge/${id}`).then((res) => {
        if (res.data.success) {
          setJudge(res.data.Judge);
        }
      });
    }
  }, [id, judge._id]);

  console.log("Judge Details:", judge);

  return (
    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
      <div style={{ flex: 1 }}>
        <h2>Judge Details</h2>
        <p>Name: {judge.name}</p>
        <p>Age: {judge.age}</p>
        <p>Gender: {judge.gender}</p>
        <p>Event: {judge.event}</p>
        <p>Category: {judge.category}</p>
        <p>Phone Number: {judge.phoneNumber}</p>

      
      </div>
      <div style={{ flex: 3 }}>
        {judge.photo && (
          <img src={`/uploads/judges/${judge.photo}`} alt="Judge Photo" style={{ maxWidth: '200px' }} />
        )}
      </div>
      {judge.un === username ? (
          <Link to={`/edit/${judge._id}`} className="btn btn-warning">
            <i className="fas fa-edit"></i>&nbsp;Edit
          </Link>
        ) : (
          <p></p>
        )}
    </div>
  );
};

export default JudgeDetails;
