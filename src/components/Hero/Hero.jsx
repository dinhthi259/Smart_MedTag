import PhoneDemo from "../PhoneDemo/PhoneDemo";
import styles from "./Hero.module.scss";

const Hero = () => (
  <section className={styles.hero}>
    <span className={`${styles.bubble} ${styles.b1}`} />
    <span className={`${styles.bubble} ${styles.b2}`} />
    <span className={`${styles.bubble} ${styles.b3}`} />

    <div className="wrap">
      <div className={styles.heroGrid}>
        <div>
          <span className="eyebrow" style={{ color: "#FFD6E6" }}>
            Smart pharmaceutical packaging
          </span>
          <h1>Nhãn thuốc thông minh.<span>Thuốc an toàn hơn tại nhà.</span></h1>
          <p className={`${styles.lead} lead`}>
            Smart MedTag kết hợp <b>chỉ thị nhiệt độ – độ ẩm bất khả nghịch</b> với <b>QR/NFC thụ động</b> để cảnh báo nguy cơ bảo quản sai, ghi nhận thời điểm pha/mở và hỗ trợ người dùng quản lý thuốc trên điện thoại.
          </p>
          <div className={styles.heroPills}>
            <span className={styles.pill}>🌡️ Theo dõi nguy cơ nhiệt độ</span>
            <span className={styles.pill}>💧 Cảnh báo độ ẩm</span>
            <span className={styles.pill}>⌁ QR / NFC thụ động</span>
            <span className={styles.pill}>📱 Nhắc hạn dùng sau pha/mở</span>
          </div>
          <div className={styles.actions}>
            <a className="btn" href="#solution">Khám phá cách hoạt động →</a>
            <a className={`${styles.btnGhost} btn`} href="#app">Trải nghiệm giao diện app</a>
          </div>
          <p className={styles.micro}>Smart MedTag được định hướng là công cụ cảnh báo sớm và hỗ trợ ra quyết định; không thay thế kiểm nghiệm chất lượng thuốc hoặc tư vấn chuyên môn của dược sĩ.</p>
        </div>

        <div className={styles.phoneStage}>
          <div className={styles.glow} />
          <div className={styles.tagCard} aria-hidden="true">
            <strong>SMART MEDTAG · THANG MÀU</strong>
            <div className={styles.tagGrid}><span /><span /><span /><span /><span /></div>
            <small>Đạt chuẩn · Ổn định · Cần chú ý · Nguy cơ cao · Không đạt</small>
          </div>
          <PhoneDemo />
          <div className={styles.floatChip}><b>≤ 30 giây</b><span>Mục tiêu truy cập thông tin cơ bản sau khi quét mã.</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
