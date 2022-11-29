/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */

// Props Type Check
import PropTypes from "prop-types";

// 3rd Party Librariers
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { addTodo, deleteTodo, completeTodo, clearCompletedTodo } from "../store/actions";

// Components
import ToDo from "../components/ToDo";

const ToDoPage = (props) => {
    const { todoData, addTodo, deleteTodo, completeTodo, clearCompletedTodo } = props;

    return (
        <Container fluid>
            <Row>
                <Col>
                    <ToDo todoData={todoData} addTodo={addTodo} deleteTodo={deleteTodo} completeTodo={completeTodo} clearCompletedTodo={clearCompletedTodo} />
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
    deleteTodo,
    completeTodo,
    clearCompletedTodo,
};

ToDoPage.propTypes = {
    todoData: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    clearCompletedTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
