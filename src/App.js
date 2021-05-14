import React, { Component,useEffect } from "react";
import {connect} from "react-redux"
import {fetchSmurfs,addSmurf} from "./actions/index"
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

    



  render() {
    this.props.fetchSmurfs()
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapActionsToProps ={ 
fetchSmurfs,
}


export default connect(null,mapActionsToProps)(App)
//Task List:
//1. Connect the fetchSmurfs actions to the App component. *
//2. Call the fetchSmurfs action when the component first loads.*