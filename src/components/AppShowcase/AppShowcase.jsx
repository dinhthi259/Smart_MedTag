import FadeUp from "../FadeUp/FadeUp";
import PhoneDemo from "../PhoneDemo/PhoneDemo";
import styles from "./AppShowcase.module.scss";

const checks = [
  ["Ghi nhận thời điểm pha/mở", "Kích hoạt khi người dùng quét QR/NFC lúc bắt đầu sử dụng."],
  ["Nhắc hạn dùng & lịch dùng thuốc", "Hạn chế phụ thuộc vào trí nhớ, đặc biệt với nhiều thuốc hoặc người chăm sóc."],
  ["Camera hỗ trợ đọc màu", "Giảm sai số do thị giác trong điều kiện ánh sáng khác nhau; kết quả chỉ mang tính hỗ trợ."],
  ["Khuyến nghị xử lý có kiểm soát", "Không tự kết luận chất lượng thuốc; hướng người dùng tham khảo dược sĩ khi có cảnh báo bất thường."]
];

const AppShowcase = () => (
  <section id="app">
    <div className="wrap">
      <div className={styles.grid}>
        <FadeUp className={styles.appShot}><PhoneDemo compact scanOnly /></FadeUp>
        <FadeUp>
          <span className="eyebrow">Giao diện app hoàn chỉnh</span>
          <h2>Một luồng thao tác được thiết kế cho người dùng thật.</h2>
          <p className="lead">Từ lúc quét nhãn đến khi đọc cảnh báo, xem thông tin thuốc và nhận nhắc lịch — mọi bước đều ưu tiên chữ lớn, tương phản cao và nội dung ngắn gọn.</p>
          <div className={styles.checklist}>
            {checks.map(([title, desc]) => (
              <div className={styles.check} key={title}><i>✓</i><div><b>{title}</b><br /><span>{desc}</span></div></div>
            ))}
          </div>
          <a className={`${styles.btn} btn`} href="#roadmap">Xem quy trình phát triển →</a>
        </FadeUp>
      </div>
    </div>
  </section>
);
export default AppShowcase;
