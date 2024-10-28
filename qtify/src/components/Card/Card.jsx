// import React from "react";
// import styles from "./Card.module.css"
// import {Chip, Tooltip} from "@mui/material"

// function Card(data){
//     const {image, follows, title, songs} = data;
//     return(
//         // <Tooltip>
//           <div className={styles.wrapper}>
//             <div className={styles.card}>
//                 <img src={image} alt="album" />
//             {/* <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/365695850/BT/JU/RO/20619026/lord-krishna-playing-flute-canvas-painting.jpg" alt="album" /> */}
//               <div className={styles.banner}>
//               </div>
//             </div>
//             <div className={styles.titleWrapper}>
//               <p>{title}</p>
//             </div>
//           </div>
//         // </Tooltip>


//     );
// }

// export default Card;


import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        // <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
                {/* <Chip
                  label={`${follows} Follows`}
                  className={styles.chip}
                  size="small"
                /> */}
                {/* <Chip/> */}
                <div className={styles.Chip}>
                    {`${follows} Follows`}
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        // </Tooltip>
      );
    }

    case "song": {
      const { image, likes, title, songs } = data;
      return (
        // no tooltip required here according to figma provided
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" loading="lazy" />
            <div className={styles.banner}>
              <div className={styles.pill}>
                <p>{likes} Likes</p>
              </div>
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return <></>;
  }
}

export default Card;