import { css } from "@emotion/react";
import { motion } from "framer-motion";
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
    // === ANIMATIONS ===
    const sectionMotion = {
        initial: {
            scale: .9,
            y: 20,
            opacity: 0,
            borderRadius: '50%'
        },
        animate: {
            scale: 1,
            y: 0,
            opacity: 1,
            borderRadius: '10px',
            transition: { duration: .6 }
        }
    }

    return (
        <motion.section css={sectionStyle}
            whileTap={{ scale: 0.90 }}
            variants={sectionMotion}
            initial='initial'
            animate='animate'
        >
            <h2 css={headingStyle}>{name}</h2>
            <h3 css={subHeadingStyle}>{`${weekday} ${time}`}</h3>
        </motion.section>
    );
}

export default ActivityCard;