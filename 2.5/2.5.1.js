class CustomTextInput extends React.Component {

    constructor (props) {
        super(props);

        this.focus = this.focus.bind(this);
    }

    focus () {
        let input = this.refs.myInput;

        input.focus();
    }

    render () {
        return (
            <div>
                <input
                    type="text"
                    ref="myInput"
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