import { useEffect, useState } from "react";

// 3rd Party Libraries
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "../store/features/alertSlice";
import { startLoading, stoploading } from "../store/features/loaderSlice";

const Users = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserData?.data || []);
    const isLoading = useSelector((state) => state.UserData?.loading);
    const isError = useSelector((state) => state.UserData?.errorMessage);
    const [searchKey, setSearchKey] = useState("");
    const [filteredUserData, setFilteredUserData] = useState([]);

    useEffect(() => {
        if (isLoading) {
            dispatch(startLoading());
        } else {
            dispatch(stoploading());
        }
    }, [isLoading]);
    useEffect(() => {
        setFilteredUserData(userData);
    }, [userData]);
    useEffect(() => {
        const debounceUserSearch = setTimeout(() => {
            setFilteredUserData(userData?.filter((user) => user.name.toLowerCase().includes(searchKey.toLowerCase())));
        }, 1000);
        return () => clearTimeout(debounceUserSearch);
    }, [searchKey, userData]);
    useEffect(() => {
        if (!isLoading && isError !== "") {
            dispatch(showAlert({ type: "error", msg: "Failed To Fetch" }));
        }
    }, [isError]);

    const handleSearch = (e) => setSearchKey(e.target.value);

    return (
        <div className="user-block mb-3 p-3 rounded">
            <h3 className="text-center mb-3">Users Data with Debounced Search Bar</h3>
            <form className="d-block mb-2">
                <Form.Control type="text" placeholder="debounced search bar: search by title" value={searchKey} onChange={handleSearch} className="w-75 mx-auto" />
            </form>
            <div className="d-flex flex-wrap justify-content-center">
                {filteredUserData?.length > 0 ? (
                    filteredUserData?.map((user) => (
                        <div key={user.id} className="user-box p-2 m-2 shadow rounded">
                            <h5>
                                <b>{user.name}</b>
                            </h5>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user?.company?.name}</p>
                            <p>
                                <small>{user.website}</small>
                            </p>
                        </div>
                    ))
                ) : (
                    <h3>No User Data Found</h3>
                )}
            </div>
        </div>
    );
};

export default Users;
