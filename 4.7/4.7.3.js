import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TodosList from './components/TodosList'

let store = createStore(todoApp)

class Provider extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
