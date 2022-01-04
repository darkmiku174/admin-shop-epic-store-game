import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button, Table, Container } from 'react-bootstrap';
class UserManagement extends Component {
    render() {
        return (
            <Container>
                <div style={{ backgroundColor: '#3ac9c9' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>User</p>
                </div>
                <Container className="table-container">
                    <Button style={{ float: 'right', marginBottom: '1rem' }}>Thêm +</Button>
                    <Table className="normal-table" bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone number</th>
                                <th>Email</th>
                                <th>Birthday</th>
                                <th>User's name</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td><FaTrash /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
        )
    }

}
export default UserManagement;