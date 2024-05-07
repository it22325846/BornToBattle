import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../Style/Manager_Audience.css'




const ManagerDisplayPage = () => {
    const [audienceList, setAudienceList] = useState([]);


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


    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`/manager/audi/${userId}`);
            
            fetchAudienceList();
            alert("Deleted successfully");
    
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };
    
    
    // const handleGenerateReport = () => {
    //     // Add functionality to generate reports here
    //     // For example, you could open a new window with a printable report
    //     window.print();
    // };
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
      


    
    return (
        <div>
            <h2 style={{ padding: '10px', margin: '50px' }} >Audience Manager Display Page</h2>
            
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
    );
};








export default ManagerDisplayPage;