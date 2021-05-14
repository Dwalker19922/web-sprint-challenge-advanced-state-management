import React from 'react'
import { connect } from 'react-redux'
import {Link,Route} from 'react-router-dom'
import{setProfile} from '../actions/index'
import Profile from './Profile'
function Profilepage(props){
    const {smurfData,setProfile}=props
    setProfile(true)
    const handleClick=()=>{
      console.log("click")  
    }
    return(
        <div>
            <div>
            <h4>welcome to the official lambda smuf profile page</h4>
            </div>
            <div>
                <h5>CLICK ON A SMURFS NAME TO VEIW THEIR PROFILE</h5>
            </div>
            <div>
            {!smurfData?<div></div>:smurfData.map((item)=>{
                return(
                <div>
                <Link to={`/Profile/${item.id}`}>
                <p className="profileList" onClick={handleClick}>
                {item.name}</p></Link>
                </div>)})}
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        smurfData:state.data,
    }
}
const mapActionsToProps={
    setProfile
}
export default connect(mapStateToProps,mapActionsToProps)(Profilepage)