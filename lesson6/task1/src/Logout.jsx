import React from 'react';

const Logout = ({handleLogout}) => {
    return <button className='btn logout' onClick={handleLogout}>Logout</button>;
}
export default Logout;