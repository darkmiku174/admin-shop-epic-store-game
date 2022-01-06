import React, { Component } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AddVocherListGame from './vocher_add_listgame';
class AddVocher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vocher: {
                code: "",
                discount: 0,
                type: "",
                count: 0,
                create_date: "",
                time_expired: "",
                list_game: [],
                status: false
            },
            games: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/games',
            data: null
        }).then(res => {
            this.setState({
                games: res.data
            });
        }).catch(err => {
            console.log(err);
        })

    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState(pre => ({
            vocher: {
                ...pre.collection,
                [name]: value
            }
        }))
    }

    onAdd = (collection) => {
        // axios({
        //     method: 'POST',
        //     url: 'http://localhost:5000/api/collections/add',
        //     data: collection
        // }).then(res => {
        //     const { history } = this.props;
        //     if (history) history.push('/collection_management');
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    render() {
        var { vocher, games } = this.state
        const { history } = this.props;
        return (
            (history) ? <div>
                <Container>
                    <div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
                        <p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Thêm bộ sưu tập</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Container style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
                            {/*Parent Row 1*/}
                            <Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', border: '1px solid black', padding: '1rem' }}>
                                <h5>Thêm bộ sưu tập</h5>
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
                                                            <td style={{ padding: '5px' }}>Mã vocher</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="code" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>2</td>
                                                            <td style={{ padding: '5px' }}>Giảm giá</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="discount" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>3</td>
                                                            <td style={{ padding: '5px' }}>Loại vocher</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="type" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>4</td>
                                                            <td style={{ padding: '5px' }}>Ngày tạo</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="create_date" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>5</td>
                                                            <td style={{ padding: '5px' }}>Ngày hết hạn</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="time_expired" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>6</td>
                                                            <td style={{ padding: '5px' }}>Số lượng</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="count" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>7</td>
                                                            <td style={{ padding: '5px' }}>Trạng thái</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="status" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>8</td>
                                                            <td style={{ padding: '5px' }}>Danh sách game áp dụng vocher</td>
                                                            <AddVocherListGame list_game={vocher.list_game} games={games} />
                                                        </tr>
                                                    </tbody>
                                                    <Button onClick={() => this.onAdd(vocher)}>Thêm</Button>
                                                </Table>
                                            </div>
                                        </div>
                                    </Col>
                                </Container>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div> : null
        )
    }
}
export default withRouter(AddVocher);



