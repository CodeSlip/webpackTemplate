import React, { Component } from 'react';
import Users from './containers/Users';
import Pizza from './containers/Pizza';
import asyncComponent from './hoc/asyncComponent';
import { Link, Route } from 'react-router-dom';

const AsyncPizza = asyncComponent(()=> {
    return import ('./containers/Pizza.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> | 
                    <Link to="/pizza">Pizza</Link>
                </div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" exact component={Pizza} />
            </div>
                
        )
    }
}

export default App;