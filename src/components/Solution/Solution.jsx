import FadeUp from "../FadeUp/FadeUp";
import styles from "./Solution.module.scss";
import solution1 from "../../assets/solution-1.png";
import solution2 from "../../assets/solution-2.png";
import solution3 from "../../assets/solution-3.png";

const items = [
  {
    num: "01",
    image: solution1,
    alt: "Chỉ thị nhiệt độ bất khả nghịch",
    title: "Chỉ thị nhiệt độ bất khả nghịch theo thời gian",
    bullets: [
      "Đổi màu khi vượt ngưỡng thiết kế trong một khoảng thời gian nhất định.",
      "Duy trì tín hiệu cảnh báo ngay cả khi tác nhân nhiệt đã đi qua.",
    ],
  },
  {
    num: "02",
    image: solution2,
    alt: "Chỉ thị độ ẩm bất khả nghịch",
    title: "Chỉ thị độ ẩm bất khả nghịch theo thời gian",
    bullets: [
      "Ứng dụng giấy/thẻ hoặc nền cellulose tích hợp chất chỉ thị màu.",
      "Cảnh báo khi môi trường bảo quản vượt ngưỡng thiết kế.",
    ],
  },
  {
    num: "03",
    image: solution3,
    alt: "QR NFC và ứng dụng điện thoại",
    title: "QR/NFC thụ động + ứng dụng điện thoại",
    bullets: [
      "Ghi nhận mốc mở/pha và thiết lập nhắc nhở.",
      "Camera hỗ trợ đọc màu, truy xuất thông tin và hiển thị khuyến nghị.",
    ],
  },
];

const Solution = () => (
  <section className={styles.solution} id="solution">
    <div className="wrap">
      {/* Section heading */}
      <FadeUp>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}>
            <span>THIẾT KẾ MÔ HÌNH SONG SONG</span>

            <span className={styles.arrow} aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>

          <h2>
            SONG SONG BA VẤN ĐỀ TRÊN SẢN PHẨM NHẤT ĐỊNH THAY VÌ PHÁT TRIỂN
            <br />
            NGAY MỘT HỆ THỐNG CẢM BIẾN ĐIỆN TỬ PHỨC TẠP CHO MỌI LOẠI THUỐC
          </h2>
        </div>
      </FadeUp>

      {/* Feature cards */}
      <div className={styles.grid}>
        {items.map((item) => (
          <FadeUp
            as="article"
            className={styles.card}
            key={item.num}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>
                <img
                  src={item.image}
                  alt={item.alt}
                />
              </div>

              <span className={styles.num}>{item.num}</span>
            </div>

            <div className={styles.cardContent}>
              <h3>{item.title}</h3>

              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;