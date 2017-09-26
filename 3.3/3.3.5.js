import React from 'react';
import {
    Router,
    Route
} from 'react-router';

const Home = function () {
    return (
        <div>
            <h3>Bienvenido al curso de {this.props.params.courseName}</h3>
        </div>
    );
};

export default (
    <Router>
        <Route component={Home} path="/home/(:courseName)" />
    </Router>
);
