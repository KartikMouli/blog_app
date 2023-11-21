import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Hello Brother</h1>
        </Link>
        <p>nice to meet you</p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
