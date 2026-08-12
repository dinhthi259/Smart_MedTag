import FadeUp from "../FadeUp/FadeUp";
import styles from "./Metrics.module.scss";
const metrics = [["2–3","mẫu nhãn nguyên mẫu"],["≤30s","truy cập thông tin cơ bản"],["≥80%","mục tiêu cảnh báo đúng trong mô phỏng"],["≥90%","người tham gia hiểu đúng cảnh báo cơ bản"]];
const Metrics = () => (
  <section>
    <div className="wrap">
      <div className="sectionHead">
        <FadeUp><div><span className="eyebrow">Mục tiêu giai đoạn thí điểm</span><h2>Định lượng tính khả thi trước khi mở rộng.</h2></div></FadeUp>
        <FadeUp><p className="lead">Các chỉ số dưới đây là mục tiêu tham khảo ban đầu cho prototype, không phải tuyên bố hiệu quả lâm sàng hoặc kết luận chất lượng thuốc.</p></FadeUp>
      </div>
      <div className={styles.grid}>{metrics.map(([value,label]) => <FadeUp as="div" className={styles.metric} key={value}><strong>{value}</strong><span>{label}</span></FadeUp>)}</div>
    </div>
  </section>
);
export default Metrics;
