import React, { useState } from "react";
import styles from "../styles/sidebar.module.css";
import { useRouter } from "next/router";
import avatar1 from "../statics/avatar.webp";
import RoomAvatar from "./RoomAvatar";
const Sidebar = () => {
    const router = useRouter();
    const dummyChannels = [
        {
            roomId: 1,
            name: "general",
            avatar: avatar1,
        },
        {
            roomId: 2,
            name: "NFTs",
            avatar: avatar1,
        },
        {
            roomId: 3,
            name: "Crypto",
            avatar: avatar1,
        },
        {
            roomId: 4,
            name: "buildspace",
            avatar: avatar1,
        },
    ];

    const [channels, setChannels] = useState(dummyChannels);
    return (
        <div className={styles.wrapper}>
            {channels.map((channel, index) => (
                <RoomAvatar
                    key={index}
                    id={channel.roomId}
                    avatar={channel.avatar}
                    name={channel.name}
                />
            ))}
        </div>
    );
};

export default Sidebar;
