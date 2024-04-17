import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManagerDisplayPage = () => {

  const [audienceList, setAudienceList] = useState([]);



  useEffect(() => {
    fetchAudienceList();
  }, []);
client/src/components/Thamindu_AudienceComponents/AudienceManager/Manager_Audience.js

  
  const fetchAudienceList = async () => {
    try {
      const response = await axios.get('/audience');
      setAudienceList(response.data);
    } catch (error) {
      console.error('Error fetching audience list:', error);
    }
  };




  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/audience/${userId}`);
      // Remove the deleted user from the audience list
      setAudienceList(audienceList.filter(user => user._id !== userId));
      // Optionally, show a notification or confirmation message
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };




  const handleGenerateReport = () => {
    // Add functionality to generate reports here
    // For example, you could open a new window with a printable report
    window.print();
  };




  return (
    <div>
      <h1>Manager Display Page</h1>
      <button onClick={handleGenerateReport}>Generate Report</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {audienceList.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerDisplayPage;
