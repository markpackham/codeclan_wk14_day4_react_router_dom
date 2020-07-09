import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Contact from "./Contact";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';

class Main extends Component {

  render() {
    return (
<Router>
<React.Fragment>
<NavBar />
{/* Always use exact or "/"" would inpact not only "/" but all the others with a "/" in them like /about */}
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/pricing" component={Pricing} />
<Route exact path="/contact" component={Contact} />
</React.Fragment>
</Router>
    );
  }
  
}

export default Main;
