class Input extends React.Component {

    constructor (props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            value: ''
        };
    }

    render () {
        return (
            <input value={this.state.value} onChange={this.handleInputChange} />
        );
    }

    handleInputChange (event) {
        this.setState({
            value: event.target.value
        });
    }
}

export default Input;
