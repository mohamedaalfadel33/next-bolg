import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './menuPosts.module.css';

type MenuPostsProps = {
  withImage: boolean;
};

const MenuPosts = ({ withImage }: MenuPostsProps) => {
  return (
    <div className={styles.items}>
      <Link className={styles.item} href={'/'}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor adipisicing elit. Labore
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href={'/'}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor adipisicing elit. Labore
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href={'/'}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor adipisicing elit. Labore
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href={'/'}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor adipisicing elit. Labore
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
