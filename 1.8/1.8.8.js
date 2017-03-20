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

    componentWillUpdate () {
        // Preparacion de lo necesario previo a la actualizacion
    }

    componentDidUpdate () {
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
