const todosActions = require('actions/todos');
const dispatch = store.dispatch;

class TodosList extends React.Component {

    onClickButton () {
        this.props.agregarTodo('Nueva Tarea');
    }

    render () {
        return (
            <div>
                <TodoListItems items={this.props.todos} />
                <button type="button" onClick={this.onClickButton}>
                    Agregar tarea
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = function () {
    return {
        agregarTodo: (text) => {
            dispatch(todosActions.agregarTodo(text))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosList);
