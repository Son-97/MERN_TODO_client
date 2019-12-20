import React, { Component, Fragment } from 'react'
import TaskList from './TaskList'
import { getTask, addToList, deleteItem, updateItem } from '../api'
import Modal from './Modal'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isOpenModal: false,
            type: '',
            row: {},
            task: '',
        }
    }
    async getList() {
        await getTask().then(data => {
            this.setState({
                items: [...data]
            })
        })
    };

    componentDidMount() {
        this.getList();
    }

    onChange = event => {
        console.log(event.target.value)
        this.setState({ task: event.target.value })
    }

    // onChange = (key, value) => {
    //     this.state.form[key] = value;
    // };

    onCreatetask = () => {
        const { task } = this.state;
        addToList(task).then(() => {
            this.getList();
        })
        this.setState({ isOpenModal: false });
    }

    handleAdd = () => this.setState({
        isOpenModal: true,
        type: 'add'
    });

    onDeleteTask = (id) => {
        deleteItem(id).then(() => {
            this.getList();
        })
    }

    handleClose = () => this.setState({ isOpenModal: false, row: {}, type: '' });

    handleUpdate = value => {
        this.setState({
            isOpenModal: true,
            row: value
        });
    };

    onUpdateTask = (id) => {
        let { task } = this.state;
        updateItem(task, id).then(() => {
            this.getList();
            // this.setState({ isOpenModal: false });
        })
    }

    render() {
        const { items, isOpenModal, type, row } = this.state;
        return (
            <Fragment>
                <div className="container mt-5">
                    <button className="btn btn-primary mb-2" onClick={this.handleAdd}>
                        Add Task
                </button>
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TaskList items={items} onDeleteTask={this.onDeleteTask} handleUpdate={this.handleUpdate} />
                        </tbody>
                    </table>
                </div>
                {isOpenModal && (
                    <Modal
                        isOpenModal={isOpenModal}
                        handleClose={this.handleClose}
                        type={type}
                        onChange={this.onChange}
                        onCreatetask={this.onCreatetask}
                        onUpdateTask={this.onUpdateTask}
                        row={row}
                    />
                )}
            </Fragment>
        )
    }
}
export default Task