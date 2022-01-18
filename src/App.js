import React from 'react';
import {Redirect, Switch, Route} from "react-router-dom";

import './App.css';

import Main from './Components/Main/Main.jsx';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" render={() => <Main />} />
            <Route path="*" render={() => <Redirect to={"/"} />}/>
        </Switch>
    )
}

export default App;