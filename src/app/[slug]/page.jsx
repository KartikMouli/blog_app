import React from "react";
import styles from "./singlepage.module.css";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import Comments from "../components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>BlackPink</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>john doe</span>
              <span className={styles.date}>01.01.01</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>It will be Alright</p>
            <h2>Let her go</h2>
            <p>It will be Alright</p>
            <p>It will be Alright</p>
          </div>
          <div className={styles.comments}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
