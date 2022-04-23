import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../layouts/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Kenneth Ng</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <Link href="/posts">
        <a>Check out what I'm building</a>
      </Link>
    </Layout>
  );
};

export default Home;
