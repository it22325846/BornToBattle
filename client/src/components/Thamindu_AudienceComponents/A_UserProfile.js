// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// import './Style/A_UserProfile.css';


// const UserProfile = () => {
//   const [audience, setAudience] = useState({});
//   const [loading, setLoading] = useState(true);
//   const { userName, id } = useParams();
//   const username = localStorage.getItem('username') || '';       //session
//   const [profilePhoto, setProfilePhoto] = useState('/user.jpg'); // Set the default photo
//   const [newProfilePhoto, setNewProfilePhoto] = useState(null);

//   useEffect(() => {
//     const existingUsername = localStorage.getItem('username');
//     if (!existingUsername) {
//       // alert("You don't have an account");
//       window.location.href = '/A_signin';
//     }
//   }, []);


//   // useEffect(() => {
//   //   const fetchCandidateData = async () => {
//   //     try {
//   //       const response = await axios.get(`/candidate/username/${encodeURIComponent(username)}`);
//   //       if (response.data.success) {
//   //         const { candidate } = response.data;
//   //         setCandidate(candidate);
//   //         const photoUrl = candidate.photo || '/user.jpg';
//   //         setProfilePhoto(photoUrl); // Set profile photo from fetched data
//   //       } else {
//   //         console.error('Failed to fetch candidate data');
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching candidate data:', error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchCandidateData();
//   // }, [username]);



//   useEffect(() => {
//     // Fetch data based on username
//     axios.get(`/audience/username/${encodeURIComponent(username)}`)
//       .then((res) => {
//         if (res.data.success) {
//           setAudience(res.data.audience);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching audience data:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [username]);



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


//   // const onDelete = () => {
//   //   console.log('Deleting audience with ID:', audience._id); // Log the ID being used for deletion
//   //   axios.delete(`/audience/delete/${audience._id}`)
//   //   .then((res) => {
//   //       axios.delete(`/signup/delete/${username}`)

//   //       .then((res) => {
//   //           localStorage.removeItem('username'); 
//   //           alert("deleted");
//   //           window.location.href=('/');
//   //       })
//   //       .catch((error) => {
//   //           console.error('Error deleting audience:', error);
//   //           alert("Error deleting audience");
//   //       });
    
//   //   });
//   // }


//   const onDelete = () => {
//     console.log('Deleting audience with username:', username); // Log the UN being used for deletion
//     // axios.delete(`/audience/delete/${audience._id}`)        
//     axios.delete(`/signup/delete/${username}`)
//     // axios.delete(`/audience/delete/${id}`)    //=> delete in audienceRoutes & models

//     .then((res) => {

//         // .then((res) => {
//             localStorage.removeItem('username'); 
//             alert("deleted");
//             window.location.href=('/');
//         })
//         .catch((error) => {
//             console.error('Error deleting audience:', error);
//             alert("Error deleting audience");
//         });
    
//     }



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


  



//   // Render candidate details once data is loaded
//   return (
//     <div className="row">

//       {/* User Details */}
//       <div className="col-md-3">

//         <h2>Audience Details</h2>
//         {audience && audience.name && (
//           <>
//             <p>Name: {audience.name}</p>
//             <p>Username: {username}</p>
//             <p>Age: {audience.age}</p>
//             <p>Gender: {audience.gender}</p>
//             <p>Phone Number: {audience.phoneNumber}</p>
//           </>
//         )}
//         {/* <p>Name: {audience.name}</p>
//         <p>Username: {username}</p>
//         <p>Age: {audience.age}</p>
//         <p>Gender: {audience.gender}</p>
//         <p>Phone Number: {audience.phoneNumber}</p> */}

//         <Link to={`/edit/${username}`} className="btn btn-warning">   {/*  edit form  */}
//           <i className="fas fa-edit"></i>&nbsp;Edit
//         </Link>

//         <button className="btn btn-danger" onClick={onDelete}>
//           <i className="far fa-trash-alt"></i>&nbsp;Delete
//         </button>
        
//       </div>

//       {/* profile pic Card */}
//       <div className="col-md-2"  >
//         <div className="card" style={{ marginTop: '50px', width: '100%', textAlign: 'center' }}>
   

//           <input type="file" accept="image/*" onChange={handleFileChange} id="profilePhoto" style={{display: 'none' }}/>

//           {/* Photo */}
//           <div className="mx-auto" style={{overflow: 'hidden' }}> 
//             <img
//               id="profilePhoto"
//               src={profilePhoto}
//               alt=""
//               style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//             />

//           </div>
    
//           <div className="card-body">
//             <label for="profilePhoto" className="btn btn-warning" >Upload a profile photo</label>
//             {newProfilePhoto && (
//                       <div>
//                         <button className="btn btn-info" onClick={handleConfirm}>
//                           Confirm
//                         </button>
//                         <button className="btn btn-secondary" onClick={() => setNewProfilePhoto(null)}>
//                           Change
//                         </button>
//                       </div>
//                     )}
//               <p className="card-text"></p>

//           </div>

//         </div>

//       </div>

//     </div>
//   );



// };

// export default UserProfile;



// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// // import { Link, useParams } from 'react-router-dom';


// import './Style/A_UserProfile.css';


// function AudienceProfilePage() {

//     const [audienceDetails, setAudienceDetails] = useState([]);
//     const Username = localStorage.removeItem('username') || '';
//     const [editingId, setEditingId] = useState(null);
//     const [formData, setFormData] = useState({
//         name: "",
//         age: "",
//         gender: "",
//         phoneNumber: "",
//         username: Username
//     });
//     const [showForm, setShowForm] = useState(true);   // Adjusted initial state

        
//     useEffect(() => {
//         const existingUsername = Username;
//         if (!existingUsername) {
//         // alert("You don't have an account");
//         window.location.href = '/A_signin';
//         }
//     }, [Username]);



//     const fetchAudienceDetails = useCallback(async () => {
//         try {
            
//             // console.log("Audience Details:", response.data);
//             const response = await axios.get(`/api/audience/username/${encodeURIComponent(Username)}`);
        
//             setAudienceDetails(response.data);
//         } catch (error) {
//             console.error("Error fetching audience details: ", error);
//         }
//     }, [Username]);



//     useEffect(() => {
//         fetchAudienceDetails();
//         console.log("un:", Username);

//     }, [fetchAudienceDetails, Username]);



//     const handleEdit = (audienceId) => {
//         setEditingId(audienceId);
//         const audienceToEdit = audienceDetails.find(audience => audience._id === audienceId);

//         setFormData(audienceToEdit);
//         setShowForm(false);
//     };


//     const handleDelete = async (audienceId) => {
//         try {
//             await axios.delete(`/audience/${audienceId}`);
//             await axios.delete(`/signup/delete/${Username}`);
//             fetchAudienceDetails();

//             localStorage.removeItem('username'); 
//             alert("Deleted successfully");
//             window.location.href=('/');

//         } catch (error) {
//             console.error("Error deleting audience: ", error);
//         }
//     };


//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         console.log("FormData before sending:", formData);


//         try {
//             if (editingId) {
                
//                 console.log("Updated Audience Data:", formData);
//                 await axios.put(`/audience/update/${editingId}`, formData);

//             } else {
//                 console.log("New Audience Data:", formData );
//                 await axios.post("/audience/save", formData ); // Include username from session

//             }
//             fetchAudienceDetails();
//             setEditingId(null);
//             setFormData({
//                 name: "",
//                 age: "",
//                 gender: "",
//                 phoneNumber: "",
//                 username: {Username}
//             });
//             setShowForm(true); // Hide the form after submitting

//         } catch (error) {
//             console.error("Error submitting form: ", error);
//             alert(error);
//         }
//     };



//     return (
//         <div className="container1">
//             <h1>Welcome, {Username}</h1>

//             {!showForm && (
//                 <form onSubmit={handleSubmit} className="user-form">
//                     <div className="form-group"> 
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="age">Age:</label>
//                         <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="gender">Gender:</label>
//                         <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
//                             <option value="">Select Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phoneNumber">Phone Number:</label>
//                         <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username">Username:</label>
//                         <input type="text" id="username" name="username" value={Username} readOnly />
//                     </div>
//                     <button className="btn2" type="submit">{editingId ? 'Update' : 'Add'}</button>
//                 </form>
//             )}


            
//             {/* { showForm && !editingId && (
//                 <form onSubmit={handleSubmit} className="user-form">
//                     <div className="form-group">
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="age">Age:</label>
//                         <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="gender">Gender:</label>
//                         <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
//                             <option value="">Select Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phoneNumber">Phone Number:</label>
//                         <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username">Username:</label>
//                         <input type="text" id="username" name="username" value={Username} readOnly />
//                     </div>
//                     <button className="btn2" type="submit">{editingId ? 'Update' : 'Add'}</button>                    
//                 </form>
//             )} */}

           
//             {/* { editingId && ( 
//                 <form onSubmit={handleSubmit} className="user-form">
//                     <div className="form-group"> 
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="age">Age:</label>
//                         <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="gender">Gender:</label>
//                         <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phoneNumber">Phone Number:</label>
//                         <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username">Username:</label>
//                         <input type="text" id="username" name="username" value={Username} readOnly />
//                     </div>
//                     <button className= "btn2" type="submit">Update</button>
//                 </form>
//             )} */}


           
//             {/* { !showForm && <EditForm audienceId={editingId} fetchAudienceDetails={fetchAudienceDetails} />} */}




//             {audienceDetails.map((audience) => (
//                 <div key={audience._id}>

//                     <p>Name         : {audience.name}</p>
//                     <p>Username     : {Username}</p>
//                     <p>Age          : {audience.age}</p>
//                     <p>Gender       : {audience.gender}</p>
//                     <p>Phone Number : {audience.phoneNumber}</p>
                    

//                     { !editingId && ( 
//                         <>
//                             {/* <Link to={`/audience/edit/${audience._id}`}>Edit</Link> */}
//                             <button onClick={() => handleEdit(audience._id)}>Edit</button>
//                             <button onClick={() => handleDelete(audience._id)}>Delete</button>
//                         </> 
//                     )}

//                 </div>
//             ))}
//         </div>
//     );
// }

// export default AudienceProfilePage;




import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import './Style/A_UserProfile.css';

function AudienceProfilePage() {

    const [audienceDetails, setAudienceDetails] = useState({});
    const Username = localStorage.getItem('username') || '';


    useEffect(() => {
        const existingUsername = localStorage.getItem('username');

        if (!existingUsername) {
            alert("You don't have an account");
            window.location.href = '/A_signin';
        }
        else {
            fetchAudienceDetails();
        }

    }, []);



    const fetchAudienceDetails = async () => {
        try {
            const response = await axios.get(`/audience/${encodeURIComponent(Username)}`);
            if (response.data.success) {
                setAudienceDetails(response.data.audience);
            } else {
                console.error('Failed to fetch audience details');
            }
        } catch (error) {
            console.error("Error fetching audience details: ", error);
        }
    };



    // useEffect(() => {
    //     const fetchAudienceDetails = async () => {
    //         try {
    //             const response = await axios.get(`/api/audience/username/${encodeURIComponent(Username)}`);
    //             if (response.data.success) {
    //                 setAudienceDetails(response.data.audience);
    //             } else {
    //                 console.error('Failed to fetch audience details');
    //             }
    //             // setAudienceDetails(response.data);
    //         } catch (error) {
    //             console.error("Error fetching audience details: ", error);
    //         }
    //     };
    //     if (Username) {
    //         fetchAudienceDetails();
    //     }

    //     // fetchAudienceDetails();
    // }, [Username]);



    const handleDelete = async () => {
        try {
            // await axios.delete(`/audience/${audienceDetails._id}`);
            await axios.delete(`/signup/delete/${Username}`);

            localStorage.removeItem('username');
            alert("Deleted successfully");
            window.location.href = '/';

            // if (audienceDetails && audienceDetails._id) {
            //     await axios.delete(`/audience/${audienceDetails._id}`);
            //     await axios.delete(`/signup/delete/${Username}`);
    
            //     localStorage.removeItem('username');
            //     alert("Deleted successfully");
            //     window.location.href = '/';
            // } else {
            //     console.error("No audience ID found.");
            // }

        } catch (error) {
            console.error("Error deleting audience: ", error);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const formData = {
                name: audienceDetails.name,
                age: audienceDetails.age,
                gender: audienceDetails.gender,
                phoneNumber: audienceDetails.phoneNumber,
                username: Username
            };

            // const formDataWithUsername = { ...audienceDetails, Username };
            console.log("Username:", formData);
            await axios.post('/audience/save', formData);
            alert('Audience details saved successfully');


        } catch (error) {
            console.error('Error saving audience details:', error);
        }
    };

    const handleChange = (e) => {
        setAudienceDetails({ ...audienceDetails, [e.target.name]: e.target.value });
    };


    const handleSignOut = () => {
        localStorage.removeItem('username');
        window.location.href = '/';
      };




    return (
        <div className="container1">
            <h1>Welcome, {Username}</h1>
            <div>

                { !!fetchAudienceDetails && (
                    <>    
                        <p>Name         : {audienceDetails.name}</p>
                        <p>Username     : {Username}</p>
                        <p>Age          : {audienceDetails.age}</p>
                        <p>Gender       : {audienceDetails.gender}</p>
                        <p>Phone Number : {audienceDetails.phoneNumber}</p>

                        <Link to={audienceDetails && audienceDetails._id ? `/edit/${audienceDetails._id}` : '/'} className="btn2">
                            <i className="fas fa-edit"></i>&nbsp;Edit   
                        </Link>
                    
                        <button className="btn2" onClick={handleDelete}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </button>

                        <button className="btn2" onClick={handleSignOut}>
                            Sign Out
                        </button>
                
                    </>
                )} 

                { !fetchAudienceDetails && (    

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={audienceDetails.name} onChange={handleChange} placeholder="Name" />
                        <input type="number" name="age" value={audienceDetails.age} onChange={handleChange} placeholder="Age" />
                        <input type="text" name="gender" value={audienceDetails.gender} onChange={handleChange} placeholder="Gender" />
                        <input type="text" name="phoneNumber" value={audienceDetails.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                        <button type="submit">Save Audience Details</button>
                    </form>




                    // <Link to={audienceDetails && audienceDetails._id ? `/edit/${audienceDetails._id}` : '/'} className="btn2">
                    //     <i className="fas fa-edit"></i>&nbsp;Edit   
                    // </Link>
                    
                    // <button className="btn2" onClick={handleDelete}>
                    //     <i className="far fa-trash-alt"></i>&nbsp;Delete
                    // </button>

                )}

            </div>
        </div>
    );
}

export default AudienceProfilePage;
