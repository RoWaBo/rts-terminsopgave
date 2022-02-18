import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { spacing } from "../style/style";
import MainLayout from "../components/MainLayout";
import { motion } from "framer-motion";

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
        /* account for fixed header */
        margin-top: 110px;

        & > * {
            margin-bottom: 31px;
        }
    `

    return (
        <MainLayout>
            <PageHeader heading="aktiviteter" isFixed />
            <ul css={listStyle}>
                {activities?.map((activity) => (
                    <motion.li
                        key={activity.id}
                        initial={{ opacity: 0, x: '-100vw' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: .5,
                            delay: `0.${activity.id}5`,
                            type: 'spring',
                            stiffness: 170,
                            damping: 15
                        }}
                    >
                        <Link to={`/aktivitetsdetaljer/${activity.id}`}>
                            <ActivityCard activityInfo={activity} />
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </MainLayout>
    );
}

export default Activities;