class TasksList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            tasks: props.tasks
        };
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize);

        // Manipulacion de DOM
    }

    componentWillReceiveProps (nextProps) {
        this.setState({tasks: nextProps.tasks});
    }

    shouldComponentUpdate (nextProps, nextState) {
        return true;
    }

    render () {
        return (
            <ul>
                {this.state.tasks.map(this.renderTaskItem)}
            </ul>
        );
    }

    renderTaskItem (task) {
        return <TaskItem name={task} />;
    }

    handleResize () {
        // Manejar evento
    }
}
