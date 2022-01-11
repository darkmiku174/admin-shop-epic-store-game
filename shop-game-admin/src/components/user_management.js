import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from "axios";
import DeleteUserNotification from './notification/delete_user_notification';
import { Button, Table, Container, Card } from 'react-bootstrap';
class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            show: false
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/users',
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                users: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    showUsers(users) {
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.phone_number}</td>
                        <td>{user.email}</td>
                        <td>{user.birthday.toString()}</td>
                        <td>{user.user_name}</td>
                        <td>{user.password}</td>
                        <td>{user.status.toString()}</td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <DeleteUserNotification data={user._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }
    render() {
        var { users } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#3ac9c9', height: '56px' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>User</p>
                </div>
                <Card >
                    <Container style={{marginTop:'2rem'}} className="table-container">
                        {/* <Button variant="secondary" style={{ float: 'right', marginBottom: '1rem', marginTop: '1rem' }}>Thêm +</Button> */}
                        <Table style={{ fontSize: '13px' }} className="normal-table" bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Tên </th>
                                    <th>SDT</th>
                                    <th>Email</th>
                                    <th>Sinh nhật</th>
                                    <th>Tên tài khoản</th>
                                    <th>Password</th>
                                    <th>Trạng thái</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showUsers(users)}
                            </tbody>
                        </Table>
                    </Container>
                </Card>
            </>
        )
    }

}
export default UserManagement;