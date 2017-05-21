import React from 'react';
import {
    IndexRoute,
    Link,
    Router,
    Route
} from 'react-router';

const Home = function () {
    <div>
        <Link to="message">Read message</Link>
    </div>
};

const Message = function () {
    <div>
        {this.props.location.query.message}
    </div>
};

export default (
    <Router>
        <IndexRoute component={Home} />
        <Route component={Message} path="message" />
    </Router>
);
