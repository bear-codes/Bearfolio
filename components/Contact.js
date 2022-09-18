import { Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
	  <br/>
      <Row className={styles.boxes}>
        <Col lg={4} md={6} sm={12}>
          <a
            href="https://discordapp.com/users/1019799488170311701"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-discord"></i>
            bearcodes#3178
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="https://www.instagram.com/_bearcodes_/"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-instagram"></i>
            _bearcodes_
          </a>
        </Col>
      </Row>
    </div>
  );
}
