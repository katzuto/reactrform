import React from 'react';
import styles from "./ButtonPopUpLoginForm.module.css"

const ButtonPopUpLoginForm = ({openModal}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => openModal(true)}>
                Open PopUp
            </button>
        </div>
    );
};

export default ButtonPopUpLoginForm;