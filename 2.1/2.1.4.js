class FilterableTaskList extends React.Component {

    constructor (props) {
        super(props);

        this.handleFilterInputChange = this.handleFilterInputChange.bind(this);

        this.state = {
            tasks: [
                'Do homework',
                'Work'
            ],
            filterText: ''
        };
    }

    render () {
        const state = this.state;

        return (
            <div>
                <Input value={state.filterText} onChange={this.handleFilterInputChange} />
                <TaskList tasks={state.tasks} />
            </div>
        )
    }

    handleFilterInputChange (event) {
        this.setState({
            filterText: event.target.value
        });
    }
}

export default FilterableTaskList;
