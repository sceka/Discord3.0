import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
export default function Home() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.main}></div>
        </div>
    );
}
