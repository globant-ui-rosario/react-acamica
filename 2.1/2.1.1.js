class Input extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            value: props.value || props.defaultValue
        };
    }

    render () {
        return (
            <input value={this.getValue()} />
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
}

Input.propTypes = {
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string
};

export default Input;
