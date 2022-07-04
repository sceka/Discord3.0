import React, { useEffect, useState } from "react";
import styles from "../styles/conversationList.module.css";
import Image from "next/image";
import friends from "../statics/frineds.webp";
import nitro from "../statics/nitro.webp";
import avatar1 from "../statics/avatar.webp";
import DmCard from "./DmCard";
const ConversationList = () => {
    const dummyDms = [
        {
            id: 1,
            name: "Marko",
            avatar: avatar1,
        },
        {
            id: 2,
            name: "George",
            avatar: avatar1,
        },
        {
            id: 1,
            name: "Uros",
            avatar: avatar1,
        },
        {
            id: 1,
            name: "Milica",
            avatar: avatar1,
        },
    ];
    const [dms, setDms] = useState(dummyDms);
    return (
        <div className={styles.conversations}>
            <div className={styles.conversationsListTop}>
                <input
                    type="search"
                    placeholder="Find or start a conversation"
                />
            </div>
            <div className={styles.conversationsContainer}>
                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            className={styles.svg}
                            alt="friends"
                            src={friends}
                        />
                    </div>
                    <p>Friends</p>
                </div>
                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            className={styles.svg}
                            alt="nitro"
                            src={nitro}
                        />
                    </div>
                    <p>Nitro</p>
                </div>
                <div className={styles.dmTitle}>Direct Messages</div>
                {dms.map((dm, index) => (
                    <DmCard
                        key={index}
                        name={dm.name}
                        id={dm.id}
                        avatar={dm.avatar}
                        status="online"
                    />
                ))}
            </div>
        </div>
    );
};

export default ConversationList;
