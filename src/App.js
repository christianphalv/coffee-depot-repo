import React from 'react';
import './App.css';

import Home from './pages/home/Home.js';
import MenuPage from './pages/menuPage/MenuPage.js';

import Navigation from './components/navigation/Navigation.js';
import Footer from './components/footer/Footer.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			route: 'home',
			menu: 'drinks',
		}
		this.appTop = React.createRef();
	}

	scroll(ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	onRouteChange = (route) => {
		this.setState({ route: route });
		this.scroll(this.appTop);
	}

	onMenuChange = (menu) => {
		this.setState({ menu: menu });
	}

	render() {
		return (
			<div className="App">
				<div className="app-top" ref={this.appTop}></div>
				{<Navigation route={this.state.route} onRouteChange={this.onRouteChange} />}
				
				{ this.state.route === 'home' &&
					<Home onRouteChange={this.onRouteChange} onMenuChange={this.onMenuChange} />

				}

				{ this.state.route === 'menu' &&
					<MenuPage onMenuChange={this.onMenuChange} menu={this.state.menu} />

				}

				<Footer route={this.state.route} />
			</div>
		);
	}
}

export default App;
