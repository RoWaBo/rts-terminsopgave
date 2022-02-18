import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from '../contexts/UserContext';
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import MainLayout from "../components/MainLayout";
import ActivityCardSmall from "../components/ActivityCardSmall";
import { Link } from "react-router-dom";
import List from "../components/List";
import axios from "axios";

const Calendar = () => {
    const navigate = useNavigate();
    const { auth, user } = useContext(UserContext)
    const [instructorTeams, setInstructorTeams] = useState([]);

    useEffect(() => {
        !auth.token && navigate('/logind')
    }, [auth.token, navigate]);

    // Get activities and set instructorTeams if user id match the activities instructorId
    useEffect(() => {
        if (user?.role !== 'instructor') return
        (async () => {
            const { data: activities } = await axios('http://localhost:4000/api/v1/activities')
            const filteredActivities = activities.filter(activity => user.id === activity.instructorId)
            setInstructorTeams([...filteredActivities])
        })()
    }, [user]);

    const activitiesDependingOnRole = () => user.role === 'instructor' ? instructorTeams : user.activities
    const linkDependingOnRole = (activityID) => user.role === 'instructor' ? `/holdoversigt/${activityID}` : `/aktivitetsdetaljer/${activityID}`

    // === STYLE ===
    const listItemStyle = css`
        margin-bottom: 31px;
    `

    return (
        <MainLayout>
            <PageHeader heading="kalender" isFixed />
            <List>
                {user && activitiesDependingOnRole().map((activity) => (
                    <li key={activity.id} css={listItemStyle}>
                        <Link to={linkDependingOnRole(activity.id)}>
                            <ActivityCardSmall activityInfo={activity} />
                        </Link>
                    </li>
                ))}
            </List>
        </MainLayout>
    );
}

export default Calendar;