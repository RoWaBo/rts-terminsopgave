import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from '../contexts/UserContext';
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import MainLayout from "../components/MainLayout";
import ActivityCardSmall from "../components/ActivityCardSmall";
import { Link } from "react-router-dom";
import List from "../components/List";

const Calendar = () => {
    const navigate = useNavigate();
    const { auth, user } = useContext(UserContext)

    useEffect(() => {
        !auth.token && navigate('/logind')
    }, [auth.token, navigate]);

    const linkSwitch = (id) => user.role === 'default' ? `/aktivitetsdetaljer/${id}` : `/holdoversigt/${id}`

    // === STYLE ===
    const listItemStyle = css`
        margin-bottom: 31px;
    `

    return (
        <MainLayout>
            <PageHeader heading="kalender" isFixed />
            <List>
                {user?.activities.map((activity) => (
                    <li key={activity.id} css={listItemStyle}>
                        <Link to={linkSwitch(activity.id)}>
                            <ActivityCardSmall activityInfo={activity} />
                        </Link>
                    </li>
                ))}
            </List>
        </MainLayout>
    );
}

export default Calendar;