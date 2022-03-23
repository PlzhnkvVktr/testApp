import React, { useState } from "react";
import { Card } from "../Card/Card";
import s from "./Main.module.css";
import {cards} from "../../mocks/mocks";
import pic from "../../assets/image/block7.png"

export const Main = () => {

    return (
        <main className={s.main}>
            <div className={s.selection}>
                <div className={`${s.content} ${s.info}`}></div>
                <div className={`${s.content} ${s.pic}`}>
                    <img src={pic} alt="pic" />
                </div>
            </div>
            <div className={s.main__container}>
                <div className={s.container}></div>
                    <div className={s.cards}>
                        {cards.map((card, idx) => (
                            <Card
                                key={idx} 
                                id={card.id} 
                                picture={card.img} 
                            />
                        ))}
                </div>
                <div className={s.container1}>
                    <div className={s.container2}></div>
                    <div className={s.container2}></div>
                </div>
            </div>
        </main>
    )
}