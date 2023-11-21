import react from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/menuPosts";
import MenuCategories from "../menuCategories/menuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>Chosen by Editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
