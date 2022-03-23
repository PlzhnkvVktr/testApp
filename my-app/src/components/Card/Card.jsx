import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import s from "./Card.module.css"

export const Card = (props) => {

    const [modalActive, setModalActive] = useState(true);

    return (
        <>
            <div className={s.card} onClick={() => setModalActive(true)}>
                <img src={props.picture} alt="picture" />
            </div>
            
            <Modal
              id={props.id}
              picture={props.picture}
              active={modalActive}
              setActive={setModalActive}
            />
        </>
    )
}