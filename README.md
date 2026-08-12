# Smart MedTag — ReactJS CRA + SCSS Modules

## Chạy dự án

```bash
npm install
npm start
```

Mở `http://localhost:3000`.

## Build production

```bash
npm run build
```

## Migration mapping

- Header → `src/components/Header`
- Hero + phone demo → `src/components/Hero` + `src/components/PhoneDemo`
- #problem → `Problem`
- #solution → `Solution`
- Thang 5 mức màu → `ColorScale`
- #app → `AppShowcase`
- #science → `Science`
- Mục tiêu thí điểm → `Metrics`
- #roadmap → `Roadmap`
- Đóng góp cộng đồng → `Audience`
- Thông điệp an toàn → `Safety`
- FAQ → `FAQ`
- Footer → `Footer`

CSS được tách thành SCSS Modules theo component; các giá trị dùng chung nằm trong `styles/variables.scss`, còn reset/global typography nằm ở `styles/reset.scss` và `styles/globals.scss`.

JavaScript thuần được chuyển sang React state/effects:
- Phone tabs và các nút điều hướng nội bộ: `useState`
- Mô phỏng quét nhãn/toast: `useState` + `setTimeout`
- Scroll reveal `.fade-up`: `IntersectionObserver` trong component `FadeUp`

Không dùng React Router vì đây là single-page information website và các anchor `#problem`, `#solution`, `#app`, `#science`, `#roadmap` được giữ nguyên.
