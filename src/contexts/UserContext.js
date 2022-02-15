import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [auth, setAuth] = useState({
        token: sessionStorage.getItem('token'),
        userID: sessionStorage.getItem('userID')
    });

    useEffect(() => {
        (async () => {

            !auth.token && navigate('/logind')

            // set Auth session storage and get user
            if (!user && auth.token) {
                sessionStorage.setItem('token', auth.token)
                sessionStorage.setItem('userID', auth.userID)

                const { data: user } = await axios(`http://localhost:4000/api/v1/users/${auth.userID}`, {
                    headers: { 'Authorization': `Bearer ${auth.token}` }
                })

                setUser(user)
            }
        })()
    }, [auth, user, navigate]);

    return (
        <UserContext.Provider value={{ user, setUser, auth, setAuth }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;