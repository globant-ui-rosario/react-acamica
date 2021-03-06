class TaskForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            task: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    clearInput() {

    }

    onChange(event) {

    }

    onSubmit(event) {

    }

    render() {
        return (
            <form className="task-form" noValidate>
                <Input {...this.getInputProps()} />
            </form>
        );
    }

    getInputProps () {
        return {
            placeholder: 'What needs to be done?'
            value: this.state.value
        };
    }
}

TaskForm.propTypes = {
    onFormSubmit: PropTypes.func
};

export default TaskForm;
