import React from 'react';
// import './userpicture.css';

const UserPicture =(props)=>{
    return(
        <>
        <div className="userImage">
          <img alt = 'userImage' src={require('./foodi.png')}  />
        </div>
        </>
    )
}
export default UserPicture;