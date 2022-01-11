import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Button, Table, Container,Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
class VoucherManagement extends Component {


    constructor(props) {
        super(props);
        this.state = {
            vochers: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/vochers',
            data: null
        }).then(res => {
            this.setState({
                vochers: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    showVochers(vochers) {
        var result = null;
        if (vochers.length > 0) {
            result = vochers.map((vocher, index) => {
                return (
                    <tr className="tr-edit">
                        <td>{index + 1}</td>
                        <td>{vocher._id}</td>
                        <td>{vocher.code}</td>
                        <td>{vocher.discount + "%"}</td>
                        <td>{vocher.type}</td>
                        <td>{vocher.count}</td>
                        <td>{vocher.create_date}</td>
                        <td>{vocher.time_expired}</td>
                        <td>{vocher.status ? "Còn hạn" : "Hết hạn"}</td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link to={"/admin/vocher/" + vocher._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                        </td>
                    </tr>
                )
            })
        }
        return result
    }

    render() {
        var { vochers } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#3ac9c9',height:'56px' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Voucher</p>
                </div>
                <Card>
                    <Container className="table-container">
                        <Link to="/admin/add_vocher">
                            <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem',marginTop:'1rem' }}>Thêm </Button>
                        </Link>
                        <Table className="normal-table" bordered hover responsive="sm" style={{fontSize:'13px'}}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th>Code</th>
                                    <th>Discount</th>
                                    <th>Type</th>
                                    <th>Count</th>
                                    <th>Create date</th>
                                    <th>Time expired</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showVochers(vochers)}
                            </tbody>
                        </Table>
                    </Container>
                </Card>
            </>
        )
    }
}
export default VoucherManagement;