import React, { useState } from 'react';
import './Accountsettings.css';

const Accountsettings = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    profilePicture: 'path/to/profile.jpg', // Replace with the correct path or URL
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfilePictureChange = (e) => {
    // Handle profile picture upload or change
  };

  const handlePasswordChange = () => {
    // Implement password change functionality
  };

  const handleAccountDeactivation = () => {
    // Implement account deactivation logic
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>

      <div className="profile-picture-container">
        <img src={userInfo.profilePicture} alt="Profile" className="profile-picture" />
        <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
      </div>

      <div className="form-container">
        <label>
          First Name:
          <input type="text" name="firstName" value={userInfo.firstName} onChange={handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={userInfo.lastName} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={userInfo.email} onChange={handleChange} />
        </label>

        <button className="password-button" onClick={handlePasswordChange}>
          Change Password
        </button>

        <button className="deactivate-button" onClick={handleAccountDeactivation}>
          Deactivate Account
        </button>
      </div>
    </div>
  );
};

export default Accountsettings;
