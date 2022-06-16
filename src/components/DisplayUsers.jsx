import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUsername } from "../features/userSlice";

const DisplayUser = ({user}) => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser({ 
            id: user.id
        }));
    };

    const handleUpdate = () => {
        dispatch(updateUsername({
            id: user.id,
            username: newUsername
        }))
        setNewUsername("")
    };

    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>

            <input 
                type="text" 
                placeholder="Update Username" 
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>

            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DisplayUser;