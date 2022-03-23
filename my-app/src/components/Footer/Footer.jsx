import React from "react";
import s from "./Footer.module.css"
import logo from "../../assets/image/block13.png"

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.section}></div>
            <div className={s.section}></div>
            <div className={`${s.section} ${s.container}`}>
                <div className={s.content}></div>
                <div className={s.content}>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </footer>
    )
}