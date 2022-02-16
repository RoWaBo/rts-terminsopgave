import { css } from "@emotion/react";
import { colors, fontSize } from "../style/style";
/** @jsxImportSource @emotion/react */

const ErrorMessage = ({ message }) => {

    const messageStyle = css`
        font-size: ${fontSize.s};
        color: white;
    `

    return (
        <p css={messageStyle}>{message}</p>
    );
}

export default ErrorMessage;