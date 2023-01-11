/* eslint-disable react/forbid-prop-types */

import { useEffect, useRef, useState } from "react";

// Props Type Check
import PropTypes from "prop-types";

// Icons
import { FaEdit, FaPlusCircle, FaTimesCircle, FaSistrix } from "react-icons/fa";

// Utils
import { RenderButton } from "../utils/common";

const ToDo = (props) => {
    const { dispatch, todoData: todoDataObj, addTodo, deleteTodo, updateTodoCheck } = props;
    const todoData = todoDataObj?.value;
    const [searchKey, setSearchKey] = useState("");
    const [filteredTodo, setFilteredTodo] = useState([]);
    const [searchStatus, setSearchStatus] = useState(null);

    const searchKeyRef = useRef();
    const todoContent = useRef();

    useEffect(() => {
        const filteredTodoData = todoData?.filter((allTodo) => (searchKey !== "" ? allTodo.todo.includes(searchKey) : true) && (searchStatus !== null ? searchStatus === allTodo.completed : true));
        setFilteredTodo(filteredTodoData);
    }, [todoData, searchKey, searchStatus]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchKey(searchKeyRef.current.value);
    };
    const clearSearch = () => {
        setSearchKey("");
        searchKeyRef.current.value = "";
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: new Date().getTime().toString(), todo: todoContent.current.value, completed: false }));
        todoContent.current.value = "";
    };

    return (
        <div className="todo-block my-3 d-flex justify-content-center flex-sm-row flex-column">
            <div className="todo-title d-flex flex-column text-center p-3">
                <div className="flex-grow-1 mb-2">
                    <FaEdit className="mb-3" />
                    <h2>ToDo App Git Hub</h2>
                    <small>
                        Maintain our day-to-day tasks. <br /> It is helpful in planning your daily schedules.
                    </small>
                </div>
                <div>
                    <div className="d-flex mb-1">
                        <RenderButton
                            type="button"
                            variant="light"
                            buttonTitle="Completed"
                            onClick={() => setSearchStatus(true)}
                            className={`flex-grow-1 completeBtn px-2 py-0 border-0 ${searchStatus && "active"}`}
                        />
                        <RenderButton
                            type="button"
                            variant="light"
                            buttonTitle="Pending"
                            onClick={() => setSearchStatus(false)}
                            className={`flex-grow-1 pendingBtn px-2 py-0 border-0 ${searchStatus === false && "active"}`}
                        />
                    </div>
                    <div>
                        <RenderButton variant="light" type="button" className="clearBtn w-100 px-2 py-0 border-0" buttonTitle="Clear Filter" onClick={() => setSearchStatus(null)} />
                    </div>
                </div>
            </div>
            <div className="todo d-flex p-3">
                <div className="todo-list mb-2">
                    {todoData.length > 0 ? (
                        <>
                            <form className="mb-2 searchBox" onSubmit={handleSearch}>
                                <input ref={searchKeyRef} type="text" placeholder="Search here" className="px-2" required />
                                <RenderButton variant="light" type="submit" className="p-0" buttonTitle={<FaSistrix className="pb-1" />} />
                                <RenderButton variant="light" type="button" className="p-0" buttonTitle={<FaTimesCircle className="pb-1" />} onClick={clearSearch} />
                            </form>
                            {filteredTodo.length > 0 ? (
                                filteredTodo.map((todo) => (
                                    <div key={todo.id} className="mb-1 d-flex align-items-baseline">
                                        <input type="checkbox" checked={todo.completed} className="mx-1" onChange={() => dispatch(updateTodoCheck(todo.id))} required />
                                        <span className="flex-grow-1">{todo.todo}</span>
                                        <RenderButton variant="light" type="button" className="mx-1 p-0 border-0" buttonTitle={<FaTimesCircle />} onClick={() => dispatch(deleteTodo(todo.id))} />
                                    </div>
                                ))
                            ) : (
                                <h4 className="text-secondary">No Todo Items Found!</h4>
                            )}
                        </>
                    ) : (
                        <h4 className="text-secondary">No Todo Items!</h4>
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <input ref={todoContent} type="text" placeholder="Add ToDo Here..." className="px-2" required />
                    <RenderButton variant="light" type="submit" className="p-0" buttonTitle={<FaPlusCircle className="pb-1" />} />
                </form>
            </div>
        </div>
    );
};

ToDo.propTypes = {
    todoData: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodoCheck: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default ToDo;
