import React, { Component } from 'react';
import Input from './Input';
import TasksList from './TasksList';

class FilterableTaskList extends Component {

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
                <TasksList tasks={this.getFilteredTasks()} />
            </div>
        )
    }

    handleFilterInputChange (event) {
        this.setState({
            filterText: event.target.value
        });
    }

    getFilteredTasks () {
        const state = this.state;
        const filterText = state.filterText;

        return state.tasks.filter((task) => {
            return (task.indexOf(filterText) !== -1);
        });
    }
}

export default FilterableTaskList;
