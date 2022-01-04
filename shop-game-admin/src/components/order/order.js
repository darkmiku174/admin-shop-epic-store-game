import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button, Table, Container } from 'react-bootstrap';
class Order extends Component {
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
        var { show } = this.state
        return (
            <Container>
                <Container className="table-container">
                    <Button style={{ float: 'right', marginBottom: '1rem' }}>Thêm +</Button>
                    <Table className="normal-table" bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Cart</th>
                                <th>Paid at</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Cancel at</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td><FaTrash /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
        )
    }

}
export default Order;