const todosInitialState = {
    isFetching: false,
    error: null,
    items: []
};


function todos(state = todosInitialState, action) {
    switch (action.type) {
        case 'OBTENER_TODOS_PEDIDO':
            return Object.assign({}, state, {
                isFetching: true
              });
        case 'OBTENER_TODOS_EXITO':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items
              });
        case 'OBTENER_TODOS_FALLO':
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
              });
        default:
            return state;
    }
}
