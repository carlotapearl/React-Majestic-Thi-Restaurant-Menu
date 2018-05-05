import React, { Component } from 'react';
import '../styles/App.css';
// Import BaseLayout, Appetizers, Entrees, Desserts
import BaseLayout from '../components/Layout';
import Appetizers from '../components/Appetizers';
import Entrees from '../components/Entrees';
import Desserts from '../components/Desserts';


class App extends Component {
// Set initial state for appetizers, entrees, and desserts.
// All should be set to empty arrays.
    constructor(props) {
    super(props);
    this.state = {
      appetizers:[],
      entrees: [],
      desserts: [],
    }
  }

// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entres, and desserts.
// Set these to state.
// YOUR CODE HERE>
    componentWillMount() {
    let url ="http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu";    
    fetch(url).then((response) => { // Fetch data from API
      return response.json();
    }).then((data) => {
      let menu = data[0];
      let appetizers = menu.Appetizers;
      let entrees = menu.Entrees;
      let desserts = menu.Desserts;
      this.setState({appetizers: appetizers, entrees: entrees, desserts: desserts})
    });
  }

  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <BaseLayout>
        <div className="menu col-md-10 col-md-offset-1">
          <h2 className="col-md-offset-2">Menu</h2>
          <Appetizers appetizers={this.state.appetizers}/>
          <Entrees entrees={this.state.entrees}/>
          <Desserts desserts={this.state.desserts}/>
        </div>
       </BaseLayout>
    );
  }
}

export default App;
