import React, { Component, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap';

class FormDialog extends Component {
    render() {
        const { isOpenModal, handleClose, type, onChange, onCreatetask, onUpdateTask, row } = this.props;
        const title = type === "add" ? "Add Task" : "Edit Task";
        const titleBtn = type === "add" ? "Add" : "Update";
        const onSave = type === "add" ? onCreatetask : () => onUpdateTask(row.id);
        return (
            <Fragment>
                <Modal show={isOpenModal} onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <input type="text" className="form-control" defaultValue={row.task_name || ''} onChange={onChange} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={onSave}>
                            {titleBtn}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default FormDialog 