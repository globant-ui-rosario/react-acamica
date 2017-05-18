class TodosList extends React.Component {
    render () {
        return (
            <TodoListItems items={this.props.todos} />
        );
    }
}

export default connect(
    state => ({
        todos: state.todos
    })
)(TodosList);
