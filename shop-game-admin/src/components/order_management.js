import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './order/order';
import axios from "axios";
import { Card } from 'react-bootstrap';
class OrderManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order:{},
            check: 0,
            old: [],
            orders: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/orders',
            data: null
        }).then(res => {
            this.setState({
                orders: res.data,
                old: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    customOrders(check) {
        var {  old } = this.state
        if (check === 0) {
            this.setState({
                orders: old
            })
        }
        else if (check === 1) {
            var custom = []
            old.map((order, index) => {
                if (order.status === "pending") {
                    custom.push(order)
                }
            })
            //orders lúc này chỉ đang giữ 1 item "pending"
            // => gán orders = old mỗi khi xét điều kiện để lấy lại array gốc
            this.setState({
                orders: custom
            })
        }
        else if (check === 2) {
            var custom = []
            old.map((order, index) => {
                if (order.status === "cancelled") {
                    custom.push(order)
                }
            })
            this.setState({
                orders: custom
            })
        }
        else if (check === 3) {
            var custom = []
            old.map((order, index) => {
                if (order.status === "finished") {
                    custom.push(order)
                }
            })
            this.setState({
                orders: custom
            })
        }

    }


    onChange = (e) => {
        var result = 0
        if (e === "tatca") {
            result = 0;
        }
        if (e === "choxacnhan") {
            result = 1;
        }
        if (e === "dahuy") {
            result = 2;
        }
        if (e === "dathanhtoan") {
            result = 3;
        }
        this.customOrders(result)
        this.setState({
            check: result,
        })
    }

    render() {
        var { check, orders } = this.state
        return (
            <>
                <div style={{ backgroundColor: '#3ac9c9',height:'56px' }}>
                    <p style={{ color: 'white', fontSize: '23px'}}>Order</p>
                </div>
                <Card style={{ padding: '1rem' }}>
                    <Card style={{ width: '70rem', margin: 'auto', padding: '1rem' }}>
                        <Tabs defaultActiveKey="tatca" id="uncontrolled-tab-example" className="mb-3" onSelect={this.onChange}>
                            <Tab eventKey="tatca" title="Tất cả">
                                {check === 0 && orders.length > 0 ? <Order key={0} check={check} orders={orders} /> : null}
                            </Tab>
                            <Tab eventKey="choxacnhan" title="Chờ xác nhận" >
                                {check === 1 && orders.length > 0 ? <Order key={1} check={check} orders={orders} /> : null}
                            </Tab>
                            <Tab eventKey="dahuy" title="Đã hủy" >
                                {check === 2 && orders.length > 0 ? <Order key={2} check={check} orders={orders} /> : null}
                            </Tab>
                            <Tab eventKey="dathanhtoan" title="Đã thanh toán" >
                                {check === 3 && orders.length > 0 ? <Order key={3} check={check} orders={orders} /> : null}
                            </Tab>
                        </Tabs>
                    </Card>
                </Card>
            </>
        )
    }
}
export default OrderManagement;



