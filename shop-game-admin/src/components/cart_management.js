import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa';
import { Button, Table, Container, Card } from 'react-bootstrap';
class CartManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: [],
            cart: {
                products: []
            },
            show: false
        }
    }

    componentDidMount() {
        //kết nối carts
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/carts',
            data: null
        }).then(res => {
            this.setState({
                carts: res.data
            });
        }).catch(err => {
            console.log(err);
        })
        //
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games',
            data: null
        }).then(res => {
            this.setState({
                products: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }


    showCarts(carts) {
        var result = null;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return (
                    <tr>
                        <td>{cart._id}</td>
                        <td>{cart.user.name}</td>
                        <td>{cart.status.toString()}</td>
                        <td>
                            <Link to={"/admin/cart/" + cart._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }


    showQuantity(product) {
        var result = null;
        if (product.length > 0) {
            result = product.map((p, index) => {
                return (
                    <h6>{p.quantity}</h6>
                )
            });
        }
        return result
    }

    render() {
        var { carts } = this.state;
        return (
            <>
                <div style={{ backgroundColor: '#3ac9c9', height: '56px' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Cart</p>
                </div>
                <Card style={{ padding: '1rem', marginLeft: '1rem', display: 'flex', flexDirection: 'column' }}>
                    <Container className="table-container">
                        {/* <Link to="/admin/add_game">
                            <Button variant="secondary" style={{ float: 'right', width: '5rem', marginTop: '1rem', marginBottom: '1rem' }}> Thêm</Button>
                        </Link> */}
                        <Table style={{ fontSize: '13px' }} className="normal-table" bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Cart ID</th>
                                    <th>Tên User</th>
                                    <th>Tình trạng</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showCarts(carts)}
                            </tbody>
                        </Table>
                    </Container>
                </Card>
            </>
        )
    }
}
export default CartManagement;