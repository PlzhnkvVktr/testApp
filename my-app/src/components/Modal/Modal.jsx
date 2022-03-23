import React, { useEffect } from "react";
import s from "./Modal.module.css"


export const Modal = ({active, setActive, id, picture}) => {
    
    useEffect(() => {
		setActive(false);
	}, [])

    return (
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => setActive(false)} >
            <div className={s.modal__content} onClick={e => e.stopPropagation()}>
                <div className={s.sevise}>
                    <p>Код элемента: {id}</p>
                    <button onClick={() => setActive(false)}>Закрыть</button>
                </div>
                <div className={s.container__pic}>
                    <img src={picture} alt="picture" />
                </div>
            </div>
        </div>
        // <></>
    )
}