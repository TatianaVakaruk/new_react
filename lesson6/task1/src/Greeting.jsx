import React from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './Guestgreeting.jsx';

const Greeting = props => {
    const {isLoggedIn} = props;
    if (isLoggedIn){
    return <UserGreeting />
    }
    return <GuestGreeting /> 
}
export default Greeting;