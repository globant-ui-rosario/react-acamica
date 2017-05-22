class TasksList extends Component {

    componentDidMount () {
        window.addEventListener('resize', this.handleResize);

        // Manipulacion de DOM
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize);
    }
}
