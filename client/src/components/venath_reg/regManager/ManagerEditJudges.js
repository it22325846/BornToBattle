import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const EditAllJudges = () => {
  const [judges, setJudges] = useState([]);

  useEffect(() => {
    retrieveJudges();
  }, []);

  const retrieveJudges = () => {
    axios.get("/judges")
      .then((res) => {
        if (res.data.success) {
          setJudges(res.data.existingJudges);
        }
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  }

  const onDelete = (id, username) => {
    axios.delete(`/judge/delete/${id}`)
         .then((res) => {
          
          axios.delete(`/jsignup/delete/${username}`).then((res) => {
            console.log("usernameeeee", username);
             window.alert("Deleted");
            window.location.href = "/editJudges";
          });
        retrieveJudges();
       
      })
      .catch((error) => {
        console.error("Delete Error:", error);
      });
  }

  const filterData = (judges, searchKey) => {
    const result = judges.filter((judge) =>
      judge.name.toLowerCase().includes(searchKey) ||
      (judge.event && judge.event.toLowerCase().includes(searchKey)) ||
      (searchKey === "male" && judge.gender === "male") ||
      (searchKey === "female" && judge.gender === "female")
    );
    setJudges(result);
  };

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();

    axios.get("/judges")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingJudges, searchKey);
        }
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  }

  return (
    <div>
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 ml-auto" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchArea} />
          <button className="btn btn-success" type="submit">Search</button>
        </form>
        <p style={{ color: 'white' }}>Judge details</p>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Event</th>
              <th>Phone Number</th>
              <th>Institute</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {judges.map((judge, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <a href={`/judge/${judge._id}`}>
                    {judge.name}
                  </a>
                </td>
                <td>{judge.age}</td>
                <td>{judge.gender}</td>
                <td>{judge.event}</td>
                <td>{judge.phoneNumber}</td>
                <td>{judge.institute}</td>
                <td>{judge.description}</td>
                <td>
                  <a className="btn btn-warning" href={`/jedit/${judge._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  <a className="btn btn-danger" onClick={() => onDelete(judge._id, judge.un)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
{/* 
        <button className="btn btn-success">
          <a href="/add" style={{ color: 'black' }}>Create New Student</a>
        </button> */}
      </div>
    </div>
  );
}

export default EditAllJudges;
