import React, { useState } from 'react';
import axios from 'axios';

const PasswordUpdate = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('/api/update-password', { oldPassword, newPassword });
      
      setError(null);
      setSuccessMessage('Password updated successfully');
      // Clear form fields
      setOldPassword('');
      setNewPassword('');
    } catch (err) {
      console.error(err);
      setError('An error occurred during password update');
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Current Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Update Password</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default PasswordUpdate;
