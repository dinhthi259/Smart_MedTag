import styles from "./Footer.module.scss";
const Footer = () => (
  <footer className={styles.footer}>
    <div className="wrap">
      <div className={styles.row}>
        <div className={styles.brand}><span className={styles.brandMark} /><span>Smart MedTag<small>Pennywise Team</small></span></div>
        <div>Prototype landing page · Pharmovation 2026 · Thiết kế bám sát bộ nhận diện poster Smart MedTag</div>
      </div>
    </div>
  </footer>
);
export default Footer;
