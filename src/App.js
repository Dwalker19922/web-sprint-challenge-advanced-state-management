import React, { Component } from "react";
import {connect} from "react-redux"
import {fetchSmurfs} from "./actions/index"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import Profilepage from './components/smurfProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount(){
    this.props.fetchSmurfs()
  }
  render() {
   
    return (
      <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/">
          <SmurfList/>
          <AddForm/>
          </Route>
        </main>
        <Route exact path="/Profile">
          <Profilepage/>
        </Route>
      </div>
      </Router>
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