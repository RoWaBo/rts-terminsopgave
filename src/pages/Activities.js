import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import { css } from "@emotion/react";
import { spacing } from "../style/style";
/** @jsxImportSource @emotion/react */

const Activities = () => {

    const [activities, setActivities] = useState();

    useEffect(() => {
        (async () => {
            const { data: activities } = await axios('http://localhost:4000/api/v1/activities')
            setActivities(activities)
        })()
    }, [activities]);

    // === STYLE ===
    const listStyle = css`
        padding: 0 ${spacing.gutter};

        & > * {
            margin-bottom: 31px;
        }
    `

    return (
        <>
            <PageHeader heading="aktiviteter" />
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
        </>
    );
}

export default Activities;