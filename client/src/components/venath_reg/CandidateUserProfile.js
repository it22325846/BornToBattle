import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserProfile = () => {
  const [candidate, setCandidate] = useState({});
  const [loading, setLoading] = useState(true);
  const { userName, id } = useParams();
  const username = localStorage.getItem('username') || '';
  const [profilePhoto, setProfilePhoto] = useState('/user.jpg');
  const [newProfilePhoto, setNewProfilePhoto] = useState(null);

  useEffect(() => {
    const existingUsername = localStorage.getItem('username');
    if (!existingUsername) {
      alert("You don't have an account");
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const response = await axios.get(`/candidate/username/${encodeURIComponent(username)}`);
        if (response.data.success) {
          const { candidate } = response.data;
          setCandidate(candidate);
          const photoUrl = candidate.photo || '/user.jpg';
          setProfilePhoto(photoUrl); // Set profile photo from fetched data
        } else {
          console.error('Failed to fetch candidate data');
        }
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateData();
  }, [username]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePhoto(file);
      const imageUrl = URL.createObjectURL(file);
      setProfilePhoto(imageUrl); // Update profile photo with newly selected image
    }
  };

  const handleConfirm = (id) => {
    if (newProfilePhoto) {
      const formData = new FormData();
      formData.append('photo', newProfilePhoto);

      const url = `/candidate/update/${id}/photo`;

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
          window.location.href='/profile'
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

  const onDelete = (id) => {
    axios.delete(`/candidate/delete/${id}`).then((res) => {
      axios.delete(`/signup/delete/${username}`).then((res) => {
        localStorage.removeItem('username'); 
        alert("deleted");
        window.location.href=('/');
      });
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row" >
      {/* User Details */}
      <div className="col-md-3" style={{ color: 'white' }}>
        <h2>Candidate Details</h2>
        <p style={{ color: 'white' }}>Name: {candidate.name}</p>
        <p>Age: {candidate.age}</p>
        <p>Gender: {candidate.gender}</p>
        <p>Event: {candidate.event}</p>
        <p>Category: {candidate.category}</p>
        <p>Phone Number: {candidate.phoneNumber}</p>

        <Link to={`/editc/${candidate._id}`} className="btn btn-warning">
          <i className="fas fa-edit"></i>&nbsp;Edit
        </Link>

        <button className="btn btn-danger" onClick={() => onDelete(candidate._id)}>
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </button>
      </div>

      {/* Card */}
      <div className="col-md-2">
        <div className="card" style={{ marginTop: '50px', width: '100%', textAlign: 'center' }}>
          <input type="file" accept="image/*" onChange={handleFileChange} id="profilePhotoInput" style={{ display: 'none' }} />
          <div className="mx-auto" style={{ overflow: 'hidden' }}>
            {newProfilePhoto ? (
              // Show the newly selected photo before confirming
              <img
                id="profilePhoto"
                src={profilePhoto}
                alt=""
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            ) : (
              // Show the current profile photo
              <img
                id="profilePhoto"
                src={`/uploads/profile-photos/${profilePhoto}`}
                alt=""
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}
          </div>
          <div className="card-body">
            {newProfilePhoto ? (
              // Show confirm and change buttons only when a new photo is selected
              <div>
                <button className="btn btn-info" onClick={() => handleConfirm(candidate._id)}>
                  Confirm
                </button>
                <button className="btn btn-secondary" onClick={() => setNewProfilePhoto(null)}>
                  Change
                </button>
              </div>
            ) : (
              // Show upload button when no new photo is selected
              <label htmlFor="profilePhotoInput" className="btn btn-warning">Upload a profile photo</label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
