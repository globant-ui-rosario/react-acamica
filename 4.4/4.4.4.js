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
            case 'DEFINIR_FILTRO_VISIBILIDAD':
                return Object.assign({}, state, {
                    visibilityFilter: action.filter
                });
        default:
            return state;
    }
}
