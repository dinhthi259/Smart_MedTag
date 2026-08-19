import FadeUp from "../FadeUp/FadeUp";
import styles from "./Roadmap.module.scss";
import letterM from "../../assets/letter-m.png";
import letterE from "../../assets/letter-e.png";
import letterD from "../../assets/letter-d.png";
import letterT from "../../assets/letter-t.png";
import letterA from "../../assets/letter-a.png";
import letterG from "../../assets/letter-g.png";
import iconM from "../../assets/icon-m.png";
import iconE from "../../assets/icon-e.png";
import iconD from "../../assets/icon-d.png";
import iconT from "../../assets/icon-t.png";
import iconA from "../../assets/icon-a.png";
import iconG from "../../assets/icon-g.png";

const steps = [
  {
    letter: "M",
    title: "MAP",
    text: (
      <>
        <strong>GĐ1:</strong> Khảo sát nhu cầu & xác định yêu cầu kỹ thuật
      </>
    ),
    letterImg: letterM,
    iconImg: iconM,
  },
  {
    letter: "E",
    title: "ESTABLISH",
    text: (
      <>
        <strong>GĐ2:</strong> Chuẩn bị vật liệu và thiết kế nguyên mẫu
      </>
    ),
    letterImg: letterE,
    iconImg: iconE,
  },
  {
    letter: "D",
    title: "DEVELOP",
    text: (
      <>
        <strong>GĐ3:</strong> Xây dựng hệ thống QR/NFC và giao diện điện thoại
      </>
    ),
    letterImg: letterD,
    iconImg: iconD,
  },
  {
    letter: "T",
    title: "TEST",
    text: (
      <>
        <strong>GĐ4:</strong> Kiểm định trong điều kiện mô phỏng
      </>
    ),
    letterImg: letterT,
    iconImg: iconT,
  },
  {
    letter: "A",
    title: "ASSESS",
    text: (
      <>
        <strong>GĐ5:</strong> Đánh giá khả năng sử dụng với người dùng
      </>
    ),
    letterImg: letterA,
    iconImg: iconA,
  },
  {
    letter: "G",
    title: "GUIDE",
    text: (
      <>
        <strong>GĐ6:</strong> Hoàn thiện nguyên mẫu, ước tính chi phí và đề xuất
        triển khai
      </>
    ),
    letterImg: letterG,
    iconImg: iconG,
  },
];

const Roadmap = () => {
  return (
    <section className={styles.process} id="roadmap">
      <div className="wrap">
        {/* =========================
            TITLE
        ========================== */}
        <FadeUp>
          <div className={styles.heading}>
            <div className={styles.eyebrow}>
              <span>QUY TRÌNH PHÁT TRIỂN THEO 6 GIAI ĐOẠN</span>

              <span className={styles.arrow} aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </div>
        </FadeUp>

        {/* =========================
            ROW 1
        ========================== */}
        <div className={`${styles.steps} ${styles.topRow}`}>
          {steps.slice(0, 3).map((step) => (
            <FadeUp as="div" className={styles.step} key={step.letter}>
              {/* Letter image */}
              <div className={styles.letter}>
                <img src={step.letterImg} alt={step.letter} />
              </div>

              {/* Card */}
              <div className={styles.card}>
                <h3>{step.title}</h3>

                <p>{step.text}</p>

                {/* Illustration */}
                <div className={styles.icon}>
                  <img src={step.iconImg} alt="" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* =========================
            MIDDLE ARROW BAR
        ========================== */}
        <div className={styles.arrowBar}>
          <div className={styles.arrowPattern}>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
          </div>
        </div>

        {/* =========================
            ROW 2
        ========================== */}
        <div className={`${styles.steps} ${styles.bottomRow}`}>
          {steps.slice(3, 6).map((step) => (
            <FadeUp as="div" className={styles.step} key={step.letter}>
              {/* Letter image */}
              <div className={styles.letter}>
                <img src={step.letterImg} alt={step.letter} />
              </div>

              {/* Card */}
              <div className={styles.card}>
                <h3>{step.title}</h3>

                <p>{step.text}</p>

                {/* Illustration */}
                <div className={styles.icon}>
                  <img src={step.iconImg} alt="" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* =========================
            BOTTOM ARROW BAR
        ========================== */}
        <div className={styles.arrowBar}>
          <div className={styles.arrowPattern}>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
            <span>»</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
