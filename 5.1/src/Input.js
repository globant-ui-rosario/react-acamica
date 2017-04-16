import React, { Component, PropTypes } from 'react';

class Input extends React.Component {

    constructor (props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            value: props.value || props.defaultValue
        };
    }

    render () {
        return (
            <input value={this.getValue()} onChange={this.handleInputChange} />
        );
    }

    getValue () {
        const props = this.props;
        let value = this.state.value;

        if (props.value !==  undefined) {
            value = props.value;
        }

        return value;
    }

    handleInputChange (event) {
        const onChange = this.props.onChange;

        this.setState({
            value: event.target.value
        });

        if (onChange) {
            onChange(event);
        }
    }
}

Input.propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default Input;
