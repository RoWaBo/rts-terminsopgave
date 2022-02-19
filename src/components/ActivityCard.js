import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { borderRadius, colors, fontSize } from "../style/style";
/** @jsxImportSource @emotion/react */

const ActivityCard = (props) => {
    const { name, minAge, maxAge, asset } = props.activityInfo

    // === STYLE ===
    const sectionStyle = css`
        width: 100%;
        height: 344px;
        border-radius: ${borderRadius.l} ${borderRadius.l} 0 ${borderRadius.l};
        background-image: url(${asset.url});
        background-size: cover;
        background-position: center;
        position: relative;
    `
    const overlayStyle = css`
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 25px;
        border-radius: 0 ${borderRadius.l} 0 ${borderRadius.l};
        background: ${colors.pinkTrans};
    `
    const headingStyle = css`
        font-size: ${fontSize.s};
        font-weight: 500;
    `

    // === ANIMATIONS ===
    const sectionMotion = {
        whileTap: {
            scale: 1.2,
            y: '-10vh',
            opacity: 0.5,
            borderRadius: '0px'
        }
    }
    const overlayMotion = {
        whileTap: {
            opacity: 0
        }
    }

    return (
        <motion.section css={sectionStyle} whileTap={'whileTap'} variants={sectionMotion}>
            <motion.div css={overlayStyle} variants={overlayMotion}>
                <h2 css={headingStyle}>{name}</h2>
                <h3 css={headingStyle}>{`${minAge}-${maxAge} år`}</h3>
            </motion.div>
        </motion.section>
    );
}

export default ActivityCard;