import { createTestComponent } from 'create-test-component';
import FilterableTaskList from './FilterableTaskList';
import Input from './Input';
import ReactDOM from 'react-dom';
import TasksList from './TasksList';
import TestUtils, { Simulate } from 'react-addons-test-utils';

describe('FilterableTaskList component', () => {
    let filterableTaskList;
    let filterableTaskListNode;

    function renderComponent (props) {
        filterableTaskList = createTestComponent(FilterableTaskList, props);
        filterableTaskListNode = ReactDOM.findDOMNode(filterableTaskList);
    }

    beforeEach(() => {
        renderComponent();
    });

    describe('when rendered with default props', () => {

        it('should render an Input component', () => {
            const input = TestUtils.scryRenderedComponentsWithType(filterableTaskList, Input)[0];

            expect(input).toBeDefined();
            expect(input.props).toEqual({
                onChange: filterableTaskList.handleFilterInputChange,
                value: ''
            });
        });

        it('should render a TasksList component', () => {
            const tasksList = TestUtils.scryRenderedComponentsWithType(filterableTaskList, TasksList)[0];

            expect(tasksList).toBeDefined();
            expect(tasksList.props).toEqual({
                tasks: [
                    'Do homework',
                    'Work'
                ]
            });
        });
    });

    describe('when Input onChange property is called', () => {

        beforeEach(() => {
            filterableTaskList.handleFilterInputChange({
                target: {
                    value: 'Do '
                }
            });
        });

        it('should update filterText', () => {
            expect(filterableTaskList.state.filterText).toEqual('Do ');
        });

        it('should update filtered tasks provided to TasksList component', () => {
            const tasksList = TestUtils.scryRenderedComponentsWithType(filterableTaskList, TasksList)[0];

            expect(tasksList.props.tasks).toEqual(['Do homework']);
        });
    });
});
