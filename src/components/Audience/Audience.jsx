import FadeUp from "../FadeUp/FadeUp";
import styles from "./Audience.module.scss";

const data = [
  {
    title: "Người dân",
    text: "Giúp người sử dụng và người chăm sóc tại nhà, hỗ trợ quản lý thời gian sử dụng sau mở hoặc pha và nâng cao ý thức sử dụng thuốc an toàn.",
  },
  {
    title: "Dược sĩ và nhà thuốc",
    text: "Hỗ trợ quản lý thuốc tại nhà thông qua nhãn màu, hướng dẫn trên điện thoại, tư vấn rõ hơn về cách bảo quản, hạn dùng và hướng dẫn xử lý.",
  },
  {
    title: "Doanh nghiệp Dược",
    text: "Tạo tiền đề phát triển các loại nhãn thông minh với chi phí thấp, có khả năng tích hợp vào quy trình đóng gói, phân phối và sử dụng thuốc trong thực tế.",
  },
  {
    title: "Nhà nước",
    text: "Góp phần nâng cao nhận thức về bảo quản thuốc đúng cách trong điều kiện khí hậu Việt Nam, thúc đẩy sử dụng thuốc an toàn và có trách nhiệm.",
  },
];

const Audience = () => (
  <section className={styles.audience} id="audience">
    <div className="wrap">

      {/* =========================
          SECTION TITLE
      ========================= */}
      <FadeUp>
        <div className={styles.heading}>
          <span className={styles.title}>
            ĐÓNG GÓP CỦA DỰ ÁN CHO CỘNG ĐỒNG
          </span>

          <span className={styles.arrow} aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </FadeUp>


      {/* =========================
          CARDS
      ========================= */}
      <div className={styles.grid}>
        {data.map((item) => (
          <FadeUp
            as="article"
            className={styles.card}
            key={item.title}
          >
            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </FadeUp>
        ))}
      </div>

    </div>
  </section>
);

export default Audience;