class AutoFocusTextInput extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.refs.textInput.focus();
    }

    render () {
        return (
            <CustomTextInput
                ref={(input) => { this.textInput = input; }}
            />
        );
    }
}

export default AutoFocusTextInput;
