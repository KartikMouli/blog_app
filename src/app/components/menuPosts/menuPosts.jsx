import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuposts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>margaya madarchod lalala...</h3>
          <div className={styles.detail}>
            <span className={styles.username}>joe doe</span>
            <span className={styles.date}>10.03.2002</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>coding</span>
          <h3 className={styles.postTitle}>margaya madarchod lalala...</h3>
          <div className={styles.detail}>
            <span className={styles.username}>joe doe</span>
            <span className={styles.date}>10.03.2002</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            culture
          </span>
          <h3 className={styles.postTitle}>margaya madarchod lalala...</h3>
          <div className={styles.detail}>
            <span className={styles.username}>joe doe</span>
            <span className={styles.date}>10.03.2002</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>
          <h3 className={styles.postTitle}>margaya madarchod lalala...</h3>
          <div className={styles.detail}>
            <span className={styles.username}>joe doe</span>
            <span className={styles.date}>10.03.2002</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
