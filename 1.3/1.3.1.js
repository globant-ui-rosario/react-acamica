function MyComponent (props) {
    return React.createElement('h1', null, 'Hello, ', props.name);
}

class MyComponent extends React.Component {
    render () {
        return React.createElement('h1', null, 'Hello, ', this.props.name);
    }
}
