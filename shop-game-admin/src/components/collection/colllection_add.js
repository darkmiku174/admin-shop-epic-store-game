import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddListGame from './collection_add_listgame';
class AddCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }


    render() {
        return (
            <div>
                <Container>
                    <div style={{ backgroundColor: '#3ac9c9', paddingLeft: '2rem', paddingBottom: '1rem' }}>
                        <p style={{ color: 'white', fontSize: '23px', paddingTop: '1rem' }}>Thêm Collection</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Container style={{ backgroundColor: 'white', width: '60rem', marginLeft: '8%', padding: '1rem' }}>
                            {/*Parent Row 1*/}
                            <Row style={{ margin: '0.2rem', marginTop: '1rem', marginBottom: '1rem', border: '1px solid black', padding: '1rem' }}>
                                <h5>Thêm Collection</h5>
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
                                                            <td style={{ padding: '0px' }}>
                                                                <input style={{ margin: '0px' }} type="text" id="fname" name="firstname" />
                                                            </td>
                                                        </tr>
                                                        <tr className="tr-edit">
                                                            <td style={{ padding: '5px' }}>2</td>
                                                            <td style={{ padding: '5px' }}>List Game</td>
                                                            <AddListGame />
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
export default AddCollection;



