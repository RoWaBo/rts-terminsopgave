import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import PageHeader from "../components/PageHeader";
import PrimaryButton from "../components/PrimaryButton";
import SplashScreenBackground from "../components/SplashScreenBackground";
import { useForm } from "react-hook-form";
import { spacing } from "../style/style";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

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
        padding: 0 12vw;
    `
    const pageHeaderStyle = css`
        padding: 0;
    `

    return (
        <SplashScreenBackground>
            <div css={containerStyle}>
                <PageHeader heading="log ind" css={pageHeaderStyle} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="brugernavn"
                        {...register("username", {
                            required: "Skriv et gyldigt brugernavn"
                        })}
                    />
                    <input
                        type="password"
                        placeholder="adgangskode"
                        {...register("password", {
                            required: "Skriv en gyldig adgangskode",
                        })}
                    />
                    {errors.username && errors.username.message}
                    {errors.password && errors.password.message}
                    <PrimaryButton text="Log ind" type="submit" />
                </form>
            </div>
            <div css={backgroundLayer}></div>
        </SplashScreenBackground>
    );
}

export default Login;