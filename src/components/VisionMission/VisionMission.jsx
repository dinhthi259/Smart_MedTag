import FadeUp from "../FadeUp/FadeUp";
import styles from "./VisionMission.module.scss";
import vision1 from "../../assets/vision-1.png";
import vision2 from "../../assets/vision-2.png";
import vision3 from "../../assets/vision-3.png";

const VisionMission = () => {
  return (
    <section className={styles.visionMission} id="vision-mission">
      <div className="wrap">

        {/* =========================
            TẦM NHÌN
        ========================= */}
        <FadeUp>
          <div className={styles.block}>
            <div className={styles.heading}>
              <h2>TẦM NHÌN</h2>

              <div className={styles.titleIcon}>
                <img
                  src={vision1}
                  alt="Tầm nhìn"
                />
              </div>
            </div>

            <p>
              Phát triển Smart MedTag trở thành giải pháp bao bì thông minh hỗ
              trợ giám sát điều kiện bảo quản và sử dụng thuốc, góp phần nâng
              cao tính an toàn, khả năng truy xuất thông tin và quản lý thuốc
              trong chuỗi cung ứng và tại hộ gia đình.
            </p>
          </div>
        </FadeUp>


        {/* =========================
            SỨ MỆNH
        ========================= */}
        <FadeUp>
          <div className={styles.block}>
            <div className={styles.heading}>
              <h2>SỨ MỆNH</h2>

              <div className={styles.titleIcon}>
                <img
                  src={vision2}
                  alt="Sứ mệnh"
                />
              </div>
            </div>

            <p>
              Nghiên cứu và phát triển giải pháp nhãn bao bì có khả năng cảnh
              báo trực quan về các điều kiện bảo quản bất lợi, kết hợp truy
              xuất thông tin và hỗ trợ quản lý thuốc sau mở/pha, với định hướng
              phù hợp với nhu cầu thực tế của người sử dụng, dược sĩ và hệ
              thống phân phối thuốc.
            </p>
          </div>
        </FadeUp>


        {/* =========================
            GIÁ TRỊ CỐT LÕI
        ========================= */}
        <FadeUp>
          <div className={styles.block}>
            <div className={styles.heading}>
              <h2>GIÁ TRỊ CỐT LÕI</h2>

              <div className={styles.titleIcon}>
                <img
                  src={vision3}
                  alt="Giá trị cốt lõi"
                />
              </div>
            </div>

            <div className={styles.coreValue}>
              AN TOÀN – KHOA HỌC – ĐƠN GIẢN – KHẢ THI
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};

export default VisionMission;