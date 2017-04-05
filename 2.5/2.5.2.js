class AutoFocusTextInput extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.textInput.focus();
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