import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from '../home/Home';
import Login from '../Login/Login';

const Main = () => {
    return (
        <div className="main">
            <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' component={Login}/>
            
            </Switch>
            
        </div>
    )
}

export default Main
