import React  from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {

        return (
            <div>
				<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
					<a className="navbar-brand" href="#">WebSiteName</a>
					</div>
					<ul className="nav navbar-nav">
					<li className="active"><Link to="/">Home</Link></li>
					</ul>
				</div>
				</nav>
				
				<div className="container">
				{this.props.children}
				</div>
            </div>
        );
    }
};

export default App