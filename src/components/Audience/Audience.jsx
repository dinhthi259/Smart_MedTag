import FadeUp from "../FadeUp/FadeUp";
import styles from "./Audience.module.scss";
const data = [
  ["👵","iconPink","Người cao tuổi","Chữ lớn, biểu tượng rõ và cảnh báo trực quan bằng màu sắc."],
  ["👨‍👩‍👧","iconBlue","Người chăm sóc","Nhắc lịch và mốc pha/mở giúp quản lý thuốc cho trẻ em hoặc người thân."],
  ["💊","iconPurple","Người dùng nhiều thuốc","Tập trung lịch dùng, hạn dùng và thông tin bảo quản trên điện thoại."],
  ["⚕️","iconGreen","Dược sĩ nhà thuốc","Hỗ trợ tư vấn thống nhất về bảo quản, hạn sau mở/pha và cách xử lý cảnh báo."]
];
const Audience = () => (
  <section>
    <div className="wrap">
      <div className="sectionHead">
        <FadeUp><div><span className="eyebrow">Đóng góp cộng đồng</span><h2>Thiết kế cho những người cần sự rõ ràng nhất.</h2></div></FadeUp>
        <FadeUp><p className="lead">Trải nghiệm ưu tiên khả năng hiểu nhanh, thao tác ít và phù hợp với bối cảnh quản lý thuốc tại nhà.</p></FadeUp>
      </div>
      <div className={styles.grid}>{data.map(([icon,iconClass,title,text]) => <FadeUp as="article" className={styles.card} key={title}><div className={`${styles.iconbox} ${styles[iconClass]}`}>{icon}</div><h3>{title}</h3><p>{text}</p></FadeUp>)}</div>
    </div>
  </section>
);
export default Audience;
