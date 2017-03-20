class TaskItem extends React.Component {
    render () {
        return <li>{this.props.children}</li>;
    }
}

class TasksGroup extends React.Component {
    render () {
        return (
            <ul>
                {this.props.children}
            </ul>
        );
    }
}

class TasksList extends React.Component {
    render () {
        return (
            <TasksGroup>
                <TaskItem>
                    Do homework
                </TaskItem>
                <TaskItem>
                    Run
                </TaskItem>
            </TasksGroup>
        );
    }
}
