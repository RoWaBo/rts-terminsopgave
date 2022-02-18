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
    const [activities, setActivities] = useState();
    const [instructorTeams, setInstructorTeams] = useState();

    useEffect(() => {
        !auth.token && navigate('/logind')
    }, [auth.token, navigate]);

    // Set activities if user role is instrutor
    useEffect(() => {
        if (activities || user?.role !== 'instructor') return
        (async () => {
            const { data: activities } = await axios('http://localhost:4000/api/v1/activities')
            setActivities(activities)
        })()
    }, [activities, user]);

    // Set instructorTeams if user id match the activities instructorId
    useEffect(() => {
        if (!activities) return
        const filteredActivities = activities.filter(activity => user.id === activity.instructorId)
        setInstructorTeams([...filteredActivities])
    }, [activities, user]);

    // === STYLE ===
    const listItemStyle = css`
        margin-bottom: 31px;
    `

    return (
        <MainLayout>
            <PageHeader heading="kalender" isFixed />
            <List>
                {user?.role === 'instructor' && instructorTeams?.map((team) => (
                    <li key={team.id} css={listItemStyle}>
                        <Link to={`/holdoversigt/${team.id}`}>
                            <ActivityCardSmall activityInfo={team} />
                        </Link>
                    </li>
                ))}
                {user?.role === 'default' && user?.activities.map((activity) => (
                    <li key={activity.id} css={listItemStyle}>
                        <Link to={`/aktivitetsdetaljer/${activity.id}`}>
                            <ActivityCardSmall activityInfo={activity} />
                        </Link>
                    </li>
                ))}
            </List>
        </MainLayout>
    );
}

export default Calendar;