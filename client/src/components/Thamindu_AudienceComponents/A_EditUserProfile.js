// A_EditUserProfile.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const EditUserProfile = () => {

//   const [audience, setAudience] = useState({});
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const username = localStorage.getItem('username') || '';
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     phoneNumber: '',
//     username: {username}
//   });
  
  
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };



//   //okay =>
//   useEffect(() => {
//     // Fetch audience data based on ID
//     axios.get(`/audience/${id}`)
//       .then((res) => {

//         if (res.data.success) {

//           setAudience(res.data.Audience);
//           setFormData({
//             name: res.data.Audience.name,
//             age: res.data.Audience.age,
//             gender: res.data.Audience.gender,
//             phoneNumber: res.data.Audience.phoneNumber
//           });
//         }

//       })
//       .catch((error) => {
//         console.error("Error fetching audience data:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });

//   }, [id]);



  
//   //okay =>
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, age, gender, phoneNumber } = formData;

//     const data = {
//       name: name,
//       age: age,
//       gender: gender,
//       phoneNumber: phoneNumber,
//     };
//     console.log("Submitting data:", data);

//     axios.put(`/audience/update/${id}`, formData)
//       .then((res) => {
//         console.log("Audience details updated successfully:", res.data);
//         // Redirect or display a success message as needed

//         if (res.data && res.data.status === "audience updated") {
//           alert("Success")
//           window.location.href = '/profile';
//           setFormData({
//             name: '',
//             age: '',
//             gender: '',
//             phoneNumber: '',
//           });
          
//         }
//       })
//       .catch((error) => {
//         console.error("Error updating audience details:", error);
//         alert("Error occurred while updating candidate details.");

//       });
//   };



//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   console.log('audience Details:', audience);





//   return (
//     <div>
//       <h2>Edit Audience Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input type="number" name="age" value={formData.age} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//         </div>
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditUserProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditUserProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        phoneNumber: ''
    });
    const { id } = useParams();

    
    useEffect(() => {
        axios.get(`/audience/${id}`)
            .then((res) => {
                if (res.data.success) {
                    setFormData({
                        name: res.data.Audience.name,
                        age: res.data.Audience.age,
                        gender: res.data.Audience.gender,
                        phoneNumber: res.data.Audience.phoneNumber
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching audience data:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`/audience/update/${id}`, formData)
            .then((res) => {
                if (res.data && res.data.status === "audience updated") {
                    alert("Success");
                    window.location.href = '/profile';
                }
            })
            .catch((error) => {
                console.error("Error updating audience details:", error);
                alert("Error occurred while updating audience details.");
            });
    };

    return (
        <div>
            <h2>Edit Audience Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditUserProfile;

