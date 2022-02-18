import { css } from "@emotion/react";
import { borderRadius, shadow, colors, spacing, fontSize } from "../style/style";
/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";

const PrimaryButton = ({ text, ...props }) => {

    const buttonStyle = css`
        width: 249px;
        padding: ${spacing.m} 0;
        border-radius: ${borderRadius.s};
        background: ${colors.purple};
        box-shadow: ${shadow.one};
        border: none;

        color: ${colors.grey};
        font-size: ${fontSize.s};
    `

    return (
        <motion.button
            css={buttonStyle}
            {...props}
            whileTap={{ scale: 0.95 }}
        >
            {text}
        </motion.button>
    );
}

export default PrimaryButton;