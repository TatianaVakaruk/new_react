import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({userData, hangleChange}) => {
    return (
        <div className="column">
      <UserForm userData={userData} hangleChange={hangleChange} />
      </div>
    )
}
export default Profile;