import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => (
  <header className={styles.topbar}>
    <div className="wrap">
      <div className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="Smart MedTag">
          <img className={styles.brandMark} src={logo} alt="Smart MedTag" />
          <span>
            Smart MedTag
            <small>Pennywise Team</small>
          </span>
        </a>

        <nav className={styles.navlinks} aria-label="Điều hướng">
          <a href="#problem">Vấn đề</a>
          <a href="#solution">Giải pháp</a>
          <a href="#app">Ứng dụng</a>
          <a href="#science">Khoa học</a>
          <a href="#roadmap">Quy trình</a>
        </nav>

        <a className={styles.navCta} href="#hero">Xem app demo</a>
      </div>
    </div>
  </header>
);

export default Header;
