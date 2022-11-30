/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
import { useEffect, useRef, useState } from "react";

// Props Type Check
import PropTypes from "prop-types";

// 3rd Party Libraries
import { Button } from "react-bootstrap";

// Icons
import { FaEdit, FaPlusCircle, FaTimesCircle } from "react-icons/fa";

// Utils
import { todoStatus } from "../utils/todoHelpers";

const ToDo = (props) => {
    const { todoData, addTodo, deleteTodo, completeTodo, clearCompletedTodo } = props;

    const [filteredTodoData, setFilteredTodoData] = useState(todoData);
    const [filter, setFilter] = useState([]);
    const todoContent = useRef();

    useEffect(() => {
        if (filter.length > 0) {
            const filteredTodo = todoData.filter((data) => {
                if ((filter.includes(todoStatus.completed.key) && data.completed) || (filter.includes(todoStatus.pending.key) && !data.completed)) {
                    return true;
                }
                return false;
            });
            setFilteredTodoData(filteredTodo);
        } else {
            setFilteredTodoData(todoData);
        }
    }, [filter, todoData]);

    const updateFilter = (filterKey) => {
        if (filter.includes(filterKey)) {
            const temp = [...filter];
            temp.splice(filter.indexOf(filterKey), 1);
            setFilter(temp);
        } else {
            setFilter((prevFilters) => [...prevFilters, filterKey]);
        }
    };
    const markCompleted = (id) => {
        completeTodo(id);
    };
    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    };
    const handleClearCompleted = () => {
        clearCompletedTodo();
        setFilter([]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ id: new Date().getTime(), todo: todoContent.current.value, completed: false });
        todoContent.current.value = "";
    };

    return (
        <div className="todo-block my-3 d-flex justify-content-center">
            <div className="todo-title text-center p-3">
                <FaEdit className="mb-3" />
                <h2>ToDo App Git Hub</h2>
                <small>
                    Maintain our day-to-day tasks. <br /> It is helpful in planning your daily schedules.
                </small>
            </div>
            <div className="todo d-flex flex-column p-3">
                {todoData.length > 0 && (
                    <div className="todo-control-block mb-1">
                        {Object.keys(todoStatus)?.map((status) => (
                            <Button
                                key={todoStatus[status].key}
                                className="py-0 me-1"
                                variant={`warning ${filter.includes(todoStatus[status].key) && "active"}`}
                                onClick={() => {
                                    updateFilter(todoStatus[status].key);
                                }}>
                                <small>
                                    <b>{todoStatus[status].name}</b>
                                </small>
                            </Button>
                        ))}
                        <Button className="py-0" variant="info" onClick={handleClearCompleted}>
                            <small>
                                <b>Clear Completed</b>
                            </small>
                        </Button>
                    </div>
                )}
                <div className="todo-list flex-grow-1">
                    {todoData.length === 0 ? (
                        <h4 className="text-secondary">No Todo Items!</h4>
                    ) : filteredTodoData.length === 0 ? (
                        <h4 className="text-secondary">No Filtered Todo Items!</h4>
                    ) : (
                        filteredTodoData?.map((todo) => (
                            <div key={todo.id} className="mb-1 d-flex align-items-baseline">
                                <input type="checkbox" checked={todo?.completed} onChange={() => markCompleted(todo.id)} className="mx-1" required />
                                <span className="flex-grow-1">{todo.todo}</span>
                                <Button variant="light" className="mx-1 p-0 border-0" onClick={() => handleDeleteTodo(todo.id)}>
                                    <FaTimesCircle />
                                </Button>
                            </div>
                        ))
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <input ref={todoContent} type="text" placeholder="Add ToDo Here..." className="px-2" required />
                    <button type="submit" className="px-0">
                        <FaPlusCircle className="pb-1" />
                    </button>
                </form>
            </div>
        </div>
    );
};

ToDo.propTypes = {
    todoData: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    clearCompletedTodo: PropTypes.func.isRequired,
};

export default ToDo;
