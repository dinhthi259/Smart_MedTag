import FadeUp from "../FadeUp/FadeUp";
import styles from "./RiskLimitations.module.scss";
import risk1 from "../../assets/risk-1.png";
import risk2 from "../../assets/risk-2.png";
import risk3 from "../../assets/risk-3.png";

const risks = [
  {
    icon: risk1,
    alt: "Biểu đồ",
    text: "Nhiệt độ, độ ẩm và vật liệu có thể ảnh hưởng đến ngưỡng chuyển màu.",
  },
  {
    icon: risk2,
    alt: "Ánh sáng và camera",
    text: "Ánh sáng và camera có thể gây sai lệch khi đọc, người dùng có thể nhầm cảnh báo với kết luận thuốc đã hỏng.",
  },
  {
    icon: risk3,
    alt: "Cảnh báo",
    text: "Không có một ngưỡng chung cho mọi thuốc, không thay thế thiết bị ghi nhiệt độ – độ ẩm liên tục.",
  },
];

const RiskLimitations = () => (
  <section className={styles.risk} id="risk-limitations">
    <div className="wrap">

      {/* =========================
          TITLE
      ========================= */}
      <FadeUp>
        <div className={styles.heading}>
          <span className={styles.title}>
            ĐÁNH GIÁ RỦI RO HẠN CHẾ
          </span>

          <span className={styles.arrow} aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </FadeUp>


      {/* =========================
          RISK LIST
      ========================= */}
      <div className={styles.list}>
        {risks.map((risk, index) => (
          <FadeUp
            as="article"
            className={styles.item}
            key={risk.text}
          >
            <div className={styles.iconBox}>
              <img
                src={risk.icon}
                alt={risk.alt}
              />
            </div>

            <p>{risk.text}</p>
          </FadeUp>
        ))}
      </div>

    </div>
  </section>
);

export default RiskLimitations;