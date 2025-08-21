# AI Agent & Dashboard Project

Dự án AI Agent & Dashboard được viết bằng **Next.js 14** với **TypeScript** và **Tailwind CSS** - một framework hiện đại và mạnh mẽ hơn HTML thuần.

## 🚀 Tính năng

- ✅ **Next.js 14** với App Router
- ✅ **TypeScript** với type safety
- ✅ **Tailwind CSS** cho styling hiện đại
- ✅ **AI Chatbot** với webhook integration
- ✅ **Dashboard Analytics** (đang phát triển)
- ✅ **Responsive Design** cho mọi thiết bị
- ✅ **Environment Variables** để bảo mật API keys

## 📁 Cấu trúc Dự án

```
corp/
├── app/                    # Next.js App Router
│   ├── globals.css        # Tailwind CSS styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── package.json           # Dependencies và scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── next.config.js         # Next.js configuration
├── .gitignore             # Git ignore rules
├── env.example            # Environment variables example
├── DEPLOYMENT.md          # Hướng dẫn deploy chi tiết
└── README.md              # File này
```

## 🛠️ Cài đặt và Chạy

### 1. Cài đặt Dependencies
```bash
npm install
```

### 2. Cấu hình Biến Môi trường
Tạo file `.env.local` từ `env.example`:
```bash
cp env.example .env.local
```

Sau đó chỉnh sửa `.env.local` với API key thực tế:
```env
NEXT_PUBLIC_CHATBOT_WEBHOOK_URL=https://aps.aibm.space/webhook/vibe1
API_KEY=your_actual_api_key_here
```

### 3. Chạy Development Server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại: http://localhost:3000

### 4. Build cho Production
```bash
npm run build
npm start
```

## 🔑 Bảo mật API Keys

Dự án sử dụng **biến môi trường** để bảo mật API keys:

- **Development**: Tạo file `.env.local` (đã được ignore bởi Git)
- **Production**: Cấu hình biến môi trường trong hosting platform

**KHÔNG BAO GIỜ** commit API keys vào Git repository!

## 📱 Tính năng Chính

### 1. AI Chatbot
- Tương tác với AI Agent qua webhook
- Hỗ trợ Markdown rendering
- Real-time chat interface
- Thread-based conversations

### 2. Dashboard Analytics (Coming Soon)
- KPI cards với số liệu thống kê
- Biểu đồ tương tác
- Bảng dữ liệu có thể sắp xếp và lọc
- Phân tích AI tự động

### 3. Modern Tech Stack
- **Next.js 14**: Framework React hiện đại
- **TypeScript**: Type safety và IntelliSense
- **Tailwind CSS**: Utility-first CSS framework
- **App Router**: File-based routing system

## 🚀 Deploy

### GitHub Pages
1. Push code lên GitHub
2. Vào Settings > Pages
3. Chọn Source: Deploy from a branch
4. Chọn branch: `main` và folder: `/ (root)`

### Vercel (Recommended)
1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Cấu hình biến môi trường trong Vercel Dashboard
4. Deploy tự động

### Netlify
1. Push code lên GitHub
2. Kết nối repository với Netlify
3. Cấu hình build command: `npm run build`
4. Cấu hình publish directory: `.next`

## 🛠️ Công nghệ Sử dụng

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Next.js built-in
- **Package Manager**: npm
- **Development**: Hot reload, TypeScript compilation

## 📝 Ghi chú

- Dự án sử dụng **Next.js App Router** (thế hệ mới)
- **TypeScript** đảm bảo code quality và maintainability
- **Tailwind CSS** cho responsive design và modern UI
- **Environment variables** để bảo mật thông tin nhạy cảm
- Tương thích với mọi hosting platform hiện đại

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
