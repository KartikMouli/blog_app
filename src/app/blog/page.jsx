import React from "react";
import CardList from "../components/CardList/CardList";
import Menu from "../components/Menu/Menu";
import styles from "./blogpage.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Styles Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
