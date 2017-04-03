class Input extends React.Component {

    constructor (props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);

        this.state = {
            value: ''
        };
    }

    render () {
        return (
            <input value={this.state.value} onChange={this.handleInputChange} onFocus={this.handleInputFocus}/>
        );
    }

    handleInputChange (event) {
        this.setState({
            value: event.target.value
        });
    }

    handleInputFocus (event) {
        event.stopPropagation();
        event.preventDefault();
    }
}

export default Input;
