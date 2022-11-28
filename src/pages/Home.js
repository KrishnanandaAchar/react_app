// 3rd Party Librariers
import { Container, Row, Col } from "react-bootstrap";

// Components
import Counter from "../components/Counter";
import WorldClock from "../components/WorldClock";

const Home = () => (
    <Container fluid>
        <Row>
            <Col>
                <WorldClock />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4}>
                <Counter />
            </Col>
            <Col>Hello</Col>
            <Col>World!</Col>
        </Row>
    </Container>
);

export default Home;
