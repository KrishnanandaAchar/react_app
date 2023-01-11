// 3rd Party Librariers
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodoCheck } from "../store/features/todoSlice";

// Components
import ToDo from "../components/ToDo";

const ToDoPage = () => {
    const dispatch = useDispatch();
    const todoData = useSelector((state) => state.ToDoData);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <ToDo dispatch={dispatch} addTodo={addTodo} todoData={todoData} deleteTodo={deleteTodo} updateTodoCheck={updateTodoCheck} />
                </Col>
            </Row>
        </Container>
    );
};

export default ToDoPage;
