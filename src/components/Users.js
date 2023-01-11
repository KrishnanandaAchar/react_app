// 3rd Party Libraries
import { useSelector } from "react-redux";

const Users = () => {
    const userData = useSelector((state) => state.UserData);

    return (
        <div className="user-block mb-3 p-3 rounded">
            <h3 className="text-center mb-3">Users Data</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {userData?.data?.length > 0 &&
                    userData?.data?.map((user) => (
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
                    ))}
            </div>
        </div>
    );
};

export default Users;
