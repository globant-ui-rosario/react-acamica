import classNames from 'classnames';
import React from 'react';

export default class Component extends React.Component {

    constructor () {
        super();

        this.state = {
            selected: false
        };
    }

    render () {
        return (
            <p className={this.getClass()}>
                This is a text block
            </p>
        );
    }

    getClass () {
        return classNames({
            block: true,
            'text-block': (this.props.textBlock),
            'code-block': (this.state.codeBlock)
        });
    }
}
