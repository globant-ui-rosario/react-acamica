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
                <TaskList tasks={state.tasks} />
            </div>
        )
    }

    handleFilterInputChange (event) {
        this.setState({
            filter: event.target.value
        });
    }
}

export default FilterableTaskList;
