import FadeUp from "../FadeUp/FadeUp";
import styles from "./Solution.module.scss";

const items = [
  ["01", "🌡️", "iconPink", "Chỉ thị nhiệt độ bất khả nghịch theo thời gian", ["Đổi màu khi vượt ngưỡng thiết kế trong một khoảng thời gian nhất định.", "Duy trì tín hiệu cảnh báo ngay cả khi tác nhân nhiệt đã đi qua."]],
  ["02", "💧", "iconGreen", "Chỉ thị độ ẩm bất khả nghịch", ["Ứng dụng giấy/thẻ hoặc nền cellulose tích hợp chất chỉ thị màu.", "Cảnh báo khi môi trường bảo quản vượt ngưỡng thiết kế."]],
  ["03", "⌁", "iconBlue", "QR/NFC thụ động + ứng dụng điện thoại", ["Ghi nhận mốc mở/pha và thiết lập nhắc nhở.", "Camera hỗ trợ đọc màu, truy xuất thông tin và hiển thị khuyến nghị."]]
];

const Solution = () => (
  <section className={styles.solution} id="solution">
    <div className="wrap">
      <div className="sectionHead">
        <FadeUp><div><span className="eyebrow">Thiết kế mô hình song song</span><h2>Ba lớp công nghệ, một trải nghiệm thống nhất.</h2></div></FadeUp>
        <FadeUp><p className="lead">Điểm mới không nằm ở từng công nghệ riêng lẻ, mà ở cách tích hợp chúng thành một nhãn chi phí thấp, trực quan và phù hợp với quản lý thuốc tại nhà.</p></FadeUp>
      </div>
      <div className={styles.grid}>
        {items.map(([num, icon, iconClass, title, bullets]) => (
          <FadeUp as="article" className={`${styles.card} ${styles.featureCard}`} key={num}>
            <span className={styles.num}>{num}</span>
            <div className={`${styles.iconbox} ${styles[iconClass]}`}>{icon}</div>
            <h3>{title}</h3>
            <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
