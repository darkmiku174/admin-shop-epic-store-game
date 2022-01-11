import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Button, Table, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import AddKey from './key/key_add';
import { Link } from 'react-router-dom'
class KeyManagement extends Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         vochers: []
    //     }
    // }

    // componentDidMount() {
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:5000/api/vochers',
    //         data: null
    //     }).then(res => {
    //         this.setState({
    //             vochers: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    // showVochers(vochers) {
    //     var result = null;
    //     if (vochers.length > 0) {
    //         result = vochers.map((vocher, index) => {
    //             return (
    //                 <tr className="tr-edit">
    //                     <td>{index + 1}</td>
    //                     <td>{vocher._id}</td>
    //                     <td>{vocher.code}</td>
    //                     <td>{vocher.discount + "%"}</td>
    //                     <td>{vocher.type}</td>
    //                     <td>{vocher.count}</td>
    //                     <td>{vocher.create_date}</td>
    //                     <td>{vocher.time_expired}</td>
    //                     <td>{vocher.status ? "Còn hạn" : "Hết hạn"}</td>
    //                     <td style={{ display: 'flex', justifyContent: 'space-around' }}>
    //                         <Link to={"/admin/vocher/" + vocher._id}>
    //                             <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
    //                         </Link>
    //                     </td>
    //                 </tr>
    //             )
    //         })
    //     }
    //     return result
    // }

    render() {
        // var { vochers } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#3ac9c9', height: '56px' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Key</p>
                </div>
                <Card>
                    <Container className="table-container">
                        <div>
                            <AddKey />
                        </div>
                       
                        <Table className="normal-table" bordered hover responsive="sm" style={{ fontSize: '13px' }}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Mã Key</th>
                                    <th>Tình trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>6193b1e98ee567321631b9a1</th>
                                    <th>KW0219</th>
                                    <th>Còn hiệu lực</th>
                                </tr>
                                <tr>
                                    <th>6193b1e98ee567321631b9a2</th>
                                    <th>KA0219</th>
                                    <th>Còn hiệu lực</th>
                                </tr>
                                <tr>
                                    <th>6193b1e98ee567321631b9a3</th>
                                    <th>KF0259</th>
                                    <th>Hết hiệu lực</th>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Card>
            </>
        )
    }
}
export default KeyManagement;