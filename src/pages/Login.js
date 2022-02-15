import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import PageHeader from "../components/PageHeader";
import PrimaryButton from "../components/PrimaryButton";
import SplashScreenBackground from "../components/SplashScreenBackground";
import { useForm } from "react-hook-form";
import { colors, fontSize } from "../style/style";
import ErrorMessage from "../components/ErrorMessage";
import axios from 'axios';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (userLogin) => {
        (async () => {
            try {
                const { data: auth } = await axios.post("http://localhost:4000/auth/token", userLogin)
                setAuth({
                    token: auth.token,
                    userID: auth.userId
                });
                setTimeout(navigate("/"), 500)
            } catch (err) {

            }
        })()
    }

    // === STYLE ===
    const backgroundLayer = css`
        position: absolute;
        top: 0;
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
            <div css={containerStyle}>
                <PageHeader heading="log ind" css={pageHeaderStyle} />
                <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
                    {errors.username && (
                        <ErrorMessage message={errors.username.message} />
                    )}
                    <input
                        css={inputStyle}
                        type="text"
                        placeholder={'brugernavn'}
                        {...register("username", {
                            required: "Skriv et gyldigt brugernavn"
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage message={errors.password.message} />
                    )}
                    <input
                        css={inputStyle}
                        type="password"
                        placeholder="adgangskode"
                        {...register("password", {
                            required: "Skriv en gyldig adgangskode",
                        })}
                    />
                    <PrimaryButton
                        css={btnStyle}
                        text="Log ind"
                        type="submit"
                    />
                </form>
            </div>
            <div css={backgroundLayer}></div>
        </SplashScreenBackground>
    );
}

export default Login;