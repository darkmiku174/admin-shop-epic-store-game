import React, { Component } from 'react';
import {  Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './order/order';
import { Card } from 'react-bootstrap';
class OrderManagement extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#3ac9c9', }}>
                    <p style={{ color: 'white', fontSize: '23px', height: '56px' }}>Order</p>
                </div>
                <Card style={{ width: '70rem', margin: 'auto', border: '0.5px solid gray', padding: '1rem' }}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="tatca" title="Tất cả">
                            <Order />
                        </Tab>
                        <Tab eventKey="choxacnhan" title="Chờ xác nhận">
                            <Order />
                        </Tab>
                        <Tab eventKey="danggiao" title="Đang giao" >
                            <Order />
                        </Tab>
                        <Tab eventKey="dahuy" title="Đã hủy" >
                            <Order />
                        </Tab>
                    </Tabs>
                </Card>
            </div>
        )
    }
}
export default OrderManagement;



