import { css } from "@emotion/react";
import { borderRadius, colors } from "../style/style";
/** @jsxImportSource @emotion/react */
import { BsExclamationCircle } from 'react-icons/bs';

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
        <div css={containerStyle} {...props}>
            {icon && (
                <BsExclamationCircle css={iconStyle} />
            )}
            <p css={messageStyle}>
                {children}
            </p>
        </div>
    );
}

export default ErrorMessage;