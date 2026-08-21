import { useState } from "react";
import styles from "./PhoneDemo.module.scss";
import color1 from "../../assets/color-1.png";
import color2 from "../../assets/color-2.png";
import color3 from "../../assets/color-3.png";
import color4 from "../../assets/color-4.png";
import logo from "../../assets/logo.png";
import readMed from "../../assets/read-med.png";

const PHONE_SCREENS = [
  "home",
  "scan",
  "reminders",
  "drug",
  "profile",
  "search",
  "searchDetail",
  "guide",
  "more",
  "developing",
  "prescription",
];

const SEARCH_ITEMS = [
  {
    id: "drug-info",
    title: "Thông tin thuốc",
    keywords: ["thuốc", "thông tin", "dược phẩm"],
    screen: "drug",
    description:
      "Xem thông tin chi tiết về thuốc, dạng bào chế, thời điểm pha hoặc mở và các thông tin liên quan.",
  },
  {
    id: "color-card",
    title: "Thẻ báo hỏng đổi màu",
    keywords: ["thẻ", "báo hỏng", "đổi màu", "màu", "nhãn"],
    screen: "scan",
    description:
      "Kiểm tra trạng thái thẻ màu và nhận biết mức cảnh báo của sản phẩm.",
  },
  {
    id: "schedule",
    title: "Lịch dùng thuốc",
    keywords: ["lịch", "dùng thuốc", "liều", "nhắc thuốc"],
    screen: "reminders",
    description: "Theo dõi lịch sử dụng thuốc và các mốc thời gian cần lưu ý.",
  },
  {
    id: "side-effects",
    title: "Tác dụng phụ",
    keywords: ["tác dụng phụ", "phản ứng", "triệu chứng"],
    screen: "detail",
    description:
      "Thông tin hỗ trợ nhận biết các tác dụng không mong muốn khi sử dụng thuốc.",
  },
  {
    id: "interaction",
    title: "Tương tác thuốc",
    keywords: ["tương tác", "thuốc", "kết hợp"],
    screen: "detail",
    description:
      "Kiểm tra các thông tin liên quan đến việc sử dụng thuốc cùng những thuốc khác.",
  },
  {
    id: "dosage-form",
    title: "Dạng bào chế",
    keywords: ["dạng bào chế", "viên", "bột", "hỗn dịch"],
    screen: "detail",
    description:
      "Thông tin về dạng bào chế và cách sử dụng phù hợp với từng loại thuốc.",
  },
];
const SCAN_LEVELS = [
  {
    name: "ĐẠT YÊU CẦU",
    level: "good",
    icon: color1,
  },
  {
    name: "ỔN ĐỊNH",
    level: "stable",
    icon: color2,
  },
  {
    name: "CẦN CHÚ Ý",
    level: "warning",
    icon: color3,
  },
  {
    name: "NGUY CƠ CAO",
    level: "danger",
    icon: color4,
  },
];

const MORE_SECTIONS = [
  {
    title: "THEO DÕI THUỐC",
    items: [
      {
        icon: "💊",
        label: "Thông tin thuốc",
        action: "drug",
      },
      {
        icon: "🎨",
        label: "Kiểm tra màu",
        action: "scan",
      },
      {
        icon: "🌡",
        label: "Theo dõi nhiệt độ",
        developing: true,
        description: "Theo dõi điều kiện nhiệt độ bảo quản thuốc.",
      },
      {
        icon: "💧",
        label: "Theo dõi độ ẩm",
        developing: true,
        description: "Theo dõi độ ẩm trong quá trình bảo quản.",
      },
      {
        icon: "◷",
        label: "Lịch sử kiểm tra",
        developing: true,
        description: "Xem lại các lần kiểm tra Smart MedTag.",
      },
      {
        icon: "⏳",
        label: "Nhắc hạn dùng",
        developing: true,
        description: "Thông báo khi thuốc sắp hết hạn sau pha hoặc mở.",
      },
    ],
  },

  {
    title: "NHẮC NHỞ & LỊCH",
    items: [
      {
        icon: "🕘",
        label: "Lịch dùng thuốc",
        action: "reminders",
      },
      {
        icon: "✦",
        label: "Lịch nhắc thông minh",
        developing: true,
        description: "Tự động đề xuất thời gian nhắc phù hợp.",
      },
      {
        icon: "🔔",
        label: "Thông báo",
        developing: true,
        description: "Quản lý các cảnh báo và nhắc nhở.",
      },
    ],
  },

  {
    title: "HƯỚNG DẪN & AN TOÀN",
    items: [
      {
        icon: "📖",
        label: "Hướng dẫn sử dụng",
        action: "guide",
      },
      {
        icon: "⚠",
        label: "Cảnh báo an toàn",
        developing: true,
        description: "Tổng hợp các lưu ý quan trọng.",
      },
      {
        icon: "🏠",
        label: "Hướng dẫn bảo quản",
        developing: true,
        description: "Hướng dẫn bảo quản thuốc tại nhà.",
      },
      {
        icon: "⟷",
        label: "Tương tác thuốc",
        developing: true,
        description: "Tra cứu thông tin hỗ trợ về tương tác thuốc.",
      },
    ],
  },

  {
    title: "TIỆN ÍCH THÔNG MINH",
    items: [
      {
        icon: "✦",
        label: "Trợ lý Smart MedTag",
        developing: true,
        description: "Trợ lý hỗ trợ tra cứu và sử dụng thuốc.",
      },
      {
        icon: "＋",
        label: "Thêm thuốc mới",
        developing: true,
        description: "Thêm và quản lý thuốc mới.",
      },
      {
        icon: "☷",
        label: "Danh sách thuốc",
        developing: true,
        description: "Quản lý các thuốc đang sử dụng.",
      },
      {
        icon: "↗",
        label: "Chia sẻ",
        developing: true,
        description: "Chia sẻ thông tin với người chăm sóc.",
      },
    ],
  },

  {
    title: "HỆ THỐNG & HỖ TRỢ",
    items: [
      {
        icon: "⚙",
        label: "Cài đặt",
        developing: true,
        description: "Tùy chỉnh trải nghiệm sử dụng ứng dụng.",
      },
      {
        icon: "?",
        label: "Trợ giúp",
        developing: true,
        description: "Câu hỏi thường gặp và hướng dẫn.",
      },
      {
        icon: "ⓘ",
        label: "Về ứng dụng",
        developing: true,
        description: "Thông tin về Smart MedTag.",
      },
    ],
  },
];

const PhoneDemo = ({ compact = false, scanOnly = false }) => {
  const [activeTab, setActiveTab] = useState(scanOnly ? "scan" : "home");

  const [scanned, setScanned] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [hiddenSearchItems, setHiddenSearchItems] = useState([]);

  const [selectedSearchItem, setSelectedSearchItem] = useState(null);
  const [developingFeature, setDevelopingFeature] = useState(null);
  const [prescriptionScanned, setPrescriptionScanned] = useState(false);

  const [isReadingPrescription, setIsReadingPrescription] = useState(false);

  const handlePrescriptionScan = () => {
    setIsReadingPrescription(true);

    window.setTimeout(() => {
      setPrescriptionScanned(true);
      setIsReadingPrescription(false);
    }, 1000);
  };

  const goTo = (target) => {
    if (!PHONE_SCREENS.includes(target)) return;

    // Nếu đang ở màn hình quét và chuyển sang màn hình khác
    // thì xóa kết quả quét cũ
    if (activeTab === "scan" && target !== "scan") {
      setScanned(false);
    }
    if (activeTab === "prescription" && target !== "prescription") {
      setPrescriptionScanned(false);
    }

    setActiveTab(target);
  };

  const goBack = () => {
    if (activeTab === "scan") {
      setScanned(false);
    }
    if (activeTab === "prescription") {
      setPrescriptionScanned(false);
    }
    setActiveTab("home");
  };

  const openDeveloping = (title, description = "") => {
    setDevelopingFeature({
      title,
      description,
    });
  };

  const closeDeveloping = () => {
    setDevelopingFeature(null);
  };

  const handleScan = () => {
    setScanned(true);
  };

  const handleTabChange = (target) => {
    goTo(target);

    if (target !== "search") {
      setSelectedSearchItem(null);
    }
  };

  const handleSearchItemClick = (item) => {
    if (item.screen === "drug") {
      goTo("drug");
      return;
    }

    if (item.screen === "scan") {
      goTo("scan");
      return;
    }

    if (item.screen === "reminders") {
      goTo("reminders");
      return;
    }

    setSelectedSearchItem(item);
    goTo("searchDetail");
  };

  const handleHideSearchItem = (event, itemId) => {
    event.stopPropagation();

    setHiddenSearchItems((prev) => [...prev, itemId]);
  };

  const handleBackToSearch = () => {
    setSelectedSearchItem(null);
    setActiveTab("search");
  };

  const filteredSearchItems = SEARCH_ITEMS.filter((item) => {
    if (hiddenSearchItems.includes(item.id)) {
      return false;
    }

    const normalizedSearch = searchTerm.toLowerCase().trim();

    if (!normalizedSearch) {
      return true;
    }

    const searchableText = [item.title, ...item.keywords]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  const renderScreenHeader = (title) => {
    return (
      <div className={styles.innerHeader}>
        <button
          type="button"
          className={styles.backButton}
          onClick={goBack}
          aria-label="Quay lại"
        >
          ←
        </button>

        <div className={styles.innerHeaderTitle}>{title}</div>
      </div>
    );
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
          <img src={logo} alt="Smart MedTag" className={styles.appbarLogo} />
          Smart MedTag
        </div>

        {/* ================= TRANG CHỦ ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${
              activeTab === "home" ? styles.active : ""
            }`}
          >
            <div className={styles.screenTitle}>Tình trạng hiện tại</div>

            <div className={styles.statusCard}>
              <div className={styles.statusLabel}>MỨC CẢNH BÁO</div>

              <div className={styles.statusMain}>
                <strong>CẦN CHÚ Ý</strong>

                <div className={styles.resultMood}>
                  <img src={color3} alt="Cần chú ý" />
                </div>
              </div>
            </div>

            <div className={styles.drugCard}>
              <div className={styles.row}>
                <div className={styles.drugIcon}>✚</div>

                <div className={styles.drugCopy}>
                  <b>Kháng sinh pha hỗn dịch</b>

                  <small>Đã mở/pha lúc 08:30 · 12/05/2026</small>
                </div>
              </div>
            </div>

            <div className={styles.expiryCard}>
              <div className={styles.row}>
                <div>
                  <b>⚠ Hạn dùng sau pha/mở</b>

                  <small>14 ngày · đến 26/05/2026</small>
                </div>

                <b>14d</b>
              </div>
            </div>

            <div className={styles.quick}>
              <button type="button" onClick={() => goTo("guide")}>
                <span>📖</span>
                Hướng dẫn
              </button>

              <button type="button" onClick={() => goTo("scan")}>
                <span>📷</span>
                Đọc thẻ màu
              </button>

              <button type="button" onClick={() => goTo("prescription")}>
                <span>📜</span>
                Đọc đơn thuốc
              </button>

              <button type="button" onClick={() => goTo("reminders")}>
                <span>🕘</span>
                Lịch dùng thuốc
              </button>

              <button type="button" onClick={() => goTo("drug")}>
                <span>💊</span>
                Thông tin thuốc
              </button>

              <button type="button" onClick={() => goTo("more")}>
                <span>•••</span>
                Thêm
              </button>
            </div>
          </div>
        )}

        {/* ================= TIỆN ÍCH & HỖ TRỢ ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${styles.moreScreen} ${
              activeTab === "more" ? styles.active : ""
            }`}
          >
            {renderScreenHeader("Tiện ích")}

            {MORE_SECTIONS.map((section) => (
              <div className={styles.moreSection} key={section.title}>
                <div className={styles.moreSectionLabel}>{section.title}</div>

                <div className={styles.featureGrid}>
                  {section.items.map((item) => (
                    <button
                      type="button"
                      className={styles.featureCard}
                      key={item.label}
                      onClick={() => {
                        if (item.developing) {
                          openDeveloping(item.label, item.description);
                        } else if (item.action) {
                          goTo(item.action);
                        }
                      }}
                    >
                      <div className={styles.featureIcon}>{item.icon}</div>

                      <span className={styles.featureLabel}>{item.label}</span>

                      {item.developing && (
                        <span
                          className={styles.developingDot}
                          aria-label="Đang phát triển"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className={styles.moreInfo}>
              <div className={styles.moreInfoIcon}>ⓘ</div>

              <div>
                <b>Smart MedTag</b>

                <p>
                  Nhãn bao bì dược phẩm thông minh hỗ trợ cảnh báo bảo quản sai,
                  nhắc hạn dùng sau pha/mở và hướng dẫn sử dụng thuốc tại nhà.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TÌM KIẾM ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${styles.searchScreen} ${
              activeTab === "search" ? styles.active : ""
            }`}
          >
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>⌕</span>

              <input
                type="text"
                value={searchTerm}
                placeholder="Tìm kiếm trên Smart MedTag"
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              {searchTerm && (
                <button
                  type="button"
                  className={styles.clearSearch}
                  onClick={() => setSearchTerm("")}
                  aria-label="Xóa nội dung tìm kiếm"
                >
                  ×
                </button>
              )}
            </div>

            <div className={styles.searchList}>
              {filteredSearchItems.length > 0 ? (
                filteredSearchItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={styles.searchItem}
                    onClick={() => handleSearchItemClick(item)}
                  >
                    <span className={styles.historyIcon}>◷</span>

                    <span className={styles.searchItemTitle}>{item.title}</span>

                    <span
                      className={styles.removeSearchItem}
                      role="button"
                      tabIndex={0}
                      onClick={(event) => handleHideSearchItem(event, item.id)}
                    >
                      ×
                    </span>
                  </button>
                ))
              ) : (
                <div className={styles.emptySearch}>
                  <span>⌕</span>

                  <b>Không tìm thấy kết quả phù hợp</b>

                  <small>Hãy thử tìm kiếm với từ khóa khác.</small>
                </div>
              )}
            </div>

            {!searchTerm && filteredSearchItems.length > 0 && (
              <button
                type="button"
                className={styles.viewMore}
                onClick={() => handleTabChange("more")}
              >
                Xem thêm
              </button>
            )}
          </div>
        )}

        {/* ================= CHI TIẾT TÌM KIẾM ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${
              activeTab === "searchDetail" ? styles.active : ""
            }`}
          >
            <button
              type="button"
              className={styles.backButton}
              onClick={handleBackToSearch}
            >
              ← Quay lại
            </button>

            {selectedSearchItem && (
              <>
                <div className={styles.searchDetailTitle}>
                  {selectedSearchItem.title}
                </div>

                <div className={styles.searchDetailCard}>
                  <div className={styles.detailIcon}>ⓘ</div>

                  <div>
                    <b>{selectedSearchItem.title}</b>

                    <p>{selectedSearchItem.description}</p>
                  </div>
                </div>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <small>Thông tin hỗ trợ</small>

                    <b>
                      Nội dung được hiển thị dựa trên dữ liệu của Smart MedTag.
                    </b>
                  </div>

                  <div className={styles.infoItem}>
                    <small>Khuyến nghị</small>

                    <b>
                      Kiểm tra hướng dẫn sử dụng và tham khảo chuyên môn khi cần
                      thiết.
                    </b>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ================= HƯỚNG DẪN / KHUYẾN NGHỊ ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${styles.guideScreen} ${
              activeTab === "guide" ? styles.active : ""
            }`}
          >
            <div className={styles.guideTitle}>
              <span className={styles.guideTitleIcon}>📖</span>

              <span>Hướng dẫn/ khuyến nghị</span>
            </div>

            <div className={styles.guideList}>
              <div className={styles.guideCard}>
                <small>Liều dùng & cách dùng</small>

                <b>Uống 5ml/lần. 3 lần/ngày. Sau khi ăn 30 phút</b>
              </div>

              <div className={styles.guideCard}>
                <small>Điều kiện bảo quản</small>

                <b>Bảo quản nơi khô ráo, 15°C - 25°C, tránh ánh nắng</b>
              </div>

              <div className={styles.guideCard}>
                <small>Lưu ý khi sử dụng</small>

                <b>Lắc đều trước khi uống. Không dùng nếu dung dịch đổi màu</b>
              </div>

              <div className={styles.guideCard}>
                <small>Thời hạn dùng sau khi mở</small>

                <b>Tối đa 14 ngày - Hết hạn ngày 26/05/2026</b>
              </div>

              <div className={styles.guideCard}>
                <small>Khuyến nghị</small>

                <b>
                  Nếu nhãn đổi màu bất thường, tham khảo dược sĩ trước khi sử
                  dụng tiếp
                </b>
              </div>
            </div>
          </div>
        )}

        {/* ================= QUÉT THẺ MÀU ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${styles.scanScreen} ${
              activeTab === "scan" ? styles.active : ""
            }`}
          >
            {!scanned ? (
              <>
                {/* TRẠNG THÁI BAN ĐẦU */}

                {renderScreenHeader("Quét Smart MedTag")}

                <div className={styles.scanBox}>
                  <div className={styles.qrframe}>
                    <div className={styles.qrmini}>▦</div>
                  </div>
                </div>

                <p className={styles.smallParagraph}>
                  Đưa QR/NFC hoặc vùng chỉ thị màu vào khung hình. Camera hỗ trợ
                  nhận diện màu nhãn và đưa ra gợi ý mức cảnh báo.
                </p>

                <button
                  type="button"
                  className={styles.miniBtn}
                  onClick={handleScan}
                >
                  Mô phỏng quét nhãn
                </button>
              </>
            ) : (
              <>
                {/* TRẠNG THÁI SAU KHI QUÉT */}

                <div className={styles.scanResultTitle}>
                  <span className={styles.cameraIcon}>
                    {/* Bạn có thể thay bằng ảnh icon */}
                    <span className={styles.cameraPlaceholder} />
                  </span>

                  <span>Đọc kết quả màu</span>
                </div>

                {/* DẢI MÀU CẢNH BÁO */}

                <div className={styles.miniColorScale}>
                  {SCAN_LEVELS.map((item) => (
                    <div
                      key={item.level}
                      className={`${styles.miniColorLevel} ${
                        styles[item.level]
                      }`}
                    >
                      <strong>{item.name}</strong>

                      <div className={styles.miniColorIcon}>
                        {item.icon ? (
                          <img src={item.icon} alt={item.name} />
                        ) : (
                          <span className={styles.iconPlaceholder} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* VÙNG ĐỌC MÀU */}

                <div className={styles.colorReader}>
                  <div className={styles.readerGrid}>
                    <div className={styles.readerPixelGrid} />
                  </div>

                  <div className={styles.readerLine} />
                </div>

                {/* KẾT QUẢ */}

                <div className={styles.scanResultCard}>
                  <div className={styles.scanResultCopy}>
                    <small>Kết quả hỗ trợ</small>

                    <strong>CẦN CHÚ Ý</strong>
                  </div>

                  <div className={styles.resultMood}>
                    <img src={color3} alt="Cần chú ý" />
                  </div>
                </div>

                {/* KHUYẾN NGHỊ */}

                <div className={styles.scanRecommendation}>
                  <small>Khuyến nghị xử lý</small>

                  <p>
                    Kiểm tra hướng dẫn bảo quản và tham khảo dược sĩ trước khi
                    tiếp tục sử dụng.
                  </p>
                </div>

                <button
                  type="button"
                  className={styles.scanAgainBtn}
                  onClick={() => setScanned(false)}
                >
                  Quét lại
                </button>
              </>
            )}
          </div>
        )}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${
              activeTab === "prescription" ? styles.active : ""
            }`}
          >
            {renderScreenHeader("Đọc đơn thuốc")}

            {/* =========================
        TRẠNG THÁI CHƯA QUÉT
    ========================= */}
            {!prescriptionScanned && (
              <>
                <div className={styles.prescriptionScanBox}>
                  <div className={styles.prescriptionFrame}>
                    <div className={styles.prescriptionCorners}>
                      <span className={styles.cornerTopLeft} />
                      <span className={styles.cornerTopRight} />
                      <span className={styles.cornerBottomLeft} />
                      <span className={styles.cornerBottomRight} />
                    </div>

                    <div className={styles.prescriptionDocumentIcon}>▤</div>

                    <div className={styles.prescriptionScanLine} />
                  </div>
                </div>

                <p className={styles.prescriptionHint}>
                  Đặt đơn thuốc vào trong khung hình để hệ thống hỗ trợ nhận
                  diện thông tin trên đơn.
                </p>

                <button
                  type="button"
                  className={styles.prescriptionScanButton}
                  onClick={handlePrescriptionScan}
                  disabled={isReadingPrescription}
                >
                  {isReadingPrescription
                    ? "Đang đọc đơn thuốc..."
                    : "Đọc đơn thuốc"}
                </button>
              </>
            )}

            {/* =========================
        TRẠNG THÁI ĐÃ ĐỌC XONG
    ========================= */}
            {prescriptionScanned && (
              <div className={styles.prescriptionResult}>
                {/* ẢNH ĐƠN THUỐC */}
                <div className={styles.prescriptionImageBox}>
                  <img
                    src={readMed}
                    alt="Đơn thuốc"
                    className={styles.prescriptionImage}
                  />

                  <div className={styles.prescriptionImageOverlay}>
                    <span className={styles.resultCornerTopLeft} />
                    <span className={styles.resultCornerTopRight} />
                    <span className={styles.resultCornerBottomLeft} />
                    <span className={styles.resultCornerBottomRight} />

                    <div className={styles.resultFocus}>+</div>
                  </div>
                </div>

                {/* TÊN ĐƠN THUỐC */}
                <div className={styles.prescriptionNameCard}>
                  <small>Tên đơn thuốc</small>

                  <b>Đơn thuốc ngày 12/05/2026</b>
                </div>

                {/* THÔNG TIN */}
                <div className={styles.prescriptionInfoGrid}>
                  <div className={styles.prescriptionInfoCard}>
                    <small>Ngày bắt đầu</small>

                    <b>12/05/2026</b>
                  </div>

                  <div className={styles.prescriptionInfoCard}>
                    <small>Số ngày uống</small>

                    <b>14 ngày</b>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= LỊCH DÙNG THUỐC ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${
              activeTab === "reminders" ? styles.active : ""
            }`}
          >
            {renderScreenHeader("Lịch dùng thuốc")}

            <div className={styles.reminder}>
              <div className={styles.time}>07:00</div>

              <div>
                <b>Liều buổi sáng</b>
                <br />5 mL sau ăn
              </div>

              <span className={styles.switch} />
            </div>

            <div className={styles.reminder}>
              <div className={styles.time}>12:00</div>

              <div>
                <b>Liều buổi trưa</b>
                <br />5 mL sau ăn
              </div>

              <span className={styles.switch} />
            </div>

            <div className={styles.reminder}>
              <div className={styles.time}>19:00</div>

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

        {/* ================= THÔNG TIN THUỐC ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${
              activeTab === "drug" ? styles.active : ""
            }`}
          >
            {renderScreenHeader("Thông tin thuốc")}

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
                  Nơi khô ráo, thoáng mát với nhiệt độ dưới 30°C và độ ẩm không
                  quá 75%
                </b>
              </div>
            </div>
          </div>
        )}

        {/* ================= NGƯỜI DÙNG ================= */}

        {!scanOnly && (
          <div
            className={`${styles.screen} ${
              activeTab === "profile" ? styles.active : ""
            }`}
          >
            {renderScreenHeader("Người dùng")}

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
                <b>Hướng dẫn 4 mức cảnh báo</b>
              </div>
            </div>
          </div>
        )}

        {/* ================= SCAN ONLY ================= */}

        {scanOnly && (
          <div className={`${styles.screen} ${styles.active}`}>
            {renderScreenHeader("Đọc thẻ màu")}

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

        {developingFeature && (
          <div className={styles.developingOverlay}>
            <div className={styles.developingModal}>
              <div className={styles.developingIcon}>🚧</div>

              <div className={styles.developingEyebrow}>SMART MEDTAG</div>

              <h3>
                Chức năng đang
                <br />
                được phát triển
              </h3>

              <p className={styles.developingTitle}>
                {developingFeature.title}
              </p>

              <p className={styles.developingDescription}>
                {developingFeature.description ||
                  "Tính năng này đang được hoàn thiện để mang đến trải nghiệm tốt hơn cho bạn."}
              </p>

              <div className={styles.developingLine}>
                <span />
              </div>

              <p className={styles.developingNote}>Vui lòng quay lại sau</p>

              <button
                type="button"
                className={styles.developingClose}
                onClick={closeDeveloping}
              >
                Quay lại
              </button>
            </div>
          </div>
        )}

        {/* ================= TAB BAR ================= */}

        {!scanOnly && (
          <div className={styles.tabbar}>
            <button
              type="button"
              className={`${styles.tab} ${
                activeTab === "home" ? styles.activeTab : ""
              }`}
              onClick={() => handleTabChange("home")}
            >
              <b>⌂</b>
              Trang chủ
            </button>

            <button
              type="button"
              className={`${styles.tab} ${
                activeTab === "search" || activeTab === "searchDetail"
                  ? styles.activeTab
                  : ""
              }`}
              onClick={() => handleTabChange("search")}
            >
              <b>⌕</b>
              Tìm kiếm
            </button>

            <button
              type="button"
              className={`${styles.tab} ${
                activeTab === "profile" ? styles.activeTab : ""
              }`}
              onClick={() => handleTabChange("profile")}
            >
              <b>◉</b>
              Người dùng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneDemo;
