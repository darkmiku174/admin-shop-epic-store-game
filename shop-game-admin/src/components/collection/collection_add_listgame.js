import React, { Component } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddListGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    };
    handleShow = () => {
        this.setState({
            show: true,
        })
    };

    render() {

        var { show } = this.state
        return (
            <div>
                <Button onClick={this.handleShow} className="selected-btn" variant="secondary" style={{ width: '10rem' }}>
                    Game List
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Game List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }}>Thêm</Button>
                        <input type="text" placeholder='search game' />
                        <Table bordered hover responsive="sm" className="listgame-details">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Game's name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>asdsad</td>
                                    <td>asdsad</td>
                                    <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default AddListGame;




