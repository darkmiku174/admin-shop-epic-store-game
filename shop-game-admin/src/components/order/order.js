import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import axios from "axios";
import { Button, Table, Container } from 'react-bootstrap';
class Order extends Component {


    showOrders(orders) {
        var result = null;
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                return (
                    <tr>
                        <td>{order._id}</td>
                        <td>{order.paid_at}</td>
                        <td>{order.user.name}</td>
                        <td>{order.payment_method.method}</td>
                        <td>{order.status.toString()}</td>
                        <td>{order.cancelled_at}</td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaTrash /></Button>
                            <Link to={"/admin/order/" + order._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }

    render() {
        var { orders } = this.props;
        console.log(orders)
        return (
            <Container>
                <Container className="table-container">
                    <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem' }}>Thêm</Button>
                    <Table className="normal-table" bordered hover responsive="lg" style={{ fontSize: '13px' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Paid at</th>
                                <th>User</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Cancel at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showOrders(orders)}
                        </tbody>
                    </Table>
                </Container>
            </Container>
        )
    }
}
export default Order;