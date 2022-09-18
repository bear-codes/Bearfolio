import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      <img src="/assets/images/profile.png" className={styles.dp} />

      <h1 className={styles.name}>BearCodes</h1>

      <p className={styles.about}>
        Software Engineer & Entrepreneur,
        <br />
        Founder & CEO at{" "}
        <a href="https://iznov.io" target="_blank" rel="noreferrer">
          Iznov
        </a>
      </p>
    </main>
  );
}
