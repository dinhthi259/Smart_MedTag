import FadeUp from "../FadeUp/FadeUp";
import styles from "./Problem.module.scss";
import problemCard1 from "../../assets/problem-card-1.png";
import problemCard2 from "../../assets/problem-card-2.png";
import problemCard3 from "../../assets/problem-card-3.png";

const items = [
  {
    image: problemCard1,
    alt: "Khí hậu nóng ẩm",
    text: "Khí hậu nóng ẩm → thuốc có nguy cơ suy giảm chất lượng.",
  },
  {
    image: problemCard2,
    alt: "Người dùng quên thời điểm mở thuốc",
    text: "Người dùng quên thời điểm mở thuốc và hạn dùng sau pha/mở",
  },
  {
    image: problemCard3,
    alt: "Thiết bị giám sát điện tử",
    text: "Thiết bị giám sát điện tử chủ yếu phù hợp kho bảo quản, quy mô lô hàng, vận chuyển,...",
  },
];

const Problem = () => (
  <section id="problem" className={styles.problem}>
    <div className="wrap">
      <div className={styles.sectionHead}>
        <FadeUp>
          <div className={styles.headingContent}>
            <div className={styles.eyebrow}>
              <span>VẤN ĐỀ ĐẶT RA</span>
              <span className={styles.arrow} aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>

            <h2>
              NHU CẦU SỬ DỤNG THUỐC AN TOÀN,
              <br />
              HỢP LÝ NGÀY CÀNG TĂNG CAO.
            </h2>
          </div>
        </FadeUp>

        <FadeUp>
          <p className={styles.lead}>
            Không phải mọi thay đổi chất lượng đều có thể nhận ra
            bằng mắt thường. Smart MedTag tập trung vào các rủi ro
            thực tế của quá trình bảo quản và sử dụng sau pha/mở.
          </p>
        </FadeUp>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <FadeUp
            as="article"
            className={styles.card}
            key={index}
          >
            <div className={styles.imageBox}>
              <img
                src={item.image}
                alt={item.alt}
              />
            </div>

            <p>{item.text}</p>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;