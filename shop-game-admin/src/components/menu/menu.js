import React, { Component } from 'react';
import './menu.css'
import GamesManagement from '../games_management';
import { Link } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "GAMES"
        }
    }
    setActive = (pros) => {
        this.setState({
            active: pros
        })
    }

    render() {
        var { active } = this.state
        return (
            <>
                <div>
                    <link rel="stylesheet" type="text/css" href="css/menu.css" />
                    <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
                    <nav className="main-menu">
                        <div style={{ height: '56px', backgroundColor: '#343a40', padding: '1rem' }}>
                        </div>
                        <div />
                        <div className="scrollbar" id="style-1">
                            <ul>
                                <li onClick={() => this.setActive("GAMES")}>
                                    <Link to="/">
                                        <i className="fa fa-gamepad fa-lg" />
                                        <span className="nav-text">Games</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("CART")}>
                                    <Link to="/cart_management">
                                        <i className="fa fa-shopping-cart fa-lg" />
                                        <span className="nav-text">Cart</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("COLLECTION")}>
                                    <Link to="/collection_management">
                                        <i className="fa fa-list fa-lg" />
                                        <span className="nav-text">Collection</span>
                                    </Link>
                                </li>

                                <li onClick={() => this.setActive("ORDER")}>
                                    <Link to="/order_management">
                                        <i className="fa fa-th fa-lg" />
                                        <span className="nav-text">ORDER</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("USER")}>
                                    <Link to="/user_management">
                                        <i className="fa fa-user fa-lg" />
                                        <span className="nav-text">USER</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("VOUCHER")}>
                                    <Link to="/vocher_management">
                                        <i className="fa fa-money fa-lg" />
                                        <span className="nav-text">VOUCHER</span>
                                    </Link>
                                </li>
                                <li onClick={() => this.setActive("REVENUE")}>
                                    <Link to="/revenue_report">
                                        <i className="fa fa-bar-chart-o" />
                                        <span className="nav-text">REVENUE</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="mcw">
                    {active === "CART"}
                    {active === "GAMES"}
                    {active === "ORDER"}
                    {active === "COLLECTION"}
                    {active === "USER"}
                    {active === "VOUCHER"}
                    {active === "REVENUE"}
                </div>
            </>
        )
    }
}
export default Menu;