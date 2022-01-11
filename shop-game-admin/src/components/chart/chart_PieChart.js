import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import Order from '../order/order';
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];


class PChart extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         games: [],
    //         orders: [],
    //         sale: []
    //     }
    // }

    // componentDidMount() {
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:5000/api/games',
    //         data: null
    //     }).then(res => {
    //         this.setState({
    //             games: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:5000/api/orders',
    //         data: null
    //     }).then(res => {
    //         this.setState({
    //             orders: res.data
    //         });
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }


    render() {

        return (
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>

        );
    }
}
export default PChart;


