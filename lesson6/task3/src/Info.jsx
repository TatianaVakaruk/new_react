import React from 'react';

const Info = ({text}) => {
    if(!text){
        return null;
    }
    return (
       <div className="info">{info}</div> 
    )
}
export default Info;