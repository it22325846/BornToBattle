import React, { useState } from 'react';
import axios from 'axios';

const EditPassword = ({  }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const username = localStorage.getItem('username') || '';

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for updating the password
      const response = await axios.put(`/password/update/${username}`, {
        newPassword: newPassword,
      });

      if (response.data.success) {
        setSuccess('Password updated successfully');
        setError('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError('Failed to update password');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setError('Internal server error');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Edit Password</h2>
      <form onSubmit={handlePasswordChange}>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{ width: '30%' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '30%' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit" className="btn btn-primary">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default EditPassword;
