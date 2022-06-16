import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import store from "../app/store";
import { storage } from "../features/userSlice";

// const LOCALE_STORAGE_KEY = "user/userdata";

const AddUser = ({addUser, userlist}) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [data, setData] = useState(userlist);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY)) ;
    //     console.log(LOCALE_STORAGE_KEY)
    //     if (storedData) setData(storedData);
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(data));
    //     console.log(LOCALE_STORAGE_KEY)
    // }, [data])

    

    const handleClick = () => {
        dispatch(addUser({
            id: userlist[userlist.length - 1].id + 1,
            name,
            username
        }))

        setName("");
        setUsername("");
    };

    return (
        <>
            <input 
                type="text" 
                placeholder="Name..." 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="UserName..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleClick}>Add User</button>
        </>
    );
};

export default AddUser;