import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Comments = () => {
  const status = 'auth';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'auth' ? (
        <div className={styles.write}>
          <textarea placeholder="Write comment ..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={'/login'}>Login to write comments</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src={'/p1.jpeg'} alt="" width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed alfadel</span>
              <span className={styles.date}>24.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            voluptatum recusandae officia! Ullam illo perferendis recusandae
            commodi tempora atque explicabo incidunt impedit non velit!
            Voluptatibus voluptatem quam earum dolores! A!
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src={'/p1.jpeg'} alt="" width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed alfadel</span>
              <span className={styles.date}>24.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            voluptatum recusandae officia! Ullam illo perferendis recusandae
            commodi tempora atque explicabo incidunt impedit non velit!
            Voluptatibus voluptatem quam earum dolores! A!
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src={'/p1.jpeg'} alt="" width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed alfadel</span>
              <span className={styles.date}>24.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            voluptatum recusandae officia! Ullam illo perferendis recusandae
            commodi tempora atque explicabo incidunt impedit non velit!
            Voluptatibus voluptatem quam earum dolores! A!
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src={'/p1.jpeg'} alt="" width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mohamed alfadel</span>
              <span className={styles.date}>24.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            voluptatum recusandae officia! Ullam illo perferendis recusandae
            commodi tempora atque explicabo incidunt impedit non velit!
            Voluptatibus voluptatem quam earum dolores! A!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
