/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */

// Props Type Check
import PropTypes from "prop-types";

// 3rd Party Librariers
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { addTodo } from "../store/actions";

// Components
import ToDo from "../components/ToDo";

const ToDoPage = (props) => {
    const { todoData, addTodo } = props;

    return (
        <Container fluid>
            <Row>
                <Col>
                    <ToDo todoData={todoData} addTodo={addTodo} />
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    todoData: state.ToDoData,
});
const mapDispatchToProps = {
    addTodo,
};

ToDoPage.propTypes = {
    todoData: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
