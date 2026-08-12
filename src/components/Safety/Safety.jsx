import FadeUp from "../FadeUp/FadeUp";
import styles from "./Safety.module.scss";
const Safety = () => (
  <section className={styles.section}>
    <div className="wrap">
      <FadeUp className={styles.safety}>
        <div className={styles.warn}>⚠️</div>
        <div>
          <h3>Thông điệp an toàn phải luôn hiện diện trong sản phẩm.</h3>
          <p>Nếu nhãn chuyển màu bất thường, người dùng nên xem khuyến nghị và tham khảo dược sĩ trước khi tiếp tục sử dụng. Smart MedTag là <b>công cụ cảnh báo sớm và hỗ trợ quản lý thuốc</b>, không thay thế kiểm nghiệm chất lượng hay quyết định chuyên môn.</p>
        </div>
      </FadeUp>
    </div>
  </section>
);
export default Safety;
