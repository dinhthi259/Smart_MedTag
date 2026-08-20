import { useState } from "react";
import styles from "./PhoneDemo.module.scss";

const PHONE_SCREENS = ["home", "scan", "reminders", "drug", "profile"];

const PhoneDemo = ({ compact = false, scanOnly = false }) => {
  const [activeTab, setActiveTab] = useState(scanOnly ? "scan" : "home");
  const [scanned, setScanned] = useState(false);

  const goTo = (target) => {
    if (PHONE_SCREENS.includes(target)) setActiveTab(target);
  };

  const handleScan = () => {
    setScanned(true);
    window.setTimeout(() => setScanned(false), 1400);
  };

  return (
    <div className={`${styles.phone} ${compact ? styles.compact : ""}`}>
      <div className={styles.phoneScreen}>
        <div className={styles.notch} />
        <div className={styles.statusbar}><span>{scanOnly ? "09:41" : "17:05"}</span><span>▮▮▮ ◒</span></div>
        <div className={styles.appbar}><span className={styles.appDot} /> Smart MedTag</div>

        {!scanOnly && (
          <div className={`${styles.screen} ${activeTab === "home" ? styles.active : ""}`}>
            <div className={styles.screenTitle}>Tình trạng hiện tại</div>
            <div className={styles.statusCard}>
              <div className={styles.statusLabel}>MỨC CẢNH BÁO</div>
              <div className={styles.statusMain}><strong>CẦN CHÚ Ý</strong><span className={styles.mood}>😕</span></div>
            </div>
            <div className={styles.drugCard}>
              <div className={styles.row}>
                <div className={styles.drugIcon}>✚</div>
                <div className={styles.drugCopy}><b>Kháng sinh pha hỗn dịch</b><small>Đã mở/pha lúc 08:30 · 12/05/2026</small></div>
              </div>
            </div>
            <div className={styles.expiryCard}>
              <div className={styles.row}>
                <div><b>⚠ Hạn dùng sau pha/mở</b><small>14 ngày · đến 26/05/2026</small></div><b>14d</b>
              </div>
            </div>
            <div className={styles.quick}>
              <button type="button"><span>📖</span>Hướng dẫn</button>
              <button type="button" onClick={() => goTo("scan")}><span>📷</span>Đọc thẻ màu</button>
              <button type="button"><span>⚠️</span>Khuyến nghị</button>
              <button type="button" onClick={() => goTo("reminders")}><span>🕘</span>Lịch dùng thuốc</button>
              <button type="button" onClick={() => goTo("drug")}><span>💊</span>Thông tin thuốc</button>
              <button type="button" onClick={() => goTo("profile")}><span>•••</span>Thêm</button>
            </div>
          </div>
        )}

        {!scanOnly && (
          <div className={`${styles.screen} ${activeTab === "scan" ? styles.active : ""}`}>
            <div className={styles.screenTitle}>Quét Smart MedTag</div>
            <div className={styles.scanBox}><div className={styles.qrframe}><div className={styles.qrmini}>▦</div></div></div>
            <p className={styles.smallParagraph}>Đưa QR/NFC hoặc vùng chỉ thị màu vào khung hình. Camera chỉ hỗ trợ nhận diện màu nhãn và đưa ra gợi ý mức cảnh báo.</p>
            <button type="button" className={styles.miniBtn} onClick={handleScan}>{scanned ? "Đã quét nhãn ✓" : "Mô phỏng quét nhãn"}</button>
            {scanned && <div className={styles.toast}>✓ Đã nhận diện: Độ ẩm ở mức “Cần chú ý”. Hãy xem khuyến nghị trước khi tiếp tục sử dụng.</div>}
          </div>
        )}

        {!scanOnly && (
          <div className={`${styles.screen} ${activeTab === "reminders" ? styles.active : ""}`}>
            <div className={styles.screenTitle}>Lịch dùng thuốc</div>
            <div className={styles.reminder}><div className={styles.time}>07:00</div><div><b>Liều buổi sáng</b><br />5 mL sau ăn</div><span className={styles.switch} /></div>
            <div className={styles.reminder}><div className={styles.time}>15:00</div><div><b>Liều buổi chiều</b><br />5 mL sau ăn</div><span className={styles.switch} /></div>
            <div className={styles.reminder}><div className={styles.time}>23:00</div><div><b>Liều buổi tối</b><br />5 mL sau ăn</div><span className={styles.switch} /></div>
            <div className={`${styles.infoItem} ${styles.mt12}`}><small>Nhắc hạn sau pha/mở</small><b>26/05/2026 · 08:30</b></div>
            <div className={styles.infoItem}><small>Mốc được ghi nhận khi</small><b>Quét QR/NFC lúc bắt đầu pha/mở</b></div>
          </div>
        )}

        {!scanOnly && (
          <div className={`${styles.screen} ${activeTab === "drug" ? styles.active : ""}`}>
            <div className={styles.screenTitle}>Thông tin thuốc</div>
            <div className={styles.infoList}>
              <div className={styles.infoItem}><small>Dạng bào chế</small><b>Bột pha hỗn dịch uống</b></div>
              <div className={styles.infoItem}><small>Thời điểm pha/mở</small><b>08:30 · 12/05/2026</b></div>
              <div className={styles.infoItem}><small>Hạn dùng sau pha/mở</small><b>14 ngày</b></div>
              <div className={styles.infoItem}><small>Điều kiện theo dõi</small><b>Nhiệt độ · Độ ẩm · Trạng thái nhãn</b></div>
              <div className={styles.infoItem}><small>Khuyến nghị</small><b>Nếu nhãn đổi màu bất thường, tham khảo dược sĩ trước khi sử dụng tiếp.</b></div>
            </div>
          </div>
        )}

        {!scanOnly && (
          <div className={`${styles.screen} ${activeTab === "profile" ? styles.active : ""}`}>
            <div className={styles.screenTitle}>Người dùng</div>
            <div className={styles.profile}><div className={styles.avatar}>👩‍⚕️</div><div><b className={styles.profileName}>Minh Anh</b><div className={styles.profileMeta}>Tài khoản quản lý thuốc tại nhà</div></div></div>
            <div className={styles.infoList}>
              <div className={styles.infoItem}><small>Chế độ hỗ trợ</small><b>Người chăm sóc / Người cao tuổi</b></div>
              <div className={styles.infoItem}><small>Cỡ chữ</small><b>Lớn · Tương phản cao</b></div>
              <div className={styles.infoItem}><small>Thông báo</small><b>Đã bật nhắc lịch & hạn dùng</b></div>
              <div className={styles.infoItem}><small>Trợ giúp</small><b>Hướng dẫn 5 mức cảnh báo</b></div>
            </div>
          </div>
        )}

        {scanOnly && (
          <div className={`${styles.screen} ${styles.active}`}>
            <div className={styles.screenTitle}>Đọc thẻ màu</div>
            <div className={styles.scanBox}><div className={styles.qrframe}><div className={styles.qrmini}>▦</div></div></div>
            <div className={styles.statusCard} style={{ background: "#FFF4D1" }}>
              <div className={styles.statusLabel}>KẾT QUẢ HỖ TRỢ</div>
              <div className={styles.statusMain}><strong className={styles.smallStatus}>CẦN CHÚ Ý</strong><span className={styles.mood}>⚠️</span></div>
            </div>
            <div className={styles.infoItem}><small>Khuyến nghị xử lý</small><b>Kiểm tra hướng dẫn bảo quản và tham khảo dược sĩ trước khi tiếp tục sử dụng.</b></div>
          </div>
        )}

        <div className={styles.tabbar}>
          <button type="button" className={`${styles.tab} ${activeTab === "home" ? styles.activeTab : ""}`} onClick={scanOnly ? undefined : () => goTo("home")}><b>⌂</b>Trang chủ</button>
          <button type="button" className={`${styles.tab} ${activeTab === "search" ? styles.activeTab : ""}`} onClick={scanOnly ? undefined : () => goTo("search")}><b>⌁</b>Tìm kiếm</button>
          <button type="button" className={`${styles.tab} ${activeTab === "profile" ? styles.activeTab : ""}`} onClick={scanOnly ? undefined : () => goTo("profile")}><b>◉</b>Cá nhân</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDemo;
