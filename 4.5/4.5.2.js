function agregarTodo(text) {
  return {
    type: 'AGREGAR_TODO',
    text
  };
}

function definirVisibilityFilter(filter) {
  return {
    type: 'DEFINIR_FILTRO_VISIBILIDAD',
    filter
  };
}

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


var store = Redux.createStore(todoApp);


var unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(agregarTodo('Learn about actions'));
store.dispatch(agregarTodo('Learn about reducers'));
store.dispatch(agregarTodo('Learn about store'));
store.dispatch(definirVisibilityFilter('MOSTRAR_FINALIZADAS'));

unsubscribe();
