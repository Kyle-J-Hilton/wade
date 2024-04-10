import React from "react";
import styles from "../../../../styles/Home.module.css";

const Title = ({ title, subtitle }) => {
    return (  
        <div className={styles.titleDiv}>
            <h1 className={styles.titleHeading} >{title}</h1>
            <p className={styles.subTitle} >{subtitle}</p>
       </div>
    )
}

export default HomePageCard;