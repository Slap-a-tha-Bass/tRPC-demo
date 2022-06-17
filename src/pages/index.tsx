import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "world" }]);
  if (isLoading) return <p>Loading...</p>;

  if (data) return <p>{data.greeting}</p>;
  return (
    <div className={styles.container}>
      <Head>
        <title>tRPC | Demo</title>
        <meta
          name="description"
          content="Demo using tRPC, Prisma, and Planetscale"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://trpc.io">tRPC</a> | Demo
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022</p>
      </footer>
    </div>
  );
};

export default Home;
