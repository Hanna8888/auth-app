import React from 'react';
import {NavLink} from 'react-router-dom';
import {Col, Container, Navbar, Row, Button} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";

const Header = (props) => {

    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Authorization
                    </Navbar.Brand>
                    <Navbar.Text>
                        <Row>
                            {isAuthenticated
                                ? <Col>
                                    <div className="text-center mb-1">Hello {user.name}{' '}</div>
                                    <Button variant="primary"
                                            onClick={() => logout({returnTo: window.location.origin})}>Log Out</Button>
                                </Col>
                                : <Col>
                                    <NavLink onClick={loginWithRedirect}>
                                        Log In
                                    </NavLink>
                                </Col>
                            }
                        </Row>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>

    )
}

export default Header;
