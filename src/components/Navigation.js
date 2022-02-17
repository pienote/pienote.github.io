import React from 'react';
import {Navbar, Container, Nav, NavLink} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar sticky="top" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"> Hi </Navbar.Brand>
                    <Nav className="me-auto" activeKey={ window.location.pathname}>
                        <NavLink activeClassName="active"> There </NavLink>
                        <NavLink activeClassName="active"> My </NavLink>
                        <NavLink activeClassName="active"> Name </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;
