import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.topbar}>
    <div className="wrap">
      <div className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="Smart MedTag">
          <span className={styles.brandMark} aria-hidden="true" />
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

        <a className={styles.navCta} href="#app">Xem app demo</a>
      </div>
    </div>
  </header>
);

export default Header;
