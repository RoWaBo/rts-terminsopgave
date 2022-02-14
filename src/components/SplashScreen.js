import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */


const SplashScreen = () => {

    const containerStyle = css`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: url('./assets/splashscreenbackground.png');
        background-repeat: no-repeat;
        background-size: cover;
    `

    return (
        <div css={containerStyle}>

        </div>
    );
}

export default SplashScreen;