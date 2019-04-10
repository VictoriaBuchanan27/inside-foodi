import React from 'react';
import UserPicture from './userpicture';


const UserBio =(props)=>{
    return(
        <>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">UserName</h1>
            <UserPicture />
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        </div>
        </>
    )
}
export default UserBio;