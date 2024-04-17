import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UserProfile = () => {
  const [judge, setJudge] = useState({});
  const [loading, setLoading] = useState(true);
  const { userName, id } = useParams();
  const username = localStorage.getItem('username') || '';
  const [profilePhoto, setProfilePhoto] = useState('user.jpg');

 // const [profilePhoto, setProfilePhoto] = useState('user.jpg'); // Set the default photo
  //const [newProfilePhoto, setNewProfilePhoto] = useState(null);

  useEffect(() => {
    const existingUsername = localStorage.getItem('username');
    if (!existingUsername) {
      alert("You don't have an account");
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    // Fetch candidate data based on username
    axios.get(`/judge/username/${encodeURIComponent(username)}`)
      .then((res) => {
        if (res.data.success) {
          setJudge(res.data.judge);
            }
      })
      .catch((error) => {
        console.error("Error fetching candidate data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userName, username]);

//   useEffect(() => {
//     // Check if id is defined before making the request
//     if (id) {
//       // Fetch additional data based on id
//       axios.get(`/additional-data/${id}`)
//         .then((res) => {
//           // Process the additional data as needed
//           console.log('Additional Data:', res.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching additional data:", error);
//         });
//     }
//   }, [id]);

//   const onDelete = (id) => {
//     axios.delete(`/candidate/delete/${id}`).then((res) => {
//       axios.delete(`/signup/delete/${username}`).then((res) => {
//         localStorage.removeItem('username'); 
//         alert("deleted");
//         window.location.href=('/');
//       });
//     });
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Set the uploaded photo as the profile photo
//       setProfilePhoto(URL.createObjectURL(file));
//       setNewProfilePhoto(file);
//     }
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   const handleConfirm = () => {
//     // Assuming you want to send the newProfilePhoto to the server when confirming
//     if (newProfilePhoto) {
//       // Send the newProfilePhoto to the server
//       const formData = new FormData();
//       formData.append('photo', newProfilePhoto);
//       axios.post('/profile-photo/save', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((res) => {
//         console.log(res.data.success); // Log success message from the server
//         // You may want to update the state or do other actions after a successful upload
//       })
//       .catch((error) => {
//         console.error("Error saving profile photo:", error);
//         alert("error");
//             });
//     }
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

  // Render candidate details once data is loaded
  return (
    <div className="row">
      {/* User Details */}
      <div className="col-md-3" style={{ color: 'white' }}>
      <p>Name: {judge.name}</p>
  <p>Age: {judge.age}</p>
  <p>Gender: {judge.gender}</p>
  <p>Event: {judge.event}</p>
  <p>Phone Number: {judge.phoneNumber}</p>
  <p>Institute: {judge.institute}</p>
  <p>Description: {judge.description}</p>
  <p>Username: {judge.un}</p>
  <p>Password: {judge.password}</p>


        <Link to={`/jedit/${judge._id}`} className="btn btn-warning">
          <i className="fas fa-edit"></i>&nbsp;Edit
        </Link>

        {/* <button className="btn btn-danger" onClick={() => onDelete(judge._id)}>
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </button> */}
      </div>

      {/* Card */}
      <div className="col-md-2"  >
  <div className="card" style={{ marginTop: '50px', width: '100%', textAlign: 'center' }}>
   

    {/* <input type="file" accept="image/*" onChange={handleFileChange} id="profilePhoto" style={{display: 'none' }}/> */}

    {/* Photo */}
    {/* <div className="mx-auto" style={{overflow: 'hidden' }}> 
    <img
    id="profilePhoto"
    src={profilePhoto}
   alt=""
    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
/>


    </div> */}
    
    {/* <div className="card-body">
    <label for="profilePhoto" className="btn btn-warning" >Upload a profile photo</label>
    {newProfilePhoto && (
              <div>
                <button className="btn btn-info" onClick={handleConfirm}>
                  Confirm
                </button>
                <button className="btn btn-secondary" onClick={() => setNewProfilePhoto(null)}>
                  Change
                </button>
              </div>
            )}
      <p className="card-text"></p>
    </div> */}
  </div>
</div>

    </div>
  );
};

export default UserProfile;
