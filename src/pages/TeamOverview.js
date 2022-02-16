import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import PageHeader from "../components/PageHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { colors, fontSize } from "../style/style";
import List from "../components/List";


const TeamOverview = () => {
    const { id } = useParams();

    const [activity, setActivity] = useState();

    // Setting activity if activity is not set
    useEffect(() => {
        if (activity) return
        (async () => {
            const { data: activity } = await axios(`http://localhost:4000/api/v1/activities/${id}`)
            setActivity(activity)
        })()
    }, [activity, id]);

    // === STYLE ===
    const listItemStyle = css`
        color: ${colors.white};
        font-size: ${fontSize.s};
    `

    return (
        <MainLayout>
            <PageHeader heading={activity?.name} isFixed />
            <List>
                {activity?.users.map(user => (
                    <li key={user.id} css={listItemStyle}>
                        {`${user.firstname} ${user.lastname}`}
                    </li>
                ))}
            </List>
        </MainLayout>
    );
}

export default TeamOverview;