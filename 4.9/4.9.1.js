const obtenerTodosPedido = () => ({
    type: 'OBTENER_TODOS_PEDIDO'
})

const obtenerTodosExito = (items) => ({
    type: 'OBTENER_TODOS_EXITO',
    items
})

const obtenerTodosFallo = (error) => ({
    type: 'OBTENER_TODOS_FALLO',
    error
})

const obtenerTodos = () => (dispatch, getState) {
    dispatch(obtenerTodosPedido())

    return fetch(...)
        .then(response => dispatch(obtenerTodosExito(response.items)))
        .catch( response => dispatch(obtenerTodosFallo(response.error)));
}
