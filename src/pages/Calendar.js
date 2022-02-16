import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from '../contexts/UserContext';
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { spacing } from "../style/style";
import MainLayout from "../components/MainLayout";
import ActivityCardSmall from "../components/ActivityCardSmall";
import { Link } from "react-router-dom";

const Calendar = () => {
    const navigate = useNavigate();
    const { auth, user } = useContext(UserContext)

    useEffect(() => {
        !auth.token && navigate('/logind')
    }, [auth.token, navigate]);

    const linkSwitch = (id) => user.role === 'default' ? `/aktivitetsdetaljer/${id}` : `/holdoversigt/`

    // === STYLE ===
    const listStyle = css`
        padding: 0 ${spacing.gutter};
        /* account for fixed header */
        margin-top: 110px;

        & > * {
            margin-bottom: 31px;
        }
    `

    return (
        <MainLayout>
            <PageHeader heading="kalender" isFixed />
            <ul css={listStyle}>
                {user?.activities.map((activity) => (
                    <li key={activity.id}>
                        <Link to={linkSwitch(activity.id)}>
                            <ActivityCardSmall activityInfo={activity} />
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
}

export default Calendar;