import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { colors, fontSize, spacing } from "../style/style";
/** @jsxImportSource @emotion/react */

const PageHeader = ({ heading, isFixed, ...props }) => {

    const headerStyle = css`
        padding: ${spacing.gutter};
        ${isFixed && (`
            position: fixed;
            top: 0;
            z-index: 1;
            width: 100vw;
            background: ${colors.purple};
        `)}
    `
    const headingStyle = css`
        font-size: ${fontSize.l};
        font-weight: normal;
        color: ${colors.grey};
        text-transform: capitalize;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `

    return (
        <motion.header css={headerStyle} {...props}>
            <h1 css={headingStyle}>{heading}</h1>
        </motion.header>
    );
}

export default PageHeader;