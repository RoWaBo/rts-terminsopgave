import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { borderRadius, colors, fontSize } from "../style/style";
/** @jsxImportSource @emotion/react */

const ActivityCard = ({ heading, age, imgUrl }) => {

    const sectionStyle = css`
        width: 100%;
        height: 344px;
        border-radius: ${borderRadius.l} ${borderRadius.l} 0 ${borderRadius.l};
        background-image: url(${imgUrl});
        background-size: cover;
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

    return (
        <motion.section css={sectionStyle} whileTap={{ scale: 1.1, y: -20 }}>
            <div css={overlayStyle}>
                <h2 css={headingStyle}>{heading}</h2>
                <h3 css={headingStyle}>{`${age.min}-${age.max} år`}</h3>
            </div>
        </motion.section>
    );
}

export default ActivityCard;