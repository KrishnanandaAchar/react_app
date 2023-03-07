import React from "react";

// 3rd Party Librariers
import { Container, Row, Col } from "react-bootstrap";

// components
import ShapeGenerator from "../components/shapeGenerator";

const ShapeGeneratorPage = () => (
    <Container fluid>
        <Row>
            <Col>
                <ShapeGenerator />
            </Col>
        </Row>
    </Container>
);

export default ShapeGeneratorPage;
