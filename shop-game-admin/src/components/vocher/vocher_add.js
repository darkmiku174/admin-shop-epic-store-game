import React, { Component } from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
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
        if (name === "discount") {
            value = parseInt(value);
        }
        if (name === "count") {
            value = parseInt(value);
        }
        this.setState(pre => ({
            vocher: {
                ...pre.vocher,
                [name]: value
            }
        }))
    }

    onAdd = (vocher) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/vochers/add',
            data: vocher
        }).then(res => {
            vocher.list_game.map((game) => {
                axios.put('http://localhost:5000/api/games/update/discount/' + game._id,
                    { discount_price: vocher.discount }
                ).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err);
                })
            })
            // const { history } = this.props;
            // if (history) history.push('/vocher_management');
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        var { vocher, games } = this.state
        const { history } = this.props;
        return (
            (history) ? <div>
                <div style={{ height: '56px', backgroundColor: '#3ac9c9', paddingBottom: '1rem' }}>
                    <p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Thêm vocher</p>
                </div>
                <Container style={{ marignTop: '1rem' }}>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
                            {/*Parent Row 1*/}
                            <Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', padding: '1rem' }}>
                                <h5>Thêm voucher</h5>
                                <Container style={{ marginTop: '3rem' }}>
                                    <Col>
                                        <div className="parent-row-1-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div className="product-details-table">
                                                <Table striped bordered style={{ width: '54rem' }}>
                                                    <thead>

                                                    </thead>
                                                    <tbody>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>1</td>
                                                            <td style={{ padding: '5px' }}>Mã vocher</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px', width: '100%', height: '3rem' }} type="text" id="fname" name="code" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>2</td>
                                                            <td style={{ padding: '5px' }}>Giảm giá</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px', width: '100%', height: '3rem' }} type="text" id="fname" name="discount" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>4</td>
                                                            <td style={{ padding: '5px' }}>Ngày tạo</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px', width: '100%', height: '3rem' }} type="text" id="fname" name="create_date" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>5</td>
                                                            <td style={{ padding: '5px' }}>Ngày hết hạn</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px', width: '100%', height: '3rem' }} type="text" id="fname" name="time_expired" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>6</td>
                                                            <td style={{ padding: '5px' }}>Số lượng</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px', width: '100%', height: '3rem' }} type="text" id="fname" name="count" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>7</td>
                                                            <td style={{ padding: '5px' }}>Trạng thái</td>
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px', width: '100%', height: '3rem' }} type="text" id="fname" name="status" onChange={this.onChange} />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>8</td>
                                                            <td style={{ padding: '5px' }}>Danh sách game áp dụng vocher</td>
                                                            <AddVocherListGame list_game={vocher.list_game} games={games} />
                                                        </tr>
                                                    </tbody>

                                                </Table>
                                                <Button variant="secondary" style={{ float: 'right' }} onClick={() => this.onAdd(vocher)}>Thêm</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Container>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </div> : null
        )
    }
}
export default withRouter(AddVocher);



