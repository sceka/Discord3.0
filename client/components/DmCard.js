import Image from "next/image";
import React from "react";
import styles from "../styles/dmCard.module.css";

const DmCard = ({ name, status, avatar, id }) => {
    const changeUrl = () => {};
    return (
        <div className={styles.dmCard} onClick={changeUrl}>
            <div className={styles.dmAvatarContainer}>
                <Image
                    src={avatar}
                    height={48}
                    width={48}
                    className={styles.svg}
                    alt="nitro"
                />
                <div className={styles.dmCardStatus} id={status}></div>
            </div>
            <p className={styles.dmCardName}>{name}</p>
        </div>
    );
};

export default DmCard;
