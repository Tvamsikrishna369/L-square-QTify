import React from "react";
import styles from "./Card.module.css"
import {Chip, Tooltip} from "@mui/material"

function Card(data){
    const {image, follows, title, songs} = data;
    return(
        // <Tooltip>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/365695850/BT/JU/RO/20619026/lord-krishna-playing-flute-canvas-painting.jpg" alt="album" />
              <div className={styles.banner}>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        // </Tooltip>


    );
}

export default Card;

