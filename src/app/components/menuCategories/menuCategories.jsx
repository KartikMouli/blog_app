import React from "react";
import styles from "./menucategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Style
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        food
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        travel
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        coding
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        fashion
      </Link>
    </div>
  );
};

export default MenuCategories;
