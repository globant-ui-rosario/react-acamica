const todosActions = require('actions/todos');

class TodosList extends React.Component {
    onClickButton () {
        this.props.agregarTodo("Nueva Tarea");
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

export default connect(
    state => ({
        todos: state.todos
    }),
    (dispatch) => ({
        agregarTodo: text => dispatch(todosActions.agregarTodo(text))
    })
)(TodosList);
