import React from 'react';
import { IndexLink, Link } from 'react-router'

export default class Component extends React.Component {

    render () {
        return (
            <div>
                <IndexLink to="/">Home</IndexLink>
                <Link to="/users">Address</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}
