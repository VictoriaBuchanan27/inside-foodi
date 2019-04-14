import React from 'react';
import UserPicture from './userpicture';


const UserBio =(props)=>{
    return(
        <>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">UserName</h1>
            <UserPicture />
            <p class="lead">Hi im a movie star and i love this regular shemugla girl Vicky from the Bronx </p>
        </div>
        </div>
        </>
    )
}
export default UserBio;