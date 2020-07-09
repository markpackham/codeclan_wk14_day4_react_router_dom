import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact";
import History from "./History";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";

class Main extends Component {

  constructor(props){
    super(props);
    this.state ={
      pricing: [
        {level: "Hobby", cost: 0},
        {level: "Startup", cost: 10},
        {level: "Enterprise", cost: 100}
      ]
    }
  }


  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          {/* Always use exact or "/"" would inpact not only "/" but all the others with a "/" in them like /about */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route 
          exact 
          path="/pricing" 
          // Pretend that we're bragging data from a database
          render={() => <Pricing prices={this.state.pricing} />}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/history" component={History} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
