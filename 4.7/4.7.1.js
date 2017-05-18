class TodosList extends React.Component {
    render () {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <li>
                        {todo.text}
                    </li>
                ))}
            </ul>
        );
    }
}

export default connect(
    state => ({
        todos: state.todos
    })
)(TodosList);
