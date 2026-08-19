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
        <div className={styles.statusbar}>
          <span>{scanOnly ? "09:41" : "17:05"}</span>
          <span>▮▮▮ ◒</span>
        </div>
        <div className={styles.appbar}>
          <span className={styles.appDot} /> Smart MedTag
        </div>

        {!scanOnly && (
          <div
            className={`${styles.screen} ${
              activeTab === "home" ? styles.active : ""
            }`}
          >
            {/* Tiêu đề */}
            <div className={styles.screenTitle}>Tình trạng hiện tại</div>

            {/* Trạng thái */}
            <div className={styles.statusMain}>
              <strong>CẦN CHÚ Ý</strong>

              <div className={styles.mood}>
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="30" r="23" />
                  <circle cx="24" cy="27" r="2.5" />
                  <circle cx="40" cy="27" r="2.5" />
                  <path d="M23 41c5-6 17-6 22 0" />
                  <path d="M25 10c2-5 8-7 12-4" />
                </svg>
              </div>
            </div>

            {/* Thông tin thuốc */}
            <div className={styles.drugCard}>
              <div className={styles.row}>
                <div className={styles.drugIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M9 18h30v17c0 4-7 7-15 7S9 39 9 35V18Z" />
                    <path d="M9 18c0-4 30-4 30 0s-30 4-30 0Z" />
                    <path d="M9 25c0 4 30 4 30 0" />
                    <path d="M8 14c8-1 20-4 30-9" />
                  </svg>
                </div>

                <div className={styles.drugCopy}>
                  <div className={styles.drugTime}>Đã mở/pha lúc</div>

                  <div className={styles.drugInfo}>
                    <span>08:30</span>
                    <span className={styles.separatorDot} />
                    <span>12/05/2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hạn dùng */}
            <div className={styles.expiryCard}>
              <div className={styles.row}>
                <div className={styles.expiryIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="20" cy="20" r="11" />
                    <path d="M20 14v7l5 3" />
                    <path d="M32 25l-10 18h20L32 25Z" />
                    <path d="M32 31v5" />
                    <circle cx="32" cy="40" r="1.5" />
                  </svg>
                </div>

                <div className={styles.expiryCopy}>
                  <div className={styles.expiryTitle}>Hạn dùng sau pha/mở</div>

                  <div className={styles.expiryInfo}>
                    <span>14 ngày</span>
                    <span className={styles.expiryDot} />
                    <span>26/05/2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chức năng nhanh */}
            <div className={styles.quick}>
              <button type="button">
                <span className={styles.quickIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M12 8h16c5 0 8 3 8 8v24H20c-5 0-8-3-8-8V8Z" />
                    <path d="M36 16c-4-3-8-3-12 0v24c4-3 8-3 12 0" />
                    <path d="M12 16c4-3 8-3 12 0" />
                    <path d="M18 13h5" />
                    <path d="M18 18h5" />
                  </svg>
                </span>
                <span className={styles.quickText}>
                  Hướng dẫn/
                  <br />
                  khuyến nghị
                </span>
              </button>

              <button type="button" onClick={() => goTo("scan")}>
                <span className={styles.quickIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <rect x="8" y="16" width="32" height="22" rx="5" />
                    <circle cx="24" cy="27" r="7" />
                    <path d="M15 16l3-5h12l3 5" />
                    <path d="M38 10h4" />
                    <path d="M40 8v4" />
                  </svg>
                </span>

                <span className={styles.quickText}>
                  Đọc kết quả
                  <br />
                  mẫu
                </span>
              </button>

              <button type="button">
                <span className={styles.quickIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M24 5 43 40H5L24 5Z" />
                    <path d="M24 17v11" />
                    <circle cx="24" cy="34" r="1.5" />
                  </svg>
                </span>

                <span className={styles.quickText}>
                  Khuyến nghị
                  <br />
                  xử lí
                </span>
              </button>

              <button type="button" onClick={() => goTo("reminders")}>
                <span className={styles.quickIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M24 8a16 16 0 1 1-14 8" />
                    <path d="M10 8v9h9" />
                    <path d="M24 16v10l-7 6" />
                  </svg>
                </span>

                <span className={styles.quickText}>
                  Lịch sử dụng
                  <br />
                  thuốc
                </span>
              </button>

              <button type="button" onClick={() => goTo("drug")}>
                <span className={styles.quickIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="m11 18 8-8 20 20-8 8-20-20Z" />
                    <path d="m18 11 19 19" />
                    <path d="M8 22h10" />
                    <path d="M11 19l-3 3 3 3" />
                  </svg>
                </span>

                <span className={styles.quickText}>
                  Thông tin
                  <br />
                  thuốc
                </span>
              </button>

              <button type="button" onClick={() => goTo("profile")}>
                <span className={styles.quickIcon}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="24" cy="24" r="15" />
                    <circle cx="18" cy="24" r="1.8" />
                    <circle cx="24" cy="24" r="1.8" />
                    <circle cx="30" cy="24" r="1.8" />
                  </svg>
                </span>

                <span className={styles.quickText}>Thêm</span>
              </button>
            </div>
          </div>
        )}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${activeTab === "scan" ? styles.active : ""}`}
          >
            <div className={styles.screenTitle}>Quét Smart MedTag</div>
            <div className={styles.scanBox}>
              <div className={styles.qrframe}>
                <div className={styles.qrmini}>▦</div>
              </div>
            </div>
            <p className={styles.smallParagraph}>
              Đưa QR/NFC hoặc vùng chỉ thị màu vào khung hình. Camera chỉ hỗ trợ
              nhận diện màu nhãn và đưa ra gợi ý mức cảnh báo.
            </p>
            <button
              type="button"
              className={styles.miniBtn}
              onClick={handleScan}
            >
              {scanned ? "Đã quét nhãn ✓" : "Mô phỏng quét nhãn"}
            </button>
            {scanned && (
              <div className={styles.toast}>
                ✓ Đã nhận diện: Độ ẩm ở mức “Cần chú ý”. Hãy xem khuyến nghị
                trước khi tiếp tục sử dụng.
              </div>
            )}
          </div>
        )}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${activeTab === "reminders" ? styles.active : ""}`}
          >
            <div className={styles.screenTitle}>Lịch dùng thuốc</div>
            <div className={styles.reminder}>
              <div className={styles.time}>07:00</div>
              <div>
                <b>Liều buổi sáng</b>
                <br />5 mL sau ăn
              </div>
              <span className={styles.switch} />
            </div>
            <div className={styles.reminder}>
              <div className={styles.time}>15:00</div>
              <div>
                <b>Liều buổi chiều</b>
                <br />5 mL sau ăn
              </div>
              <span className={styles.switch} />
            </div>
            <div className={styles.reminder}>
              <div className={styles.time}>23:00</div>
              <div>
                <b>Liều buổi tối</b>
                <br />5 mL sau ăn
              </div>
              <span className={styles.switch} />
            </div>
            <div className={`${styles.infoItem} ${styles.mt12}`}>
              <small>Nhắc hạn sau pha/mở</small>
              <b>26/05/2026 · 08:30</b>
            </div>
            <div className={styles.infoItem}>
              <small>Mốc được ghi nhận khi</small>
              <b>Quét QR/NFC lúc bắt đầu pha/mở</b>
            </div>
          </div>
        )}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${activeTab === "drug" ? styles.active : ""}`}
          >
            <div className={styles.screenTitle}>Thông tin thuốc</div>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <small>Dạng bào chế</small>
                <b>Bột pha hỗn dịch uống</b>
              </div>
              <div className={styles.infoItem}>
                <small>Thời điểm pha/mở</small>
                <b>08:30 · 12/05/2026</b>
              </div>
              <div className={styles.infoItem}>
                <small>Hạn dùng sau pha/mở</small>
                <b>14 ngày</b>
              </div>
              <div className={styles.infoItem}>
                <small>Điều kiện theo dõi</small>
                <b>Nhiệt độ · Độ ẩm · Trạng thái nhãn</b>
              </div>
              <div className={styles.infoItem}>
                <small>Khuyến nghị</small>
                <b>
                  Nếu nhãn đổi màu bất thường, tham khảo dược sĩ trước khi sử
                  dụng tiếp.
                </b>
              </div>
            </div>
          </div>
        )}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${activeTab === "profile" ? styles.active : ""}`}
          >
            <div className={styles.screenTitle}>Người dùng</div>
            <div className={styles.profile}>
              <div className={styles.avatar}>👩‍⚕️</div>
              <div>
                <b className={styles.profileName}>Minh Anh</b>
                <div className={styles.profileMeta}>
                  Tài khoản quản lý thuốc tại nhà
                </div>
              </div>
            </div>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <small>Chế độ hỗ trợ</small>
                <b>Người chăm sóc / Người cao tuổi</b>
              </div>
              <div className={styles.infoItem}>
                <small>Cỡ chữ</small>
                <b>Lớn · Tương phản cao</b>
              </div>
              <div className={styles.infoItem}>
                <small>Thông báo</small>
                <b>Đã bật nhắc lịch & hạn dùng</b>
              </div>
              <div className={styles.infoItem}>
                <small>Trợ giúp</small>
                <b>Hướng dẫn 5 mức cảnh báo</b>
              </div>
            </div>
          </div>
        )}

        {scanOnly && (
          <div className={`${styles.screen} ${styles.active}`}>
            <div className={styles.screenTitle}>Đọc thẻ màu</div>
            <div className={styles.scanBox}>
              <div className={styles.qrframe}>
                <div className={styles.qrmini}>▦</div>
              </div>
            </div>
            <div
              className={styles.statusCard}
              style={{ background: "#FFF4D1" }}
            >
              <div className={styles.statusLabel}>KẾT QUẢ HỖ TRỢ</div>
              <div className={styles.statusMain}>
                <strong className={styles.smallStatus}>CẦN CHÚ Ý</strong>
                <span className={styles.mood}>⚠️</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <small>Khuyến nghị xử lý</small>
              <b>
                Kiểm tra hướng dẫn bảo quản và tham khảo dược sĩ trước khi tiếp
                tục sử dụng.
              </b>
            </div>
          </div>
        )}

        <div className={styles.tabbar}>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === "home" ? styles.activeTab : ""}`}
            onClick={scanOnly ? undefined : () => goTo("home")}
          >
            <b>⌂</b>Trang chủ
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === "scan" ? styles.activeTab : ""}`}
            onClick={scanOnly ? undefined : () => goTo("scan")}
          >
            <b>⌁</b>Quét
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === "reminders" ? styles.activeTab : ""}`}
            onClick={scanOnly ? undefined : () => goTo("reminders")}
          >
            <b>◷</b>Lịch nhắc
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === "drug" ? styles.activeTab : ""}`}
            onClick={scanOnly ? undefined : () => goTo("drug")}
          >
            <b>✚</b>Thuốc
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === "profile" ? styles.activeTab : ""}`}
            onClick={scanOnly ? undefined : () => goTo("profile")}
          >
            <b>◉</b>Cá nhân
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDemo;
