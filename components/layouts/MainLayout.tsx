import { FC, PropsWithChildren } from 'react';
import Head from '../../node_modules/next/head';
import NavBar from '../NavBar';
import styles from './MainLayout.module.css'

export const MainLayout: FC <PropsWithChildren>= ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home de Bephoros</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        { children }
      </main>
    </div>
  );
};
