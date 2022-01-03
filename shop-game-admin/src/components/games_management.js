import React, { Component } from 'react';
import { Row, Button, Table, Container, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash, FaAngleDoubleDown } from 'react-icons/fa';
// import { Pagination } from '@material-ui/lab';
import axios from "axios";
class GamesManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
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
                if(key.status){
                    result +=1
                }
            })
        }
        return result;
    }

    showProducts(products, show) {
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
                            {/* <button onClick={() => this.onClick(product)} key={index}><FaTrash /></button> */}
                            <button><FaEdit /></button>
                            {/* <button onClick={() => this.onClick(product)} key={index}><FaTrash /></button> */}
                            <button><FaTrash /></button>
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { products, show } = this.state
        return (
            <Container>
                <div style={{ backgroundColor: '#3ac9c9' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Product</p>
                </div>
                <Container>
                    <div style={{ backgroundColor: 'white' }}>
                        <Button variant="secondary" style={{ float: 'right', width: '5rem' }}> Thêm</Button>
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
                                {this.showProducts(products, show)}
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