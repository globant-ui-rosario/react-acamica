const todosActions = require('actions/todos');

class TodosList extends React.Component {
    onClickButton () {
        this.props.agregarTodo("Nueva Tarea");
    }

    render () {
        return (
            <ul>
                {this.props.todos(todo =>
                    <li>
                        {todo.text}
                    </li>
                )}
            </ul>
            <button type="button" onClick={this.onClickButton}>
                Agregar tarea
            </button>
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
