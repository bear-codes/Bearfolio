import Head from "next/head";
import { Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          BearCodes
        </title>
        <meta
          name="description"
          content="
        Rawr! its me bearcodes. I love to code all day!"
        />
        <meta name="theme-color" content="#cce6db" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          BearCodes"
        />
        <meta
          name="keywords"
          content="BearCodes,Developer"
        />
        <meta name="og:url" content="https://bearcodes.in" />
        <meta
          name="og:description"
          content="
		 Rawr! its me bearcodes. I love to code all day!"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Card className={styles.card}>
        <Card.Body>
          <Header />
          <About />
          <Contact />
          <Footer />
        </Card.Body>
      </Card>
    </div>
  );
}
