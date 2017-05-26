import React from 'react';

export default class ControlledInput extends React.Component {

    render () {
        return (
            <input onChange={this.props.onChange} />
        );
    }
}
