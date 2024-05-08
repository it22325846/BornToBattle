import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../Style/Manager_Audience.css'




const ManagerDisplayPage = () => {
    const [audienceList, setAudienceList] = useState([]);
    // const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [showDeleteButton, setShowDeleteButton] = useState(false);


    useEffect(() => {
        fetchAudienceList();
    }, []);


    const fetchAudienceList = async () => {
        try {
            const response = await axios.get('/manager/audi'); // Corrected typo here
            setAudienceList(response.data.audience); // Assuming audience list is in response.data.audience
            console.log("details", setAudienceList);
        } catch (error) {
            console.error('Error fetching audience list:', error);
        }
    };


    const handleDeleteUser = async (userId,username) => {
        const enteredPassword = prompt('Enter manager password to proceed with deletion:');
        if (enteredPassword) {
            try {
                const response = await axios.post('/find_manager', { username: 'thamindu', password: enteredPassword });
                if (response.data.success) {
                    await axios.delete(`/manager/audi/${userId}`);
                    // await axios.delete(`/A_signup/delete/${username}`);
                    // await axios.delete(`/manager/audi/${username}`);

                    fetchAudienceList();
                    alert("Deleted successfully");
                } else {
                    alert('Invalid password. Deletion cancelled.');
                }
            } catch (error) {
                console.error('Error deleting account:', error);
            }
        }
    };
    
    
    const handleGenerateReport = () => {
        const printableContent = `
            <html>
                <head>
                    <title>Audience Report</title>
                    <style>
                        table {
                            border-collapse: collapse;
                            width: 100%;
                        }
                        th {
                            background-color: yellow
                        }
                        th, td {
                            border: 1px solid black;
                            padding: 8px;
                            text-align: left;
                        }
                        button {
                            background-color: #000;
                            color: aliceblue;
                            height: 40px;
                            width: 100px
                        }
                        button:hover {
                            background-color: #951212;
                            color: aliceblue;
                        }
                    </style>
                </head>
                <body>
                    <h1>Audience Report</h1>

                    <button onclick="window.print()" classname ="btn2">
                        Print Report
                    </button>

                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${audienceList.map((user, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${user.name}</td>
                                    <td>${user.username}</td>
                                    <td>${user.age}</td>
                                    <td>${user.gender}</td>
                                    <td>${user.phoneNumber}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    
                </body>
            </html>
        `;

        const reportWindow = window.open('', '_blank');
        reportWindow.document.open();
        reportWindow.document.write(printableContent);
        reportWindow.document.close();
        // window.print();
    };


    const handleSignOut = () => {
        localStorage.removeItem('username');
        alert('Sign Out');
        window.location.href = '/';
    };
    
      

    const verifyPassword = async () => {
        try {
            const response = await axios.post('/find_manager', { username: 'thamindu', password });
            const { success } = response.data;
            if (success) {
                setShowDeleteButton(true);
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error verifying password:', error);
            alert('Error verifying password. Please try again later.');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // const handleUsernameChange = (e) => {
    //     setUsername('thamindu');
    // };

    
    return (
        <div>
            <h2 style={{ padding: '10px', margin: '50px' }} >Audience Manager Display Page</h2>

            {/* {!showDeleteButton && (
                <div>
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="Enter Manager Password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ width:'400px', marginLeft:'50px' }}
                    />
                    <button  className='btn2' onClick={verifyPassword} style={{marginBottom: '250px' }}>
                        Verify Password
                    </button>
                </div>
            )}

            {showDeleteButton && (
                <div>
                    <button className='btn2' onClick={handleGenerateReport}>
                        Generate Report
                    </button>
                    <button className='btn2' onClick={handleSignOut}>
                        Sign Out
                    </button>
                    <Link to="/M_Comment_main" className="btn2">
                        Comments Manager
                    </Link>
                    <table className='table' style={{ marginTop: '50px' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {audienceList.map((user, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <button className='btn2' onClick={() => handleDeleteUser(user._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )} */}
            
            <button className='btn2' onClick={handleGenerateReport}>
                Generate Report
            </button>
            <button className='btn2' onClick={handleSignOut}>
                Sign Out
            </button>
            <Link to="/M_Comment_main" className="btn2">
                Comments Manager
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>   
                <table className='table' style={{ marginTop: '50px', marginBottom:'150px', backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.83), rgba(255, 0, 0, 0.50))', width:'1450px',border:'2px solid white ' }}>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Phone Number</th> 
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {audienceList.map((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.phoneNumber}</td>
                                <td>
                                    <button className='btn2' onClick={() => handleDeleteUser(user._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>
    );
};




export default ManagerDisplayPage;