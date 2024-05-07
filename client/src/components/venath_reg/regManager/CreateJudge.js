import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Style/venath_reg/judge.css';




const CreateJudge = () => {



const [jcount, setJcount]=useState(0);
const [bcount, setBcount]=useState(0);




const [vjcount, setVJcount] = useState(0);
const [vbcount, setVBcount] = useState(0);

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [usernameExists, setUsernameExists] = useState(false);

let dancingJudges=4;
let beatboxJudges=2;

const [error, setError] = useState('');
const [ageError, setAgeError] = useState("");
const [perror, setPerror] = useState("");
useEffect(() => {
  axios.get(`/judges/count/dancing`).then((res) => {
    if (res.data.success) {
      console.log('Received G dancing judges count:', res.data.judgesCounts);

      setJcount(res.data.judgesCounts);

    }
  }).catch((error) => {
    console.error('Error fetching count:', error);
  });

  axios.get(`/judges/count/beatbox`).then((res) => {
    if (res.data.success) {
      console.log('Received G B judges count:', res.data.judgesCounts);

      setBcount(res.data.judgesCounts);
    }
  }).catch((error) => {
    console.error('Error fetching count:', error);
  });

  axios.get(`/vjudges/count/dancing`).then((res) => {
    if (res.data.success) {
      console.log('Received dancing judges count:', res.data.jcount);

      setVJcount(res.data.jcount);
    }
  }).catch((error) => {
    console.error('Error fetching count:', error);
  });

  axios.get(`/vjudges/count/beatbox`).then((res) => {
    if (res.data.success) {
      setVBcount(res.data.bcount);
    }
  }).catch((error) => {
    console.error('Error fetching count:', error);
  });


}, []);


  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    event: '',
    phoneNumber: '',
    email: '',
    un: '',
    institute: '',
    description: '',
    password: ''
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name==='event'){
      if(value==='dancing'){

      }
      else if(name==='beatbox'){

      }
      
    }
    if (name === 'phoneNumber') {
      // Validate phone number to accept exactly 10 digits
      const isValidPhoneNumber = /^\d{10}$/.test(value);  // \d  a digit, and {10} count
      if (!isValidPhoneNumber && value.length > 0) { 
        
        setPerror('Phone number must be 10 digits');
      } else {
        setPerror('');
      }
    }

    // Regular expression to match only letters (alphabetic characters)
    const onlyLettersRegex = /^[A-Za-z\s]+$/;

    // Check if the input value contains only letters
    if (name === 'name' && !onlyLettersRegex.test(value)) {
      // Set an error message if the input value contains non-letter characters
      setError('Name should only contain letters');
      setFormData(prevState => ({ ...prevState, [name]: '' }));
      return;
    } else {
      // Clear the error message if the input value is valid
      setError('');
    }


    if (name === 'age') {
      if (value === '' || parseInt(value) <= 0 || parseInt(value) > 100) {
        setAgeError("Invalid Age");
        setFormData(prevState => ({ ...prevState, [name]: '' }));
        return;
      } else {
        setAgeError("");
      }
    }
    

  
      setFormData({ ...formData, [name]: value });
    
  };

  const checkUsername = async () => {
    try {
      const response = await axios.post('/jsignup/checkUsername', { username });
      setUsernameExists(response.data.usernameExists);
    } catch (error) {
      console.error("Error checking username:", error);
    }
  };
  
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'un') {
  //     // Check if the value starts with "Judge"
  //     if (value.startsWith('Judge')) {
  //       // If it starts with "Judge", update the state normally
  //       setFormData({ ...formData, [name]: value });
  //     } else {
  //       // If not, prepend "Judge" to the new value
  //       setFormData({ ...formData, [name]: 'Judge' + value });
  //     }
  //   } else {
  //     // For other fields, update the state normally
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('/judges/save', formData)
  //     .then((res) => {
  //       if (res.data.success) {
  //         alert('Judge added successfully!');
  //         window.location.href('/addjude');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error submitting the form:', error);
  //       // Handle error, show an alert or update the UI accordingly
  //     });
  // };
  const handleSubmit = (e) => {
    console.log('Submitting form...');
    e.preventDefault();

    axios.post('/judges/save', formData)
      .then((res) => {
        console.log('Response from /judges/save:', res.data); // Log response data
        if (res.data.success) {
          axios.post('/jsignup/save', { username: formData.un, password: formData.password })
            .then((res) => {
              console.log('Response from /jsignup/save:', res.data); // Log response data
              if (res.data.success) {
            
                alert('Judge added successfully!');
                handleSendEmail();
                window.location.reload();
                //window.location.href('/judgeCount');
              }
            })
            .catch((error) => {
              console.error('Error saving username and password:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
        // Handle error, show an alert or update the UI accordingly
      });
  };
  
  const handleSendEmail = () => {
    // Create a JSON body with userEmail
    const requestBody = {
      userEmail: formData.email,
      username: formData.un,
      password: formData.password
    };

    axios.post('/product/getbill', requestBody)
      .then(response => {
        console.log(response.data);
        // Handle response if needed
        alert("Email sent to the judge");
      })
      .catch(error => {
        console.error(error);
        // Handle error if needed
      });
  };
  

  return (
    <div>
      <h2 style={{ marginLeft: '1rem' }}>Apply for event</h2>
      <form style={{ marginLeft: '1rem', color: 'white' }} onSubmit={handleSubmit}>

      <div className="mb-3">
          <label htmlFor="event" className="form-label">Event</label>
          <select className="form-select" id="event" name="event" value={formData.event} onChange={handleChange} required style={{ width: '10%' }}>
            <option value="">Select event</option>
            <option value="dancing">Dancing</option>
           
            <option value="beatbox">Beatbox</option>
          </select>
        </div>
        {formData.event === 'dancing' && (
      <p> Add {jcount - vjcount} judges for dancing event</p>
    )}

{formData.event === 'beatbox' && (
      <p> Add {bcount - vbcount} judges for beatbox event</p>
    )}


        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name of the judge</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '30%' }} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required style={{ width: '30%' }} />
          {ageError && <div style={{ color: 'red' }}>{ageError}</div>}

        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required style={{ width: '10%' }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

 
        

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required style={{ width: '30%' }} />
          {perror && <p className="text-danger">{perror}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '30%' }} />
          
        </div>

      

        <div className="mb-3">
          <label htmlFor="institute" className="form-label">Institute</label>
          <input type="text" className="form-control" id="institute" name="institute" value={formData.institute} onChange={handleChange} required style={{ width: '30%' }} />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required style={{ width: '30%' }} />
        </div>

        <div className="mb-3">
  <label htmlFor="un" className="form-label">Username</label>
  <input
    type="text"
    className="form-control"
    id="un"
    name="un"
    value={formData.un}
    onChange={(e) => {
      setUsername(e.target.value);
      handleChange(e); // Call handleChange to update formData.un
    }}
    onBlur={checkUsername} // Call checkUsername when the field loses focus
    required
    style={{ width: '30%' }}
  />
  {usernameExists && <p className="text-danger mt-2">Username already exists</p>}
</div>
        <div className="mb-3">
          <label htmlFor="un" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: '30%' }} />
        </div>

        {/* <button 
          className="btn btn-primary" 
          onClick={handleSendEmail}
        >
          Send An Email To The Judge
        </button><br></br> */}
<br></br>
<button type="submit" className="btn btn-primary">Submitt</button>
      </form>
    </div>
  );
};

 export default CreateJudge;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../../Style/venath_reg/judge.css';




// const CreateJudge = () => {

// const [jcount, setJcount]=useState(0);
// const [bcount, setBcount]=useState(0);


// const [vjcount, setVJcount] = useState(0);
// const [vbcount, setVBcount] = useState(0);

// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [confirmPassword, setConfirmPassword] = useState('');
// const [error, setError] = useState('');
// const [usernameExists, setUsernameExists] = useState(false);

// let dancingJudges=4;
// let beatboxJudges=2;

// useEffect(() => {
//   axios.get(`/judges/count/dancing`).then((res) => {
//     if (res.data.success) {
//       console.log('Received G dancing judges count:', res.data.judgesCounts);

//       setJcount(res.data.judgesCounts);

//     }
//   }).catch((error) => {
//     console.error('Error fetching count:', error);
//   });

//   axios.get(`/judges/count/beatbox`).then((res) => {
//     if (res.data.success) {
//       console.log('Received G B judges count:', res.data.judgesCounts);

//       setBcount(res.data.judgesCounts);
//     }
//   }).catch((error) => {
//     console.error('Error fetching count:', error);
//   });

//   axios.get(`/vjudges/count/dancing`).then((res) => {
//     if (res.data.success) {
//       console.log('Received dancing judges count:', res.data.jcount);

//       setVJcount(res.data.jcount);
//     }
//   }).catch((error) => {
//     console.error('Error fetching count:', error);
//   });

//   axios.get(`/vjudges/count/beatbox`).then((res) => {
//     if (res.data.success) {
//       setVBcount(res.data.bcount);
//     }
//   }).catch((error) => {
//     console.error('Error fetching count:', error);
//   });


// }, []);


//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     event: '',
//     phoneNumber: '',
//     un: '',
//     institute: '',
//     description: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name==='event'){
//       if(value==='dancing'){

//       }
//       else if(name==='beatbox'){

//       }
      
//     }
//     if (name === 'phoneNumber') {
//       // Validate phone number to accept exactly 10 digits
//       const isValidPhoneNumber = /^\d{10}$/.test(value);  // \d  a digit, and {10} count
//       if (!isValidPhoneNumber && value.length > 0) { 
        
//         setError('Phone number must be 10 digits');
//       } else {
//         setError('');
//       }
//     }
  
//       setFormData({ ...formData, [name]: value });
    
//   };
//   const checkUsername = async () => {
//     try {
//       const response = await axios.post('/jsignup/checkUsername', { username });
//       setUsernameExists(response.data.usernameExists);
//     } catch (error) {
//       console.error("Error checking username:", error);
//     }
//   };
  
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/judges/save', formData)
//       .then((res) => {
//         console.log('Response from /judges/save:', res.data); // Log response data
//         if (res.data.success) {
//           axios.post('/jsignup/save', { username: formData.un, password: formData.password })
//             .then((res) => {
//               console.log('Response from /jsignup/save:', res.data); // Log response data
//               if (res.data.success) {
//                 alert('Judge added successfully!');
//                 window.location.href('/judgeCount');
//               }
//             })
//             .catch((error) => {
//               console.error('Error saving username and password:', error);
//             });
//         }
//       })
//       .catch((error) => {
//         console.error('Error submitting the form:', error);
//         // Handle error, show an alert or update the UI accordingly
//       });
//   };
  
  

//   return (
//     <div>
//       <h2 style={{ marginLeft: '1rem' }}>Apply for event</h2>
//       <form style={{ marginLeft: '1rem',color: 'white'  }}>

//       <div className="mb-3">
//           <label htmlFor="event" className="form-label">Event</label>
//           <select className="form-select" id="event" name="event" value={formData.event} onChange={handleChange} required style={{ width: '10%' }}>
//             <option value="">Select event</option>
//             <option value="dancing">Dancing</option>
           
//             <option value="beatbox">Beatbox</option>
//           </select>
//         </div>
//         {formData.event === 'dancing' && (
//       <p> Add {jcount - vjcount} judges for dancing event</p>
//     )}

// {formData.event === 'beatbox' && (
//       <p> Add {bcount - vbcount} judges for beatbox event</p>
//     )}


//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name of the judge</label>
//           <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '30%' }} />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="age" className="form-label">Age</label>
//           <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required style={{ width: '30%' }} />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="gender" className="form-label">Gender</label>
//           <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required style={{ width: '10%' }}>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>

 
        

//         <div className="mb-3">
//           <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//           <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required style={{ width: '30%' }} />
//           {error && <p className="text-danger">{error}</p>}
//         </div>

      

//         <div className="mb-3">
//           <label htmlFor="institute" className="form-label">Institute</label>
//           <input type="text" className="form-control" id="institute" name="institute" value={formData.institute} onChange={handleChange} required style={{ width: '30%' }} />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description</label>
//           <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required style={{ width: '30%' }} />
//         </div>

//         <div className="mb-3">
//   <label htmlFor="un" className="form-label">Username</label>
//   <input
//     type="text"
//     className="form-control"
//     id="un"
//     name="un"
//     value={formData.un}
//     onChange={(e) => {
//       setUsername(e.target.value);
//       handleChange(e); // Call handleChange to update formData.un
//     }}
//     onBlur={checkUsername} // Call checkUsername when the field loses focus
//     required
//     style={{ width: '30%' }}
//   />
//   {usernameExists && <p className="text-danger mt-2">Username already exists</p>}
// </div>
//         <div className="mb-3">
//           <label htmlFor="un" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: '30%' }} />
//         </div>

//         <button type="submit" className="btn btn-primary">Send A Email To The Judge</button>        
// <br></br>
// <br></br>
//         <button type="submit" className="btn btn-primary" onSubmit={handleSubmit} >Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateJudge;
