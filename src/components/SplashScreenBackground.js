import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion'

const SplashScreenBackground = ({ children }) => {

    const containerStyle = css`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-image: url('./assets/splashscreenbackground.png');
        background-repeat: no-repeat;
        background-size: cover;
    `

    return (
        <motion.div
            css={containerStyle}
            key='splashScreen'
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            exit={{
                y: '100vh',
                transition: { duration: .5 }
            }}
        >
            {children}
        </motion.div>
    );
}

export default SplashScreenBackground;