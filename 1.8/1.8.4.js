class TasksList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            tasks: [
                'Do homework',
                'Work'
            ]
        };
    }

    componentWillMount () {
        this.setState({ /* Nuevo estado */});
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize);
        // Manipulacion de DOM
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
