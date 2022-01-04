import React, { Component } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
class Includes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            includes: []
        }
    }

    handleClose = () => {
        var { includes } = this.state
        this.setState({
            show: false
        })
        if (includes.length > 0) {
            includes.map((include, index) => {
                this.props.includes.push(include)
            })
        }
    };
    handleShow = () => {
        this.setState({
            show: true,
        })
        var { includes } = this.state
        this.props.includes.splice(0, includes.length)
    };

    showRow(tags) {
        var result = null;
        if (tags.length > 0) {
            result = tags.map((tag, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index + 1}</td>
                        <td style={{ padding: '0px' }}><Form.Control style={{ width: '100%' }} name={index} size="sm" type="text" value={this.showTag(tag)} placeholder="Nhập vào" onChange={this.onChange} /></td>
                        <td>
                            <button onClick={() => this.onDeleteRow(index)} ><FaTrash /></button>
                        </td>
                    </tr>
                )
            })
        }
        return result;
    }

    render() {
        var { show, includes } = this.state
        return (
            <>
                <Button onClick={this.handleShow} className="selected-btn" variant="secondary" style={{ width: '10rem' }}>
                    Include in details
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Includes details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }}>Thêm</Button>
                        <Table bordered hover responsive="sm" className="listgame-details">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tên</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showRow(includes)}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default Includes;