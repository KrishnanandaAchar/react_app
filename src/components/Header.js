// 3rd Party Libraries
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-block">
        <Container fluid>
            <Navbar.Brand>React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Item>
                        <NavLink to="/" className="mx-1 text-decoration-none" activeclassname="active">
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/todo" className="mx-1 text-decoration-none" activeclassname="active">
                            ToDo
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/posts" className="mx-1 text-decoration-none" activeclassname="active">
                            Posts
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
