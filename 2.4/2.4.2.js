class TaskList extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        let taskItems = getTaskItems();

        return (
            <ul className="task-list">
                {taskItems}
            </ul>
        )
    }

    getTaskItems () {
        return this.props.tasks.map((task, index) => {
            return (
                <TaskItem task={task} key={index} />
            );
        })
    }
}

export default TaskList;