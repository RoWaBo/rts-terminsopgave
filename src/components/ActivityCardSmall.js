import { css } from "@emotion/react";
import { borderRadius, colors, fontSize } from "../style/style";
/** @jsxImportSource @emotion/react */

const ActivityCard = ({ activityInfo }) => {

    const { name, weekday, time } = activityInfo

    const sectionStyle = css`
        width: 100%;
        padding: 19px 34px 26px 34px;
        background: ${colors.grey}; 
        border-radius: ${borderRadius.s};
    `
    const headingStyle = css`
        font-size: ${fontSize.l};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `
    const subHeadingStyle = css`
        font-size: ${fontSize.s};
        font-weight: 500;
        text-transform: capitalize;
        line-height: 21px;
    `

    return (
        <section css={sectionStyle}>
            <h2 css={headingStyle}>{name}</h2>
            <h3 css={subHeadingStyle}>{`${weekday} ${time}`}</h3>
        </section>
    );
}

export default ActivityCard;