import React from 'react';
import ReactDOM from 'react-dom';

export default class Component extends React.Component {

    constructor () {
        super();

        this.state = {
            height: 0
        };
    }

    componentDidMount () {
        let componentNode = ReactDOM.findDOMNode(this);
        let componentHeight = componentNode.offsetHeight;

        this.setState({
            height: componentHeight
        });
    }

    render () {
        return (
            <div className="component">
            <p>This block height is equal to {this.state.height}px</p>
        </div>
        );
    }
}