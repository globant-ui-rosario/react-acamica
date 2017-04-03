class Input extends React.Component {

    constructor (props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            value: props.value || props.defaultValue
        };
    }

    render () {
        return (
            <input value={this.getValue()} onChange={this.handleInputChange} />
        );
    }

    getValue () {
        const props = this.props;
        let value = this.state.value;

        if (props.value !==  undefined) {
            value = props.value;
        }

        return value;
    }

    handleInputChange (event) {
        const onChange = this.props.onChange;

        if (onChange) {
            onChange(event);
        } else {
            this.setState({
                value: event.target.value
            });
        }
    }
}

Input.propTypes = {
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string
};

export default Input;
