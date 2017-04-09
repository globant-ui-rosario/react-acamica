function todoApp(state = initialState, action) {
    switch (action.type) {
        case 'AGREGAR_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        default:
            return state;
    }
}
