import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import NavBar from './components/Navbar';

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Movie} />
                <Route path="/add-movie" component={AddMovie} />
                <Route path="/edit-movie/:id" component={EditMovie} />
            </Switch>
        </Router>
    );
}

export default App; 