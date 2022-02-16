import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { spacing } from "../style/style";

const List = ({ children }) => {

    // === STYLE ===
    const listStyle = css`
        padding: 0 ${spacing.gutter};
        /* account for fixed header */
        margin-top: 110px;
    `

    return (
        <ul css={listStyle}>
            {children}
        </ul>
    );
}

export default List;