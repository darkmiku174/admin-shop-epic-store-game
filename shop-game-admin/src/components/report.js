import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa';
import { Button, Table, Container, Card } from 'react-bootstrap';
class Report extends Component {

    render() {
        return (
            <>
                <div style={{ backgroundColor: '#F4F6F9', height: '56px', padding: '0.5rem', paddingLeft: '5rem' }}>
                    <p style={{ fontSize: '23px', fontFamily: 'Roboto' }}>Quản lý cart</p>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Tên game</th>
                            <th>Số lượng đã bán</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>asdsa</td>
                            <td>asdsa</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}
export default Report;