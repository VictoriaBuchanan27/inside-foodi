import React from 'react';

const UserDisplay =()=>{
    return(
        <>
        <div class="card border-success mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header">User Name</div>
            <div class="card-body text-success">
                <h5 class="card-title">Users Restaurant Review Here</h5>
                <p class="card-text">Restaurant Location</p>
            </div>
        </div>
        <img src={require('./foodi.png')}  class="rounded float-left" alt="mockpic"/>
        <img src={require('./foodi.png')} class="rounded float-right" alt="..."/>
        <div class="card border-success mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header">User Name</div>
            <div class="card-body text-success">
                <h5 class="card-title">Users Restaurant Review Here</h5>
                <p class="card-text">Restaurant Location</p>
            </div>
        </div>
        <div class="card border-success mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header">User Name</div>
            <div class="card-body text-success">
                <h5 class="card-title">Users Restaurant Review Here</h5>
                <p class="card-text">Restaurant Location and Time</p>
            </div>
        </div>
        </>
    )
}
export default UserDisplay;