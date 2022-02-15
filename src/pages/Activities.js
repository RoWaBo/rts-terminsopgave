import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import { css } from "@emotion/react";
import { spacing } from "../style/style";
import MainLayout from "../components/MainLayout";
/** @jsxImportSource @emotion/react */

const Activities = () => {

    const [activities, setActivities] = useState();

    useEffect(() => {
        if (activities) return
        (async () => {
            const { data: activities } = await axios('http://localhost:4000/api/v1/activities')
            setActivities(activities)
        })()
    }, [activities]);

    // === STYLE ===
    const listStyle = css`
        padding: 0 ${spacing.gutter};
        margin-top: 110px;

        & > * {
            margin-bottom: 31px;
        }
    `

    return (
        <MainLayout>
            <PageHeader heading="aktiviteter" isFixed />
            {activities && (
                <ul css={listStyle}>
                    {activities.map(({ id, name, minAge, maxAge, asset }, i) => (
                        <li key={i}>
                            <Link to={`/aktivitetsdetaljer/${id}`}>
                                <ActivityCard
                                    heading={name}
                                    age={{
                                        min: minAge,
                                        max: maxAge
                                    }}
                                    imgUrl={asset.url}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </MainLayout>
    );
}

export default Activities;