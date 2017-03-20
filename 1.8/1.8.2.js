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
}
