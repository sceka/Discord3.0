import React from "react";
import styles from "../styles/roomAvatar.module.css";
import Router, { useRouter } from "next/router";
import Image from "next/image";
const RoomAvatar = ({ id, avatar, name }) => {
    const router = useRouter();
    const changeUrl = () => {
        router.push(`?channel=${id}&name=${name}`);
    };
    return (
        <div className={styles.wrapper} onClick={changeUrl}>
            <div className={styles.RoomAvatar}>
                <Image
                    src={avatar}
                    className={styles.roomAvatarImage}
                    height={48}
                    width={48}
                    alt={name}
                />
            </div>
        </div>
    );
};

export default RoomAvatar;
