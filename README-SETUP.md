# Hướng Dẫn Cài Đặt Dự Án / Project Setup Guide

## Yêu Cầu Hệ Thống / System Requirements

- **Node.js**: phiên bản 18.x hoặc cao hơn / version 18.x or higher
- **npm**: phiên bản 9.x hoặc cao hơn / version 9.x or higher

## Cách Cài Đặt / Installation Instructions

### Cách 1: Sử dụng file script tự động (Khuyến nghị)

#### Trên Windows:
1. Mở thư mục dự án
2. Double-click vào file `install.bat`
3. Chờ quá trình cài đặt hoàn tất

Hoặc chạy từ Command Prompt:
```cmd
install.bat
```

#### Trên Linux/Mac:
1. Mở Terminal trong thư mục dự án
2. Cấp quyền thực thi cho file script:
```bash
chmod +x install.sh
```
3. Chạy script:
```bash
./install.sh
```

### Cách 2: Cài đặt thủ công

Mở Terminal/Command Prompt trong thư mục dự án và chạy:

```bash
npm install --legacy-peer-deps
```

**Lưu ý**: Cần sử dụng flag `--legacy-peer-deps` vì dự án sử dụng React 19 (phiên bản mới nhất) và một số thư viện chưa hỗ trợ chính thức.

## Chạy Dự Án / Run the Project

Sau khi cài đặt thành công, chạy lệnh:

```bash
npm run dev
```

Dự án sẽ chạy tại: http://localhost:3000

## Các Lệnh Khác / Other Commands

- **Build dự án**: `npm run build`
- **Chạy production**: `npm start`
- **Kiểm tra lỗi code**: `npm run lint`

## Xử Lý Lỗi / Troubleshooting

### Lỗi: "npm not found" hoặc "node not found"
- Cài đặt Node.js từ: https://nodejs.org/
- Khởi động lại Terminal/Command Prompt sau khi cài đặt

### Lỗi: "ERESOLVE unable to resolve dependency tree"
- Đảm bảo sử dụng flag `--legacy-peer-deps` khi cài đặt
- Xóa thư mục `node_modules` và file `package-lock.json`, sau đó cài lại

### Lỗi kết nối mạng
- Kiểm tra kết nối internet
- Thử sử dụng VPN nếu bị chặn truy cập npm registry
- Hoặc cấu hình npm registry khác:
```bash
npm config set registry https://registry.npmjs.org/
```

## Thông Tin Dự Án / Project Information

Dự án này sử dụng:
- **Next.js 16.0.0**
- **React 19.2.0**
- **TypeScript 5**
- **Tailwind CSS 4.1.9**
- **shadcn/ui components**

## Liên Hệ / Contact

Nếu gặp vấn đề trong quá trình cài đặt, vui lòng liên hệ với người phát triển dự án.

