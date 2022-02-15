import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { css } from "@emotion/react";
import PrimaryButton from "../components/PrimaryButton";
import { colors, spacing } from "../style/style";
import { UserContext } from "../contexts/UserContext";
/** @jsxImportSource @emotion/react */

const ActivityDetails = () => {
    const { id } = useParams()
    const { user, addUserToActivity, removeUserFromActivity } = useContext(UserContext)
    const [activity, setActivity] = useState();
    const [isSubscribed, setIsSubscribed] = useState();
    const [userActivities, setUserActivities] = useState();
    const [errorMessage, setErrorMessage] = useState();

    // Setting activity if activity is not set
    useEffect(() => {
        if (activity) return
        (async () => {
            const { data: activity } = await axios(`http://localhost:4000/api/v1/activities/${id}`)
            setActivity(activity)
        })()
    }, [activity, id]);

    // Setting userActivities if user is available
    useEffect(() => {
        if (!user) return
        setUserActivities(user.activities)
    }, [user]);

    // Setting isSubscribed if user activity match current activity
    useEffect(() => {
        if (userActivities && activity) {
            userActivities.map(userActivity => userActivity.id === activity.id && setIsSubscribed(true))
        }
    }, [userActivities, activity]);

    const handleClick = () => {
        if (user.age > activity.maxAge || user.age < activity.minAge) {
            setErrorMessage('Din alder matcher ikke aktiviteten')
            return
        }

        !isSubscribed && addUserToActivity(activity.id)
        isSubscribed && removeUserFromActivity(activity.id)

        setIsSubscribed(!isSubscribed)
    }

    // === STYLE ===
    const imgStyle = css`
        width: 100%;
        height: 489px;
        background-image: url(${activity?.asset.url});
        background-size: cover;
        position: relative;
    `
    const btnStyle = css`
        position: absolute;
        bottom: 24px;
        right: 27px;
    `
    const textContainerStyle = css`
        padding: 18px ${spacing.gutter};
        color: ${colors.white};
    `
    const descriptionStyle = css`
        padding-bottom: 10px;
        line-height: 10px;
    `

    return (
        <MainLayout>
            {activity && (
                <article>
                    <div css={imgStyle}>
                        {user && userActivities && (
                            <PrimaryButton
                                text={isSubscribed ? "Forlad" : "Tilmeld"}
                                css={btnStyle}
                                onClick={handleClick}
                            />
                        )}
                    </div>
                    <div css={textContainerStyle}>
                        <h2>{activity.name}</h2>
                        <h3 css={descriptionStyle}>{`${activity.minAge}-${activity.maxAge} år`}</h3>
                        <p>{activity.description}</p>
                        {errorMessage && (
                            <p>{errorMessage}</p>
                        )}
                    </div>
                </article>
            )}
        </MainLayout>
    );
}

export default ActivityDetails;