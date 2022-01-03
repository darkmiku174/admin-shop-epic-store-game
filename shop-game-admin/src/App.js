import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamesManagement from './components/games_management';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import AddGame from './components/games_add';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					{/* {this.showContentMenus(routes)} */}
					<AddGame/>
				</div>
			</Router>
		);
	}

	showContentMenus = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						element={"{" + route.main + "}"}
						render={route.render}
					/>
				);

			});
		}
		return <Routes>{result}</Routes>;
	}

}


export default App;
