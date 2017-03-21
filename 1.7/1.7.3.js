class TaskItem extends React.Component {
    render () {
        return <li>{this.props.name}</li>;
    }
}

class TasksList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: ["Do homework", "Work"]
        }
    }

    addItem () {
        this.setState({
            items: [...this.state.items, "New Element"]
        });
    }

    render () {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) =>
                        <TaskItem key={index} name={item} />
                    )}
                </ul>
                <button onClick={this.addItem.bind(this)}>Add Item</button>
            </div>
        );
    }
}
