class Input extends React.Component {

    constructor (props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render () {
        return (
            <input value={this.props.value} onChange={this.handleInputChange} />
        );
    }

    handleInputChange (event) {
        const onChange = this.props.onChange;

        if (onChange) {
            onChange(event);
        }
    }
}

Input.propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.string
};

export default Input;
