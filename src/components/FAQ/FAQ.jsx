import FadeUp from "../FadeUp/FadeUp";
import styles from "./FAQ.module.scss";
const items = [
  ["Smart MedTag có đo nhiệt độ và độ ẩm liên tục như data logger không?", "Không ở giai đoạn thí điểm. QR/NFC đóng vai trò truy xuất, ghi nhận thao tác và nhắc nhở. Các lớp chỉ thị màu là thành phần cảnh báo trực quan; dự án không định vị hệ thống là thiết bị ghi lịch sử môi trường liên tục."],
  ["Camera có xác nhận thuốc còn tốt hay đã hỏng không?", "Không. Camera chỉ hỗ trợ nhận diện màu nhãn và đưa ra gợi ý mức cảnh báo. Việc kết luận chất lượng thuốc cần quy trình kiểm nghiệm và tư vấn chuyên môn phù hợp."],
  ["Tại sao dùng QR/NFC thụ động?", "Giải pháp thụ động giúp hạn chế pin và cảm biến điện tử phức tạp, từ đó hướng tới chi phí thấp hơn và giảm rác thải điện tử."],
  ["Nhóm thuốc nào phù hợp để thử nghiệm trước?", "Hồ sơ dự án ưu tiên các mô hình như kháng sinh dạng bột pha hỗn dịch, thuốc nhỏ mắt đa liều và thuốc bột/cốm dễ hút ẩm — những nhóm có nhu cầu quản lý sau pha/mở hoặc nhạy với điều kiện bảo quản."]
];
const FAQ = () => (
  <section>
    <div className="wrap">
      <FadeUp className={styles.head}><div><span className="eyebrow">FAQ</span><h2>Những điểm cần hiểu đúng về Smart MedTag.</h2></div></FadeUp>
      <div className={styles.faq}>{items.map(([q,a]) => <FadeUp as="details" key={q}><summary>{q}</summary><p>{a}</p></FadeUp>)}</div>
    </div>
  </section>
);
export default FAQ;
