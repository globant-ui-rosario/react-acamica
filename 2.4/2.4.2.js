class TaskList extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        let taskItems = this.getTaskItems();

        return (
            <ul className="task-list">
                {taskItems}
            </ul>
        )
    }

    getTaskItems () {
        return this.props.tasks.map((task) => {
            return (<TaskItem task={task} key={task.id} />);
        })
    }
}

export default TaskList;
