import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './categoryList.module.css';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style} `}
        >
          <Image
            src={'/style.png'}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion} `}
        >
          <Image
            src={'/fashion.png'}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion} `}
        >
          <Image
            src={'/fashion.png'}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style} `}
        >
          <Image
            src={'/style.png'}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>{' '}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style} `}
        >
          <Image
            src={'/style.png'}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>{' '}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style} `}
        >
          <Image
            src={'/style.png'}
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
