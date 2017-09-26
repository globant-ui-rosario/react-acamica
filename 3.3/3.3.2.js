import React from 'react';
import { Link } from 'react-router';

export default class Component extends React.Component {

    render () {
        return (
            <div>
                <Link to="/" onlyActiveOnIndex>Home</Link>
                <Link to="/users">Address</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}
