import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import styles from './Content.module.css';
import {useAuth0} from "@auth0/auth0-react";

const Profile = (props) => {

    const isAuthenticated = useAuth0();

    if (isAuthenticated) {
        return (
            <Container fluid>
                <Row>
                    <Col className={styles.content}>
                        <h1>CONTENT</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile;
