class CustomTextInput extends React.Component {

    constructor (props) {
        super(props);

        this.focus = this.focus.bind(this);
    }

    focus () {
        let input = this.refs.textInput;

        input.focus();
    }

    render () {
        return (
            <div>
                <Input
                    type="text"
                    ref={(input) => { this.textInput = input; }}
                />
                <input
                    type="button"
                    value="Mover foco al text input"
                    onClick={this.focus}
                />
            </div>
        );
    }
}

export default CustomTextInput;
