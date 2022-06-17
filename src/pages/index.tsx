import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { trpc } from "@/utils/trpc";
import { getOptionsForVote } from "@/utils/getRandomPokemon";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  // const { data, isLoading } = trpc.useQuery(["hello", { text: "world" }]);
  // if (isLoading) return <p>Loading...</p>;

  // if (data) return <p>{data.greeting}</p>;
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  const [firstID, secondID] = getOptionsForVote();

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
        <div className={styles.grid}>
          <div className={styles.card}>{firstID}</div>
          <div className={styles.card}>{secondID}</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022</p>
      </footer>
    </div>
  );
};

export default Home;
