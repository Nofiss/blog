import React, { Component } from 'react';
import './css/App.css';
import Home from './components/Home';
import Posts from './components/Posts.js';
import Users  from './components/Users.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Blog</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/posts" className="link">Posts</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/users" className="link">Users</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Route path="/" component={Home} exact />
          <Route path="/posts" component={Posts} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
