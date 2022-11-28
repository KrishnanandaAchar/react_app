/* eslint-disable react/forbid-prop-types */
import { useRef, useId } from "react";

// Props Type Check
import PropTypes from "prop-types";

// 3rd Party Libraries
import { Button } from "react-bootstrap";

// Icons
import { FaEdit, FaPlusCircle, FaTimesCircle } from "react-icons/fa";

const ToDo = (props) => {
    const { todoData, addTodo } = props;

    const todoContent = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ id: useId(), todo: todoContent.current.value, completed: false });
        todoContent.current.value = "";
    };

    return (
        <div className="todo-block my-3 d-flex justify-content-center">
            <div className="todo-title text-center p-3">
                <FaEdit className="mb-3" />
                <h2>ToDo App</h2>
                <small>
                    Maintain our day-to-day tasks. <br /> It is helpful in planning your daily schedules.
                </small>
            </div>
            <div className="todo p-3">
                <div className="todo-list">
                    {todoData.length > 0 ? (
                        todoData?.map((todo) => (
                            <div key={todo.id} className="mb-1 d-flex align-items-baseline">
                                <input type="checkbox" checked={todo.completed} className="mx-1" required />
                                <span className="flex-grow-1">{todo.todo}</span>
                                <Button variant="light" className="mx-1 p-0 border-0">
                                    <FaTimesCircle />
                                </Button>
                            </div>
                        ))
                    ) : (
                        <h4 className="text-secondary">No Todo Items!</h4>
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
};

export default ToDo;
