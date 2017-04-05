class TaskForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            task: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    clearInput() {
        this.setState({task: ''});
    }

    onChange(event) {
        this.setState({task: event.target.value});
    }

    onKeyUp(event) {
        if (event.keyCode === 27) {
            this.clearInput();
        }
    }

    onSubmit(event) {
        const task = this.state.task.trim();
        const onFormSubmit = this.props.onFormSubmit;

        event.preventDefault();

        if (task.length && onFormSubmit) {
            onFormSubmit(task);
        }

        this.clearInput();
    }

    render() {
        return (
            <form className="task-form" onSubmit={this.onSubmit} noValidate>
                <Input {...this.getInputProps()} />
            </form>
        );
    }

    getInputProps () {
        return {
            onChange: this.onChange,
            onKeyUp: thus.onKeyUp,
            placeholder: 'What needs to be done?'
            value: this.state.value
        };
    }
}

TaskForm.propTypes = {
    onFormSubmit: PropTypes.func
};

export default TaskForm;
