import React from 'react';

const UserDisplay =()=>{
    return(
        <>
        <div className='row1'>
        <img src={require('./sushi.jpeg')}  class="rounded float-left" alt="mockpic"/>
        <img src={require('./food.jpeg')} class="rounded float-right" alt="..."/>
        <div class="card border-success mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header">User Name</div>
            <div class="card-body text-success">
                <h5 class="card-title">Users Restaurant Review Here</h5>
                <p class="card-text">Restaurant Location</p>
            </div>
        </div>
        </div>
        
        <div className='row2'>
        <img src={require('./donut.jpeg')}  class="rounded float-left" alt="mockpic"/>
        <img src={require('./pizza.jpeg')} class="rounded float-right" alt="..."/>
        <img src={require('./burger.jpeg')} class="rounded float-center" alt="..."/>
        </div>
        <div className ="row3">
        <img src={require('./tacos.jpeg')}  class="rounded float-left" alt="mockpic"/>
        <img src={require('./noodles.jpeg')} class="rounded float-right" alt="..."/>
        <div class="card border-success mb-3" style={{maxWidth: '18rem'}}>
            <div class="card-header">User Name</div>
            <div class="card-body text-success">
                <h5 class="card-title">Users Restaurant Review Here</h5>
                <p class="card-text">Restaurant Location and Time</p>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default UserDisplay;