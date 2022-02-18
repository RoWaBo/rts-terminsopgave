import { FiSearch } from 'react-icons/fi'
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { colors, fontSize, spacing } from "../style/style";
import { motion } from 'framer-motion';

const SearchInput = ({ inputValue, inputOnChangeFcn }) => {

    const inputStyle = css`
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-family: 'Ubuntu', sans-serif;
        font-weight: normal;
        font-size: ${fontSize.s};
        color: ${colors.white};
    `
    const searchStyle = css`
        display: flex;
        place-items: center;
        height: 50px;
        background-color: ${colors.greyTrans};
        padding: 0 12px;
        margin: 10px ${spacing.gutter};
    `
    const searchIcon = css`
        width: 24px;
        height: 24px;
        min-width: 24px;
        min-height: 24px;
        color: ${colors.grey};
    `

    // === ANIMATIONS ===
    const containerMotion = {
        initial: {
            opacity: 0,
            width: '12%'
        },
        animate: {
            opacity: 1,
            width: '86%',
            transition: {
                duration: .7
            }
        }
    }

    return (
        <motion.div css={searchStyle}
            initial='initial'
            animate='animate'
            variants={containerMotion}
        >
            <input
                type="text"
                css={inputStyle}
                value={inputValue}
                onChange={(e) => inputOnChangeFcn(e.target.value)}
            />
            <FiSearch css={searchIcon} />
        </motion.div>
    );
}

export default SearchInput;