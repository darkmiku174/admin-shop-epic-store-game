import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Table, Container, Modal, Card } from 'react-bootstrap';
class CartManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    };
    handleShow = () => {
        this.setState({
            show: true
        })
    };
    render() {
        var { show } = this.state;
        return (
            <Container>
                <div style={{ backgroundColor: '#3ac9c9' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Cart</p>
                </div>
                <Card className="table-container">
                    <Table className="normal-table" bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>User</th>
                                <th>List game</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>
                                    <Button variant="secondary" onClick={this.handleShow}>
                                        Show list
                                    </Button>
                                    <Modal show={show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>List Game details</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }}>Thêm</Button>
                                            <Table bordered hover responsive="sm" className="listgame-details">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Game's name</th>
                                                        <th>Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>Assassin</td>
                                                        <td>2</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Modal.Body>
                                    </Modal>
                                </td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>
        )
    }
}
export default CartManagement;