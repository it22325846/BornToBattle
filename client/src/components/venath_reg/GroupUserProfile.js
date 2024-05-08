import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const GroupUserProfile = () => {
  const [group, setGroup] = useState({});
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem('username') || '';
  const [profilePhoto, setProfilePhoto] = useState('/user.jpg');
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);

  useEffect(() => {
    localStorage.setItem('userType', 'group');
    const fetchGroupData = async () => {
      try {
        const response = await axios.get(`/group/username/${username}`);
        if (response.data.success) {
          const { group } = response.data;
          setGroup(group);
          if (!group.photo || typeof group.photo !== 'string') {
            setProfilePhoto('/group.jpg');
          } else {
            setProfilePhoto(group.photo);
          }
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
  }, [username]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePhoto(file);
      const imageUrl = URL.createObjectURL(file);
      setProfilePhoto(imageUrl);
    }
  };

  const handleConfirm = () => {
    if (newProfilePhoto) {
      const formData = new FormData();
      formData.append('photo', newProfilePhoto);

      const url = `/group/update/${group._id}/photo`;

      axios.put(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res.data && res.data.success) {
          const photoUrl = URL.createObjectURL(newProfilePhoto);
          setProfilePhoto(photoUrl);
          setNewProfilePhoto(null);
          alert('Profile photo updated successfully.');
        } else {
          alert('Failed to update profile photo.');
        }
      })
      .catch((error) => {
        console.error("Error updating profile photo:", error);
        alert("Failed to update profile photo.");
      });
    }
  };

  const onDelete = () => {
    axios.delete(`/groups/${group._id}`)
      .then((res) => {
        axios.delete(`/signup/delete/${username}`).then((res) => {
          localStorage.removeItem('username'); 
          localStorage.removeItem('userType'); 
          alert("Deleted");
          window.location.href = "/editGroups";
        });
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userType");
    alert("Signed Out");
    window.location.href = "/";
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

        <button className="btn btn-danger" onClick={onDelete}>
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </button>
      </div>

      {/* Card */}
      <div className="col-md-2">
        {/* Group Photo */}
        <div className="card">
          <div className="card-body">
            <p>Group Photo</p>
            <div>
              <input type="file" accept="image/*" onChange={handleFileChange} id="groupPhotoInput" style={{ display: 'none' }} />
              <div className="mx-auto" style={{ overflow: 'hidden' }}>
                {newProfilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt=""
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={profilePhoto}
                    alt=""
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>
            {newProfilePhoto ? (
              <div>
                <button className="btn btn-info" onClick={handleConfirm}>
                  Confirm
                </button>
                {/* <button className="btn btn-secondary" onClick={() => setNewProfilePhoto(null)}>
                  Change
                </button> */}
              </div>
            ) : (
              <label htmlFor="groupPhotoInput" className="btn btn-warning">Upload a group photo</label>
            )}
          </div>
        </div>
        <button className="btn btn-danger text-left" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default GroupUserProfile;
