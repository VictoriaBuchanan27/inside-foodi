import React from 'react';
import '../components/search.css';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            followingList:[],
            followersList:[],
            input:'',
        }
    }
    handleInput=(e)=>{
        const {input}= this.state;

        //text input changing 
        //while the user is typing, if those keys match anyone other username in the list then display name on screen 

    }
    render(){
        return(
            <>
            <div className="follower">
            <h2>Followers List</h2>
            <input type='text' onChange={this.handleInput} /> <button>Search</button>
            </div>
            <div className="following">
            <h2>Following List</h2>
            <input type='text' onChange={this.handleInput} /> <button>Search</button>
            </div>
            </>
        )
    }
}
export default Search;