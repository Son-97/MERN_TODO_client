import React, { Component, Fragment } from 'react'

class Task extends Component {
    render() {
        const { items,onDeleteTask, handleUpdate } = this.props;
        return (
            <Fragment >
                {items && items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.task_name}</td>
                        <td className="text-center">
                            <button
                                className="btn btn-info mr-1"
                                onClick = {(value) => {handleUpdate(item)}}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick = {(id) => {onDeleteTask(item.id)}}
                            >
                                Delete
                    </button>
                        </td>
                    </tr>
                ))}
            </Fragment>
        )
    }
}

export default Task