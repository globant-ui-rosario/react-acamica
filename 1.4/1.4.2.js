class TaskItem1 extends React.Component {
    render () {
        return <li>Do homework</li>;
    }
}

class TaskItem2 extends React.Component {
    render () {
        return <li>Work</li>;
    }
}

class TasksList extends React.Component {
    render () {
        return (
            <ul>
                <TaskItem1 />
                <TaskItem2 />
            </ul>
        );
    }
}
