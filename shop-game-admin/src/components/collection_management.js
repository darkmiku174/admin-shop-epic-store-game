import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Table, Container, Card } from 'react-bootstrap';
import {  FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeleteCollectiontNotification from './notification/delete_collection_notification';
class CollectionManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/collections',
            data: null
        }).then(res => {
            console.log(res);
            this.setState({
                collections: res.data
            });
        }).catch(err => {
            console.log(err);
        })

    }

    showCollections(collections) {
        var result = null;
        if (collections.length > 0) {
            result = collections.map((collection, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{collection._id}</td>
                        <td>{collection.name}</td>
                        <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link to={"/admin/collection/" + collection._id}>
                                <Button style={{ backgroundColor: 'black', border: '0px solid black' }}><FaEdit /></Button>
                            </Link>
                            <DeleteCollectiontNotification data={collection._id} />
                        </td>
                    </tr>
                )
            });
        }
        return result;
    }

    render() {
        var { collections } = this.state
        return (
            <Container>
                <div style={{ backgroundColor: '#3ac9c9' }}>
                    <p style={{ color: 'white', fontSize: '23px' }}>Collection</p>
                </div>
                <Card className="table-container">
                    <Link to="/admin/add_collection">
                    <Button variant="secondary" style={{ float: 'right', width: '5rem', marginBottom: '1rem' }}>Thêm +</Button>
                    </Link>
                    <Table className="normal-table" bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCollections(collections)}
                        </tbody>
                    </Table>
                </Card>
            </Container>
        )
    }

}
export default CollectionManagement;