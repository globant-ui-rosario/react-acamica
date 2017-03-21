import React from 'react';

class Blue extends React.Component {

    render () {
        return React.cloneElement(this.props.children, {style: {color: 'blue'}});
    }
}

class Component extends React.Component {

    render () {
        return (
            <Blue>
                <p ref="text" key="1">This text is blue.</p>
            </Blue>
        );
    }
}