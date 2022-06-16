import React from "react";
import { useSelector } from "react-redux";
import AddUser from "./AddUser";
import { addUser } from "../features/userSlice";
import DisplayUser from "./DisplayUsers";
import "./Users.css"

const Users = () => {
    const userlist = useSelector((state) => state.users.value);

    return (
        <div>
            <div className="addUser">
                <AddUser addUser={addUser}  userlist={userlist} />
            </div>

            <div className="displayUsers">
                {userlist.map((user) => <DisplayUser key={user.id} user={user} />)}
            </div>
        </div>
    );
};

export default Users;