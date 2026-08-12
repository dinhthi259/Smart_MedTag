import FadeUp from "../FadeUp/FadeUp";
import styles from "./Science.module.scss";

const refs = [
  ["2025 · Time–temperature indicators", "Yar, M. S., et al. — intelligent indicators for time-temperature monitoring."],
  ["2024 · Chipless RFID humidity sensors", "Mulloni, V., et al. — applications to smart packaging."],
  ["2024 · Cold-chain temperature accuracy", "Ferraz, K., et al. — temperature excursions and probe accuracy."],
  ["2023 · Paper-based humidity sensors", "Korotcenkov, G., et al. — flexible paper-based humidity sensing."],
  ["2022 · Vaccine cold-chain integrity", "Kartoglu, U. & Ames, H. — role of temperature monitoring."]
];

const Science = () => (
  <section className={styles.science} id="science">
    <div className="wrap">
      <div className={styles.grid}>
        <FadeUp>
          <span className={styles.eyebrow}>Nền tảng khoa học</span>
          <h2>Thiết kế thận trọng: cảnh báo nguy cơ, không “chẩn đoán” chất lượng thuốc.</h2>
          <p className="lead">Smart MedTag ưu tiên chỉ thị màu, vật liệu nền giấy và QR/NFC thụ động để giảm chi phí và rác thải điện tử, đồng thời giữ tín hiệu trực quan ngay cả khi điện thoại hết pin hoặc mất mạng.</p>
          <div className={styles.note}><strong>Nguyên tắc an toàn:</strong><br />Camera chỉ hỗ trợ nhận diện màu nhãn. Kết quả là gợi ý mức cảnh báo và không thay thế kiểm nghiệm thuốc hoặc quyết định chuyên môn của dược sĩ.</div>
        </FadeUp>
        <FadeUp className={styles.refList}>
          {refs.map(([title, text]) => <div className={styles.ref} key={title}><b>{title}</b><br />{text}</div>)}
        </FadeUp>
      </div>
    </div>
  </section>
);
export default Science;
