class TaskItem extends React.Component {
    render () {
        return <li>{this.props.name}</li>;
    }
}

TaskItem.propTypes = {
    name: React.PropTypes.string
}

class TasksList extends React.Component {
    render () {
        return (
            <ul>
                <TaskItem name="Do homework" />
                <TaskItem name="Work" />
            </ul>
        );
    }
}
