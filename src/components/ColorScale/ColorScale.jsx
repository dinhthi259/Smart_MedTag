import FadeUp from "../FadeUp/FadeUp";
import styles from "./ColorScale.module.scss";

const levels = [
  ["Đạt chuẩn", "Xanh lá", "l1"], ["Ổn định", "Xanh dương", "l2"], ["Cần chú ý", "Vàng", "l3"],
  ["Nguy cơ cao", "Đỏ", "l4"], ["Không đạt", "Tím", "l5"]
];

const ColorScale = () => (
  <section>
    <div className="wrap">
      <div className="sectionHead">
        <FadeUp><div><span className="eyebrow">Ngôn ngữ cảnh báo</span><h2>5 mức màu — đọc nhanh, hành động đúng.</h2></div></FadeUp>
        <FadeUp><p className="lead">Thang màu được giữ gần tinh thần poster gốc: trực quan, tương phản cao và có thể hiểu ngay cả khi không mở điện thoại.</p></FadeUp>
      </div>
      <FadeUp className={styles.scale}>
        {levels.map(([name, color, level]) => <div className={`${styles.level} ${styles[level]}`} key={name}><b>{name}</b><small>{color}</small></div>)}
      </FadeUp>
    </div>
  </section>
);
export default ColorScale;
