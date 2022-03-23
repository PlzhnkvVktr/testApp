import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/image/block1.png"

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={s.info}></div>
            <div className={s.contacts}></div>
        </header>
    )
}