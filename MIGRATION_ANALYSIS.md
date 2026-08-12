# Phân tích migration Smart MedTag

## 1. Cấu trúc website gốc

Website có các phần:
1. Header sticky + anchor navigation.
2. Hero với thông điệp chính, pills, CTA và phone demo.
3. Problem `#problem`.
4. Solution `#solution`.
5. Thang màu 5 mức cảnh báo.
6. App showcase `#app`.
7. Nền tảng khoa học `#science`.
8. Mục tiêu giai đoạn thí điểm.
9. Quy trình 6 giai đoạn `#roadmap`.
10. Đóng góp cộng đồng.
11. Safety message.
12. FAQ.
13. Footer.

## 2. Component mapping

| HTML | React |
|---|---|
| `.topbar` / header | `Header` |
| `.hero` | `Hero` |
| Phone UI trong hero | `PhoneDemo` |
| `.fade-up` | `FadeUp` |
| `#problem` | `Problem` |
| `#solution` | `Solution` |
| thang màu | `ColorScale` |
| `#app` | `AppShowcase` + `PhoneDemo` |
| `#science` | `Science` |
| metrics | `Metrics` |
| `#roadmap` | `Roadmap` |
| audience | `Audience` |
| safety | `Safety` |
| FAQ | `FAQ` |
| footer | `Footer` |

## 3. JavaScript migration

- Tab navigation trong `#heroPhone`: `querySelector` + `classList.toggle` → `useState(activeTab)`.
- Các nút `data-go`: gọi trực tiếp hàm `goTo()` thay vì `.click()`.
- Mô phỏng scan: thao tác `textContent`, `style.display`, `setTimeout` → state `scanned`.
- `IntersectionObserver`: được đóng gói thành `FadeUp` component và tự unobserve sau khi phần tử xuất hiện.

## 4. CSS migration

- CSS custom properties → `src/styles/variables.scss`.
- Reset/global typography/layout utility → `src/styles/reset.scss` + `src/styles/globals.scss`.
- CSS của từng khối → SCSS Module cùng thư mục component.
- Media query gốc giữ các breakpoint 980px và 640px.
- Các giá trị layout/màu/font/spacing được giữ theo source gốc, không redesign.

## 5. Assets

HTML gốc không tham chiếu file ảnh hoặc font cục bộ/external bằng URL; logo và phone mockup đều là HTML/CSS. Vì vậy `src/assets/` chưa cần file.

## 6. Anchor links giữ nguyên

- `#top`
- `#problem`
- `#solution`
- `#app`
- `#science`
- `#roadmap`

Không dùng React Router.

## 7. Responsive

Các breakpoint gốc được giữ:
- `max-width: 980px`
- `max-width: 640px`

Các thay đổi tương ứng: navigation ẩn ở tablet, grid chuyển cột, thang màu xếp dọc, process 3/2 cột và cuối cùng 1 cột theo đúng source.

## 8. Lưu ý kiểm tra

Môi trường thực thi hiện tại không cài được dependency bằng `npm install` do timeout mạng, nên chưa thể chạy `npm run build` thực tế trong phiên này. Tuy vậy, TypeScript compiler được dùng để parse toàn bộ JSX/JS và không phát hiện lỗi cú pháp.
