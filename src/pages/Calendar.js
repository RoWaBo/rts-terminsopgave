import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from '../contexts/UserContext';

const Calendar = () => {
    const navigate = useNavigate();
    const { auth } = useContext(UserContext)

    useEffect(() => {
        !auth.token && navigate('/logind')
    }, [auth.token, navigate]);
    return (
        <>
            <PageHeader heading="kalender" />
        </>
    );
}

export default Calendar;