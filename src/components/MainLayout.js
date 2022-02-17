import { css } from "@emotion/react";
import { colors } from "../style/style";
/** @jsxImportSource @emotion/react */

const MainLayout = ({ children }) => {

    const mainStyle = css`
        width: 100vw;
        height: 100%;
        min-height: 100vh;
        background-color: ${colors.purple};
        padding-bottom: 5rem;
        overflow-x: hidden;
    `

    return (
        <main css={mainStyle}>
            {children}
        </main>
    );
}

export default MainLayout;