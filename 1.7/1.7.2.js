import React from 'react';

class TaskItem extends React.Component {
    render () {
        return <li>{this.props.name}</li>;
    }
}

class TasksList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: ["Do homework", "Work"]
        }
    }

    render () {
        return (
            <ul>
                {this.state.items.map((item, index) =>
                    <TaskItem key={index} name={item} />
                )}
            </ul>
        );
    }
}
