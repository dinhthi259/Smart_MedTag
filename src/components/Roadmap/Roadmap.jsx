import FadeUp from "../FadeUp/FadeUp";
import styles from "./Roadmap.module.scss";
const steps = [
  ["M","Map","Khảo sát nhu cầu và xác định yêu cầu kỹ thuật."],["E","Establish","Chuẩn bị vật liệu và thiết kế nguyên mẫu."],["D","Develop","Xây dựng QR/NFC và giao diện điện thoại."],
  ["T","Test","Kiểm định trong điều kiện mô phỏng."],["A","Assess","Đánh giá khả năng sử dụng với người dùng."],["G","Guide","Hoàn thiện nguyên mẫu, chi phí và đề xuất triển khai."]
];
const Roadmap = () => (
  <section className={styles.process} id="roadmap">
    <div className="wrap">
      <div className="sectionHead">
        <FadeUp><div><span className="eyebrow">M · E · D · T · A · G</span><h2>Quy trình phát triển theo 6 giai đoạn.</h2></div></FadeUp>
        <FadeUp><p className="lead">Cấu trúc “MEDTAG” được giữ nguyên tinh thần poster nhưng trình bày lại theo hệ thống rõ ràng hơn cho landing page.</p></FadeUp>
      </div>
      <div className={styles.line}>{steps.map(([letter,title,text]) => <FadeUp as="div" className={styles.step} key={letter}><span className={styles.letter}>{letter}</span><b>{title}</b><p>{text}</p></FadeUp>)}</div>
    </div>
  </section>
);
export default Roadmap;
