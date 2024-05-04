import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const GroupUserProfile = () => {
  const [group, setGroup] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const username = localStorage.getItem('username') || '';

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await axios.get(`/group/username/${username}`);
        if (response.data.success) {
          const { group } = response.data;
          setGroup(group);
          console.log("Group", group)
        } else {
          console.error('Failed to fetch group data');
        }
      } catch (error) {
        console.error('Error fetching group data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupData();
  }, [id]);

  const onDelete = (id) => {
    axios.delete(`/groups/${id}`)
      .then((res) => {
        axios.delete(`/signup/delete/${username}`).then((res) => {
          localStorage.removeItem('username'); 
            console.log("usernameeeee", username);
             window.alert("Deleted");
            window.location.href = "/editGroups";
          });
       

      
       
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row">
      {/* Group Details */}
      <div className="col-md-3" style={{ color: 'white' }}>
        <h2>Group Details</h2>
        <p>Name: {group.groupName}</p>
        <p>Leader Name: {group.name}</p>
        <p>Age: {group.age}</p>
        <p>Gender: {group.gender}</p>
        <p>Event: {group.event}</p>
        <p>Category: {group.category}</p>
        <p>Phone Number: {group.phoneNumber}</p>

        {/* Displaying member names */}
        <h3>Members:</h3>
        {group.members && group.members.map((member, index) => (
          <p key={index}>{member.name}</p>
        ))}

        <Link to={`/gedit/${group._id}`} className="btn btn-warning">
          <i className="fas fa-edit"></i>&nbsp;Edit
        </Link>

        <button className="btn btn-danger" onClick={() => onDelete(group._id)}>
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </button>
      </div>

      {/* Card */}
      <div className="col-md-2">
        {/* Add group photo here */}
        <div className="card">
          {/* Add group photo */}
          <div className="card-body">
            <p>Group Photo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupUserProfile;
