# 🚀 Hướng dẫn Deploy AI Agent Dashboard

## 📋 Yêu cầu Trước khi Deploy

1. **Node.js** phiên bản 18.17 trở lên
2. **Git** để quản lý source code
3. **GitHub account** để lưu trữ repository
4. **Hosting platform** (Vercel, Netlify, hoặc GitHub Pages)

## 🔧 Bước 1: Chuẩn bị Dự án

### 1.1 Cài đặt Dependencies
```bash
npm install
```

### 1.2 Cấu hình Biến Môi trường
Tạo file `.env.local`:
```bash
cp env.example .env.local
```

Chỉnh sửa `.env.local` với API key thực tế:
```env
NEXT_PUBLIC_CHATBOT_WEBHOOK_URL=https://aps.aibm.space/webhook/vibe1
API_KEY=your_actual_api_key_here
```

### 1.3 Test Local
```bash
npm run dev
```

Kiểm tra ứng dụng tại http://localhost:3000

## 🚀 Bước 2: Deploy lên GitHub

### 2.1 Khởi tạo Git Repository
```bash
git init
git add .
git commit -m "Initial commit: AI Agent Dashboard"
```

### 2.2 Push lên GitHub
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## 🌐 Bước 3: Deploy lên Hosting Platform

### Option 1: Vercel (Khuyến nghị)

#### 3.1.1 Kết nối với Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập với GitHub account
3. Click "New Project"
4. Chọn repository vừa tạo

#### 3.1.2 Cấu hình Build
- **Framework Preset**: Next.js
- **Root Directory**: `./` (để trống)
- **Build Command**: `npm run build` (tự động)
- **Output Directory**: `.next` (tự động)

#### 3.1.3 Cấu hình Biến Môi trường
Trong Vercel Dashboard, thêm:
```
NEXT_PUBLIC_CHATBOT_WEBHOOK_URL=https://aps.aibm.space/webhook/vibe1
API_KEY=your_actual_api_key_here
```

#### 3.1.4 Deploy
Click "Deploy" và chờ quá trình hoàn tất

### Option 2: Netlify

#### 3.2.1 Kết nối với Netlify
1. Truy cập [netlify.com](https://netlify.com)
2. Đăng nhập với GitHub account
3. Click "New site from Git"
4. Chọn repository

#### 3.2.2 Cấu hình Build
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 (trong Environment variables)

#### 3.2.3 Cấu hình Biến Môi trường
Trong Netlify Dashboard > Site settings > Environment variables:
```
NEXT_PUBLIC_CHATBOT_WEBHOOK_URL=https://aps.aibm.space/webhook/vibe1
API_KEY=your_actual_api_key_here
```

### Option 3: GitHub Pages

#### 3.3.1 Cấu hình Next.js
Chỉnh sửa `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

#### 3.3.2 Cập nhật package.json
Thêm script:
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll"
  }
}
```

#### 3.3.3 Deploy
```bash
npm run deploy
git add out/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

#### 3.3.4 Cấu hình GitHub Pages
1. Vào repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: main, Folder: /out
4. Save

## 🔒 Bước 4: Bảo mật

### 4.1 Kiểm tra .gitignore
Đảm bảo file `.gitignore` có:
```
.env*.local
.next/
out/
```

### 4.2 Kiểm tra API Keys
- **KHÔNG BAO GIỜ** commit API keys vào Git
- Sử dụng biến môi trường trong hosting platform
- Rotate API keys định kỳ

## 🧪 Bước 5: Kiểm tra Sau Deploy

### 5.1 Test Functionality
- ✅ AI Chatbot hoạt động
- ✅ Responsive design trên mobile
- ✅ Loading states hoạt động
- ✅ Error handling

### 5.2 Performance Check
- ✅ Page load time < 3s
- ✅ Mobile performance tốt
- ✅ SEO meta tags

## 🚨 Troubleshooting

### Lỗi Build
```bash
# Xóa cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Lỗi Environment Variables
- Kiểm tra tên biến môi trường
- Đảm bảo `NEXT_PUBLIC_` prefix cho client-side
- Restart build sau khi thay đổi

### Lỗi API
- Kiểm tra webhook URL
- Kiểm tra API key
- Test API endpoint riêng lẻ

## 📱 Custom Domain (Tùy chọn)

### Vercel
1. Vào Project Settings > Domains
2. Add domain
3. Cấu hình DNS records

### Netlify
1. Vào Site Settings > Domain management
2. Add custom domain
3. Cấu hình DNS

## 🔄 Continuous Deployment

### Vercel
- Tự động deploy khi push code
- Preview deployments cho pull requests
- Rollback về version cũ

### Netlify
- Tự động build và deploy
- Branch deployments
- Form handling

## 📊 Monitoring

### Vercel Analytics
- Page views
- Performance metrics
- Error tracking

### Netlify Analytics
- Page views
- Bandwidth usage
- Build times

## 🎯 Best Practices

1. **Luôn test local trước khi deploy**
2. **Sử dụng staging environment**
3. **Monitor performance sau deploy**
4. **Backup dữ liệu quan trọng**
5. **Document mọi thay đổi**

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra logs trong hosting platform
2. Test local environment
3. Kiểm tra documentation
4. Tạo issue trên GitHub repository
