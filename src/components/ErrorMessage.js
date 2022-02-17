import { css } from "@emotion/react";
import { borderRadius, colors } from "../style/style";
/** @jsxImportSource @emotion/react */
import { BsExclamationCircle } from 'react-icons/bs';
import { motion } from "framer-motion";

const ErrorMessage = ({ children, icon, ...props }) => {

    const messageStyle = css`
        font-size: 1rem;
        color: ${colors.white};
        ${!icon && 'text-align: center;'};
    `
    const containerStyle = css`
        background: rgb(239 68 68 / 55%);
        border-radius: ${borderRadius.s};
        padding: .5rem 1rem;
        ${icon && (`
            display: flex;
            place-items: center;      
        `)}
    `
    const iconStyle = css`
        width: 30px;
        height: 30px;
        margin-right: 1rem;
        color: white;
    `

    return (
        <motion.div
            css={containerStyle}
            {...props}
            key={'errorMessage'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: .5 }}
        >
            {icon && (
                <BsExclamationCircle css={iconStyle} />
            )}
            <p css={messageStyle}>
                {children}
            </p>
        </motion.div>
    );
}

export default ErrorMessage;