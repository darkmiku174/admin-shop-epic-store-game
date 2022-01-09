import { Container } from 'react-bootstrap';
import React, { Component } from 'react';
import LChart from '../chart/chart_LineChart.js'
import BChart from '../chart/chart_BarChart.js'
import PChart from '../chart/chart_PieChart.js'
import { Tab, Tabs, Card, Col, Row } from 'react-bootstrap';

class RevenueReport extends Component {
    render() {
        return (
            <Container>
                <h4>Revenue Report</h4>
                <Row>
                    <Col lg={6}>
                        <Card style={{ width: '34rem' }}>
                            <Tabs defaultActiveKey="year" className="mb-3">
                                <Tab style={{ marginLeft: '1rem' }} eventKey="year" title="Years Sale">
                                    <h6>Year's revenue</h6>
                                    <LChart />
                                </Tab>
                                <Tab style={{ marginLeft: '1rem' }} eventKey="month" title="Months Sale">
                                    <h6>Month's revenue</h6>
                                    <BChart />
                                </Tab>
                                <Tab style={{ marginLeft: '1rem' }} eventKey="day" title="Days Sale ">
                                    <h6>Day's revenue</h6>
                                    <PChart />
                                </Tab>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default RevenueReport;


