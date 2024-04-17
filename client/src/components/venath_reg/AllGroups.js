import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    retrieveGroups();
  }, []);

  const retrieveGroups = () => {
    axios.get("/groups")
      .then((res) => {
        if (res.data.length > 0) {
          setGroups(res.data); // Set the groups state with the received data
        }
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  };

  const onDelete = (id) => {
    axios.delete(`/group/delete/${id}`)
      .then((res) => {
        alert("Group deleted");
        retrieveGroups(); // Refresh groups after deletion
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  };

  const renderMemberNames = (members) => {
    return (
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>All Groups</h1>
      <table className="table" style={{ color: 'black' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Event</th>
            <th>Category</th>
            <th>Phone Number</th>
            <th>Members</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={group._id}>
              <td>{index + 1}</td>
              <td>{group.name}</td>
              <td>{group.age}</td>
              <td>{group.gender}</td>
              <td>{group.event}</td>
              <td>{group.category}</td>
              <td>{group.phoneNumber}</td>
              <td>{renderMemberNames(group.members)}</td>
              <td>
                <button className="btn btn-primary" onClick={() => alert(`Edit group: ${group._id}`)}>
                  Edit
                </button>
                <button className="btn btn-danger ml-2" onClick={() => onDelete(group._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllGroups;
