class Input extends React.Component {

    render () {
        return (
            <input value={this.props.value} />
        );
    }
}

Input.propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.string
};

export default Input;
