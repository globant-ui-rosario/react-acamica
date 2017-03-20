class TaskItem extends React.Component {
    render () {
        return <li>{this.props.children}</li>;
    }
}

TaskItem.propTypes = {
    name: React.PropTypes.element
}

class TasksList extends React.Component {
    render () {
        return (
            <ul>
                <TaskItem>
                    Do homework
                </TaskItem>
                <TaskItem>
                    Run
                </TaskItem>
            </ul>
        );
    }
}
