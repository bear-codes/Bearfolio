import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <br/>
      <p>
        Rawr! I'm BearCodes, a Software Engineer & an Entrepreneur.
        .
      </p>
      <p>
        As a full-stack developer I can work with Python, Java, Javascript, Go and Rust.
      </p>
      <p>
        I writes technical stuff on{" "}
        <a href="https://iznov.up.railway.app/" target="_blank" rel="noreferrer">
          Iznov
        </a>
        , and{" "}
        <a
          href="https://www.quora.com/profile/Bear-Codes"
          target="_blank"
          rel="noreferrer"
        >
          Quora
        </a>
      </p>
    </div>
  );
}
