import FadeUp from "../FadeUp/FadeUp";
import styles from "./ColorScale.module.scss";
import color1 from "../../assets/color-1.png";
import color2 from "../../assets/color-2.png";
import color3 from "../../assets/color-3.png";
import color4 from "../../assets/color-4.png";

const levels = [
  {
    name: "ĐẠT YÊU CẦU",
    image: color1,
    alt: "Đạt yêu cầu",
    level: "l1",
  },
  {
    name: "ỔN ĐỊNH",
    image: color2,
    alt: "Ổn định",
    level: "l2",
  },
  {
    name: "CẦN CHÚ Ý",
    image: color3,
    alt: "Cần chú ý",
    level: "l3",
  },
  {
    name: "NGUY CƠ CAO",
    image: color4,
    alt: "Nguy cơ cao",
    level: "l4",
  },
];

const ColorScale = () => (
  <section className={styles.colorScaleSection}>
    <div className="wrap">
      <FadeUp>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            <span>MÀU SẮC CẢNH BÁO</span>

            <span className={styles.arrow} aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>

          <h2>THIẾT KẾ THANG CẢNH BÁO TRỰC QUAN THEO MỨC ĐỘ MÀU:</h2>
        </div>
      </FadeUp>

      <FadeUp className={styles.scale}>
        {levels.map((item) => (
          <div
            className={`${styles.level} ${styles[item.level]}`}
            key={item.name}
          >
            <strong>{item.name}</strong>

            <div className={styles.iconBox}>
              <img src={item.image} alt={item.alt} />
            </div>
          </div>
        ))}
      </FadeUp>
      <FadeUp>
        <div className={styles.note}>
          <p>
            “Chỉ thị màu biến đổi theo hướng một chiều qua các mức cảnh báo; khi đã chuyển sang mức cao hơn, màu không trở lại mức trước đó.” 
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default ColorScale;
