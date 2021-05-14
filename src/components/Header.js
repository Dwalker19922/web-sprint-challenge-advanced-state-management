import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import { Button } from '@material-ui/core';


const Header = () => {

    return (

    <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">Smurf Village Database</a>
        <Link to="./Profile">
        <Button variant="contained" color="primary">
            Profile Page
        </Button>
        </Link>
    </nav>);
}

export default Header;