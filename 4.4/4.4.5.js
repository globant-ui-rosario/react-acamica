function todos(state = [], action) {
    switch (action.type) {
        case 'AGREGAR_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

function visibilityFilter(state = 'MOSTRAR_TODO', action) {
    switch (action.type) {
        case 'DEFINIR_FILTRO_VISIBILIDAD':
            return action.filter;
        default:
            return state;
    }
}

function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}
