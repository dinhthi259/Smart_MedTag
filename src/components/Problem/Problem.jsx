import FadeUp from "../FadeUp/FadeUp";
import styles from "./Problem.module.scss";

const items = [
  ["🌡️", "iconPink", "Khí hậu nóng ẩm", "Nhiệt độ và độ ẩm không phù hợp có thể tạo nguy cơ suy giảm độ ổn định của nhiều dạng thuốc, đặc biệt với thuốc dễ hút ẩm hoặc thuốc sau pha/mở."],
  ["🕘", "iconPurple", "Quên mốc pha/mở", "Người dùng có thể quên thời điểm bắt đầu sử dụng, từ đó khó theo dõi chính xác hạn dùng sau pha/mở và lịch dùng thuốc."],
  ["📦", "iconBlue", "Thiết bị điện tử chưa phù hợp từng đơn vị thuốc", "Data logger hoặc cảm biến chủ động thường phù hợp hơn với kho, vận chuyển và quy mô lô hàng; Smart MedTag hướng tới giải pháp đơn giản hơn ở cấp hộp/lọ/vỉ."]
];

const Problem = () => (
  <section id="problem">
    <div className="wrap">
      <div className="sectionHead">
        <FadeUp><div><span className="eyebrow">Vấn đề đặt ra</span><h2>Thuốc dùng tại nhà cần một lớp cảnh báo dễ hiểu hơn.</h2></div></FadeUp>
        <FadeUp><p className="lead">Không phải mọi thay đổi chất lượng đều có thể nhận ra bằng mắt thường. Smart MedTag tập trung vào các rủi ro thực tế của quá trình bảo quản và sử dụng sau pha/mở.</p></FadeUp>
      </div>
      <div className={styles.grid}>
        {items.map(([icon, iconClass, title, text]) => (
          <FadeUp as="article" className={styles.card} key={title}>
            <div className={`${styles.iconbox} ${styles[iconClass]}`}>{icon}</div>
            <h3>{title}</h3><p>{text}</p>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
