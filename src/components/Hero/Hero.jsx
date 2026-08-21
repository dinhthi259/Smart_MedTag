import PhoneDemo from "../PhoneDemo/PhoneDemo";
import styles from "./Hero.module.scss";
import tagGrid from "../../assets/tag-card.png";

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.dotPatternTop}>
      {Array.from({ length: 21 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>

    <div className={styles.dotPatternBottom}>
      {Array.from({ length: 21 }).map((_, index) => (
        <span key={index} />
      ))}
    </div> 

    <div className="wrap">
      <div className={styles.heroGrid}>
        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            SMART MEDTAG
          </span>
          <h1>
            NHÃN
            <span>BAO BÌ DƯỢC PHẨM </span>
            <span>THÔNG MINH</span>
          </h1>

          <div className={styles.highlight}>
            SỬ DỤNG THUỐC AN TOÀN TẠI NHÀ
          </div>

          <p className={styles.lead}>
            Smart MedTag kết hợp <b>chỉ thị nhiệt độ – độ ẩm bất khả nghịch</b>{" "}
            với <b>QR/NFC thụ động</b> để cảnh báo nguy cơ bảo quản sai, ghi
            nhận thời điểm pha/mở và hỗ trợ người dùng quản lý thuốc trên điện
            thoại.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#solution">
              KHÁM PHÁ CÁCH HOẠT ĐỘNG
              <span>→</span>
            </a>

            <a className={styles.secondaryButton} href="#app">
              Trải nghiệm giao diện app
            </a>
          </div>

          <p className={styles.micro}>
            <strong>Smart MedTag</strong> được định hướng là “công cụ cảnh báo
            sớm và hỗ trợ ra quyết định”, không thay thế kiểm nghiệm chất lượng
            thuốc hoặc tư vấn chuyên môn của dược sĩ.
          </p>
        </div>

        {/* RIGHT - GIỮ NGUYÊN PHONE DEMO */}
        <div className={styles.phoneStage}>
          <div className={styles.glow} />
          <div className={styles.tagCard} aria-hidden="true">
            <img src={tagGrid} alt="Tag Card" />
          </div>
          <PhoneDemo />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;