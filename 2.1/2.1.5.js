class FilterableTaskList extends React.Component {

    constructor (props) {
        super(props);

        this.handleFilterInputChange = this.handleFilterInputChange.bind(this);

        this.state = {
            tasks: [
                'Do homework',
                'Work'
            ],
            filter: ''
        };
    }

    render () {
        const state = this.state;

        return (
            <div>
                <Input value={state.filter} onChange={this.handleFilterInputChange} />
                <TaskList tasks={this.getFilteredTasks()} />
            </div>
        )
    }

    handleFilterInputChange (event) {
        this.setState({
            filter: event.target.value
        });
    }

    getFilteredTasks () {
        const state = this.state;
        const filter = state.filter;

        return state.tasks.filter((task) => {
            return (task.indexOf(filter) !== -1);
        });
    }
}

export default FilterableTaskList;
