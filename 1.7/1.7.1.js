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
                <TaskItem name={this.state.items[0]} />
                <TaskItem name={this.state.items[1]} />
            </ul>
        );
    }
}
