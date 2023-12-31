import styles from "./comments.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment ..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={40}
              width={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John doe</span>
              <span className={styles.date}>01.01.2020</span>
            </div>
          </div>
          <p className={styles.desc}> hi sudeep</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
