import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            quas d
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={'/p1.jpeg'} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mohamed alfadel</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={'/p1.jpeg'} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. porro
              fuga velit expedita itaque qui rerum! Fugit, earum asperiores.
            </p>
            <h2>lorem dasdaskldjalsk adj alkdjalksdhjlakshd</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi iure illum facere ad cumque ex, corporis deserunt modi
              reprehenderit sint porro fuga velit expedita itaque qui rerum!
              Fugit, earum asperiores.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi iure illum facere ad cumque ex, corporis deserunt modi
              reprehenderit sint porro fuga velit expedita itaque qui rerum!
              Fugit, earum asperiores.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
