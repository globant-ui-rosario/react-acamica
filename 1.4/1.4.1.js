class MyComponent extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class MyOtherComponent extends React.Component {
    render () {
        const name = 'Marte';

        return (
            <div>
                <MyComponent name="Jupiter" />
                <MyComponent name={name} />
            </div>
        );
    }
}
