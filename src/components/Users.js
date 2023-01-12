import { useEffect, useState } from "react";

// 3rd Party Libraries
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Users = () => {
    const userData = useSelector((state) => state.UserData?.data || []);
    const [searchKey, setSearchKey] = useState("");
    const [filteredUserData, setFilteredUserData] = useState([]);

    useEffect(() => {
        setFilteredUserData(userData);
    }, [userData]);
    useEffect(() => {
        const debounceUserSearch = setTimeout(() => {
            setFilteredUserData(userData?.filter((user) => user.name.toLowerCase().includes(searchKey.toLowerCase())));
        }, 1000);
        return () => clearTimeout(debounceUserSearch);
    }, [searchKey, userData]);

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
