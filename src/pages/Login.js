import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import PageHeader from "../components/PageHeader";
import PrimaryButton from "../components/PrimaryButton";
import SplashScreenBackground from "../components/SplashScreenBackground";
import { useForm } from "react-hook-form";
import { colors, fontSize } from "../style/style";
import ErrorMessage from "../components/ErrorMessage";
import axios from 'axios';
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginErrorMessage, setloginErrorMessage] = useState();
    const [isloading, setIsLoading] = useState(false);

    const onSubmit = (userLogin) => {
        (async () => {
            try {
                setIsLoading(true)

                const { data: auth } = await axios.post("http://localhost:4000/auth/token", userLogin)
                setAuth({
                    token: auth.token,
                    userID: auth.userId
                });
                navigate("/kalender")
            } catch {
                setIsLoading(false)
                setloginErrorMessage('Brugernavn eller adgangskode er forkert')
            }
        })()
    }

    // === STYLE ===
    const backgroundLayer = css`
        position: absolute;
        top: -12px;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(94, 46, 83, 0.5);
        transform: rotate(60deg);   
        z-index: -1;
    `

    const containerStyle = css`
        width: 100vw;
        height: 100vh;
        display: grid;
        place-content: center;
    `
    const pageHeaderStyle = css`
        padding: 0;
    `
    const inputStyle = css`
        width: 100%;
        height: 50px;
        background-color: ${colors.grey};
        padding: 0 22px;
        border: none;
        margin-bottom: 15px;
        outline-color: ${colors.pinkTrans};

        font-family: 'Ubuntu', sans-serif;
        font-weight: normal;
        font-size: ${fontSize.s};
    `
    const btnStyle = css`
        display: grid;
        margin: 15px auto;
    `
    const formStyle = css`
        width: 332px;
    `

    return (
        <SplashScreenBackground>
            <motion.div
                css={containerStyle}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: .7, duration: .5 } }}
                exit={{ opacity: 0 }}
            >
                <AnimatePresence>
                    {!isloading && (<>
                        <PageHeader heading="log ind" css={pageHeaderStyle} layout />
                        <motion.form onSubmit={handleSubmit(onSubmit)} css={formStyle} layout>
                            <motion.input
                                layout
                                css={inputStyle}
                                type="text"
                                placeholder={'brugernavn'}
                                onFocus={() => setloginErrorMessage(false)}
                                whileFocus={{ scale: 1.02 }}
                                {...register("username", {
                                    required: "Skriv et gyldigt brugernavn"
                                })}
                            />
                            <motion.input
                                layout
                                css={inputStyle}
                                type="password"
                                placeholder="adgangskode"
                                onFocus={() => setloginErrorMessage(false)}
                                whileFocus={{ scale: 1.02 }}
                                {...register("password", {
                                    required: "Skriv en gyldig adgangskode",
                                })}
                            />
                            {(errors.username || errors.password || loginErrorMessage) && (
                                <ErrorMessage icon>
                                    {loginErrorMessage ? loginErrorMessage : 'Skriv venligst brugernavn og adgangskode'}
                                </ErrorMessage>
                            )}
                            <PrimaryButton
                                layout
                                css={btnStyle}
                                text="Log ind"
                                type="submit"
                            />
                        </motion.form>
                    </>)}
                </AnimatePresence>
                {isloading && (
                    <PageHeader heading="Logger ind..."
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2 } }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </motion.div>
            <motion.div
                css={backgroundLayer}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: .9 }}
            />
        </SplashScreenBackground>
    );
}

export default Login;