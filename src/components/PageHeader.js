import { css } from "@emotion/react";
import { colors, fontSize, spacing } from "../style/style";
/** @jsxImportSource @emotion/react */

const PageHeader = ({ heading, ...props }) => {

    const headerStyle = css`
        padding: ${spacing.gutter};
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
        <header css={headerStyle} {...props}>
            <h1 css={headingStyle}>{heading}</h1>
        </header>
    );
}

export default PageHeader;