import FadeUp from "../FadeUp/FadeUp";
import styles from "./Metrics.module.scss";
import pin from "../../assets/metric-pin.png";

const metrics = [
  {
    value: "<30s",
    description:
      "Thời gian tối đa để người dùng truy xuất toàn diện thông tin bảo quản & hạn dùng sau khi quét mã.",
  },
  {
    value: "80%",
    description:
      "Tỷ lệ cảnh báo đúng - Khớp hoàn toàn với dữ liệu Data logger chuẩn trong điều kiện mô phỏng.",
  },
  {
    value: "90%",
    description:
      "Tỷ lệ người dùng hiểu chính xác thông điệp cảnh báo độc lập mà không cần đọc giải thích lại.",
  },
];

const Metrics = () => (
  <section className={styles.metrics} id="metrics">
    <div className="wrap">

      {/* =========================
          SECTION HEADING
      ========================= */}
      <FadeUp>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            <span>KẾT QUẢ DỰ KIẾN Ở GIAI ĐOẠN THÍ ĐIỂM</span>

            <span className={styles.arrow} aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div>
      </FadeUp>


      {/* =========================
          METRIC CARDS
      ========================= */}
      <div className={styles.grid}>
        {metrics.map((metric) => (
          <FadeUp
            as="article"
            className={styles.metric}
            key={metric.value}
          >
            <div className={styles.valueBadge}>
              <strong>{metric.value}</strong>
            </div>

            <p>{metric.description}</p>
          </FadeUp>
        ))}
      </div>


      {/* =========================
          DISCLAIMER
      ========================= */}
      <FadeUp>
        <div className={styles.note}>
          <div className={styles.pin}>
            <img
              src={pin}
              alt="Ghi chú"
            />
          </div>

          <p>
            <strong>Giới hạn kết quả:</strong>{" "}
            Kết quả thí điểm nhằm xác thực tính khả thi của mô hình cảnh báo
            sớm &amp; QR/NFC, tuyệt đối không dùng để kết luận trực tiếp chất
            lượng hay hiệu quả điều trị của thuốc.
          </p>
        </div>
      </FadeUp>

    </div>
  </section>
);

export default Metrics;