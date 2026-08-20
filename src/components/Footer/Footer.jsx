import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
const Footer = () => (
  <footer className={styles.footer}>
    <div className="wrap">
      <div className={styles.row}>
        <div className={styles.nav}>
          <a className={styles.brand} href="#top" aria-label="Smart MedTag">
            <img className={styles.brandMark} src={logo} alt="Smart MedTag" />
            <span>
              Smart MedTag
              <small>Pennywise Team</small>
            </span>
          </a>
        </div>
        <div>
          Prototype landing page · Pharmovation 2026 · Thiết kế bám sát bộ nhận
          diện poster Smart MedTag
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
