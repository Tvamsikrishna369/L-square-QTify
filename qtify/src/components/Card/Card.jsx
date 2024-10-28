import React from "react";
import styles from "./Card.module.css"
import {Chip, Tooltip} from "@mui/material"

function Card(data){
    const {image, follows, title, songs} = data;
    return(
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/365695850/BT/JU/RO/20619026/lord-krishna-playing-flute-canvas-painting.jpg" alt="album" />
              <div className={styles.banner}>
                {/* <Chip label="100 Follows" className={styles.chip} size="small" /> */}"100 Follows"
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>New Songs</p>
            </div>
          </div>


    );
}

export default Card;

