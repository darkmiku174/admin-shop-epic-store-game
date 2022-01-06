import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class DetailCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: {
                list_game: []
            }

        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/collections/' + this.props.match.params.id,
            data: null
        }).then(res => {
            this.setState({
                collection: res.data,
            });
        }).catch(err => {
            console.log(err);
        });

    }


    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr className="tr-edit">
                        <td style={{ padding: '5px' }}>{index+1}</td>
                        <td style={{ padding: '0px' }}>{product.name}</td>
                    </tr>
                )
            });
        }
        return result
    }

    render() {
        var { collection } = this.state
        return (
            <div>
                <Container>
                    <div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
                        <p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Chi tiết collection</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Container style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
                            {/*Parent Row 1*/}
                            <Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', border: '1px solid black', padding: '1rem' }}>
                                <h5>Thông tin Collection</h5>
                                <h6>{collection._id}</h6>
                                <Container style={{ marginTop: '3rem' }}>
                                    <Col>
                                        <div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className="product-details-table">
                                                <Table striped bordered style={{ width: '54rem' }}>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>1</td>
                                                            <td style={{ padding: '5px' }}>Name Collection</td>
                                                            <td style={{ padding: '0px' }}>{collection.name}</td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>2</td>
                                                            <td style={{ padding: '5px' }}>List Game</td>
                                                            <Table bordered hover responsive="sm" className="listgame-details">
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>Games name</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    {this.showProducts(collection.list_game)}
                                                                </tbody>
                                                            </Table>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </Col>
                                </Container>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        )
    }
}
export default DetailCollection;



