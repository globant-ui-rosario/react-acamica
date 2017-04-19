function agregarTodo(text) {
    return {
        type: 'AGREGAR_TODO',
        text
    }
}


store.dispatch(agregarTodo('Crear mi primer acción'));
