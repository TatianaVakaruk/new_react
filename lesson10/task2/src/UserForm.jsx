import React from 'react';

const UserForm = ({userData, hangleChange}) => {
    return (
         <form className="user-form">
        <input type="text" name="firstName" className="user-form__input" onChange={hangleChange} value={userData.firstName} />
        <input type="text" name="lastName" className="user-form__input" onChange={hangleChange} value={userData.lastName} />
      </form>
    )
}
export default UserForm;