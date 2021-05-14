import React from 'react';
import {BrowserRouter as Router,Link,Route,useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import {connect} from 'react-redux'

const Header = (props) => {
    const {profile}=props
const{push}=useHistory()
    return (

    <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">Smurf Village Database</a>
        {profile===true?<Button variant="contained" color="primary" onClick={()=>{return push("/")}}>HOME</Button>:<Link to="./Profile">
        <Button variant="contained" color="primary">
            Profile Page
        </Button>
        </Link>}
    </nav>);
}
const mapStateToProps=(state)=>{
    return{
        profile:state.profilePage
    }
}
export default connect(mapStateToProps)(Header);