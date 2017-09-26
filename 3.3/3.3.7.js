import React from 'react';
import {
    IndexLink,
    Route,
    Router
} from 'react-router';

const Profile = function () {
    const toConfig = {
        pathname: '/home',
        query: {
            introduction: 'Vamos a aprender React JS'
        }
    };

    return (
        <div>
            <IndexLink to={toConfig} />
        </div>
    );
};

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
