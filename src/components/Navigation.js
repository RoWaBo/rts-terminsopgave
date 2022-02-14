import { Link } from "react-router-dom";
import { FiHome, FiSearch, FiCalendar } from 'react-icons/fi'
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import { colors, shadow, spacing } from '../style/style'

const Navigation = () => {

    const navItems = [
        { href: '/', icon: <FiHome /> },
        { href: '/soeg', icon: <FiSearch /> },
        { href: '/kalender', icon: <FiCalendar /> },
    ]

    // === STYLE ===
    const navStyle = css`
        position: fixed;
        bottom: 0;
        width: 100vw;
        background: ${colors.grey};
        padding: 15px ${spacing.gutter} 10px;
        box-shadow: ${shadow.two};
    `
    const ulStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const liStyle = css`
        border: 1px solid ${colors.black};
        border-radius: 50%;
    `
    const linkStyle = css`
        width: 41px;
        height: 41px;
        display: grid;
        place-content: center;
           
        & > svg {
            width: 24px;
            height: 24px;    
        }
    `

    return (
        <nav css={navStyle}>
            <ul css={ulStyle}>
                {navItems.map((item, i) => (
                    <li key={i} css={liStyle}>
                        <Link to={item.href} css={linkStyle}>
                            {item.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;