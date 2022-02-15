import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [auth, setAuth] = useState({
        token: sessionStorage.getItem('token'),
        userID: sessionStorage.getItem('userID')
    });

    // set Auth session storage and get user
    useEffect(() => {
        (async () => {
            if (!user && auth.token) {
                sessionStorage.setItem('token', auth.token)
                sessionStorage.setItem('userID', auth.userID)

                const { data: user } = await axios(`http://localhost:4000/api/v1/users/${auth.userID}`, {
                    headers: { 'Authorization': `Bearer ${auth.token}` }
                })

                setUser(user)
            }
        })()
    }, [auth, user]);

    const updateUser = async () => {
        const { data: updatedUser } = await axios(`http://localhost:4000/api/v1/users/${auth.userID}`, {
            headers: { 'Authorization': `Bearer ${auth.token}` }
        })
        setUser({ ...updatedUser })
    }

    const addUserToActivity = async (activityID) => {
        console.log('addUserToActivity');

        await axios.post(`http://localhost:4000/api/v1/users/${user.id}/activities/${activityID}`, {}, {
            headers: { 'Authorization': `Bearer ${auth.token}` }
        })
        updateUser()
    }

    const removeUserFromActivity = async (activityID) => {
        console.log('removeUserFromActivity');

        await axios.delete(`http://localhost:4000/api/v1/users/${user.id}/activities/${activityID}`, {
            headers: { 'Authorization': `Bearer ${auth.token}` }
        })
        updateUser()
    }


    return (
        <UserContext.Provider value={{ user, setUser, auth, setAuth, addUserToActivity, removeUserFromActivity }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;