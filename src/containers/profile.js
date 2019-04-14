import React from 'react';
import UserBio from '../components/userbio';
import UserDisplay from '../components/userdisplay';


const Profile=(props)=>{
    return(
        <>
        <UserBio/>
        <UserDisplay />
        </>
    )
}
export default Profile;

// class Profile extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             userPic='',
//             userBio='',
//             profileImages=[],
//         }
//     }
//     redner(){
//         return(
//             <>
//             <Header/>
//             </>
//         )
//     }
// }
// export default Profile; 