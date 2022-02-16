import { css } from "@emotion/react";
import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";
import SplashScreenBackground from "./SplashScreenBackground";
/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion'


const SplashScreen = ({ setHideSplashScreen }) => {

    const handleOnClick = () => {
        sessionStorage.setItem('hideSplashScreen', true)
        setHideSplashScreen(true)
    }

    // === STYLE ===
    const logoPositionStyle = css`
        position: absolute;
        bottom: 36%;
    `
    const btnPositionStyle = css`
        position: absolute;
        bottom: 7%;
        width: 100vw;
        display: grid;
        place-content: center;
    `

    return (
        <SplashScreenBackground>
            <motion.div
                css={logoPositionStyle}
                initial={{ opacity: 0, x: '-35px' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <Logo />
            </motion.div>
            <motion.div
                css={btnPositionStyle}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
            >
                <PrimaryButton text="Kom i gang" onClick={handleOnClick} />
            </motion.div>
        </SplashScreenBackground>
    );
}

export default SplashScreen;