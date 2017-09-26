import React from 'react';

class TaskItem extends React.Component {
    render () {
        return <li>{this.props.name}</li>;
    }
}

class TasksList extends React.Component {
    render () {
        return (
            <ul>
                <TaskItem name="Do homework" />
                <TaskItem name="Run" />
            </ul>
        );
    }
}
