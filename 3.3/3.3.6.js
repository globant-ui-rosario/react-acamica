import React from 'react';
import {
    Route,
    Router
} from 'react-router';

const Home = function () {
    return (
        <div>
            <h3>Bienvenido al curso de {this.props.params.courseName}</h3>
            <span>{this.props.query.introduction}</span>
        </div>
    );
};

export default (
    <Router>
        <Route component={Home} path="/home/:courseName" />
    </Router>
);
