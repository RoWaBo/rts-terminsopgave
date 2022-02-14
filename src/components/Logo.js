import { css } from "@emotion/react";
import { colors, fontSize, shadow } from "../style/style";
/** @jsxImportSource @emotion/react */

const Logo = () => {

    const containerStyle = css`
        width: fit-content;
        padding: 0 19px 0 44px;
        border-bottom: 14px solid ${colors.purpleLight};
        box-shadow: ${shadow.three};
    `
    const headingStyle = css`
        text-transform: uppercase;
        font-weight: normal;
    `
    const topTextStyle = css`
        font-family: 'Roboto', sans-serif;
        font-size: ${fontSize.l};
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 4px #431567;
    `
    const bottomTextStyle = css`
        font-family: 'Racing Sans One', cursive;
        font-size: ${fontSize.xl};
        color: ${colors.pinkDark};
        -webkit-text-stroke: 1px #000;
        line-height: 30px;
    `

    return (
        <div css={containerStyle}>
            <h1 css={headingStyle}>
                <span css={topTextStyle}>landrup</span>
                <br />
                <span css={bottomTextStyle}>dans</span>
            </h1>
        </div>
    );
}

export default Logo;