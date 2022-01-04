import React, { Component } from 'react';
import { Row, Button, Table, Container } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from "axios";
import DeleteProductNotification from './notification/delete_product_notification';
class GamesManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            show: false
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games',
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    countActiveKeys(keys) {
        var result = 0;
        if (keys.length > 0) {
            keys.map((key, index) => {
                if (key.status) {
                    result += 1
                }
            })
        }
        return result;
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.type}</td>
                        <td>{product.developer}</td>
                        <td>{product.publisher}</td>
                        <td>{product.release_date}</td>
                        <td>{product.platform}</td>
                        <td>{product.purchase_price}</td>
                        <td>{product.sale_price}</td>
                        <td>{this.countActiveKeys(product.keys)}</td>
                        <td>KM</td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link to={"/admin/game/" + product._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                            <DeleteProductNotification data={product._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { products } = this.state
        return (
            <Container>
                <div style={{ backgroundColor: '#3ac9c9' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Quản lý sản phẩm</p>
                </div>
                <Container>
                    <div style={{ backgroundColor: 'white' }}>
                        <Link to="/admin/add_game">
                            <Button variant="secondary" style={{ float: 'right', width: '5rem' }}> Thêm</Button>
                        </Link>
                        <Table bordered hover style={{ backgroundColor: 'white', fontSize: '12px' }}>
                            <thead>
                                <tr>
                                    <th style={{ fontSize: '13px' }}>Tên sản phẩm</th>
                                    <th style={{ fontSize: '13px' }}>Loại</th>
                                    <th style={{ fontSize: '13px' }}>Nhà phát triển</th>
                                    <th style={{ fontSize: '13px' }}>Nhà phát hành</th>
                                    <th style={{ fontSize: '13px' }}>Ngày xuất bản</th>
                                    <th style={{ fontSize: '13px' }}>Hệ điều hành</th>
                                    <th style={{ fontSize: '13px' }}>Giá mua</th>
                                    <th style={{ fontSize: '13px' }}>Giá bán</th>
                                    <th style={{ fontSize: '13px' }}>Kho</th>
                                    <th style={{ fontSize: '13px' }}>Khuyến mãi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showProducts(products)}
                            </tbody>
                        </Table>
                        <Row style={{ marginTop: '1rem', float: 'right' }}>
                            {/* <Pagination count={10} /> */}
                        </Row>
                    </div>
                </Container>
            </Container>
        )
    }
}

export default GamesManagement;