import React from 'react'
import { connect } from 'react-redux'
import SmurfList from './SmurfList'
function Profilepage(props){
    const {smurfData}=props
    return(
        <div>
            <div>
            <h4>welcome to the official lambda smuf profile page</h4>
            </div>
            <div>
                <h5>CLICK ON A SMURFS NAME TO VEIW THEIR PROFILE</h5>
            </div>
            <div>
            {!smurfData?<div></div>:smurfData.map((item)=>{return(<p>{item.name}</p>)})}
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        smurfData:state.data
    }
}
export default connect(mapStateToProps)(Profilepage)