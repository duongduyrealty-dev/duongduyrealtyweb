// Danh sách tỉnh - Chỉ tập trung vào Đồng Nai
export const provinces = ["Đồng Nai"]

// Danh sách huyện/thành phố của Đồng Nai (cập nhật sau sáp nhập 2025)
const districtData: Record<string, string[]> = {
  "Đồng Nai": [
    "Khu vực Biên Hòa",
    "Khu vực Long Khánh",
    "Khu vực Tân Phú",
    "Khu vực Vĩnh Cửu",
    "Khu vực Định Quán",
    "Khu vực Trảng Bom",
    "Khu vực Long Thành",
    "Khu vực Cẩm Mỹ",
    "Khu vực Thống Nhất",
    "Khu vực Xuân Lộc",
    "Khu vực Nhơn Trạch",
    "Khu vực Chơn Thành",
    "Khu vực Đồng Phú",
    "Khu vực Hớn Quản",
    "Khu vực Lộc Ninh",
    "Khu vực Bù Đốp",
    "Khu vực Bù Gia Mập",
    "Khu vực Phú Riềng",
    "Khu vực Bù Đăng",
    "Khu vực Đồng Xoài",
    "Khu vực Bình Long",
    "Khu vực Phước Long",
  ],
}

// Danh sách phường/xã của Đồng Nai (cập nhật sau sáp nhập 2025)
const wardData: Record<string, Record<string, string[]>> = {
  "Đồng Nai": {
    "Khu vực Biên Hòa": [
      "Phường Biên Hòa",
      "Phường Trấn Biên",
      "Phường Trảng Dài",
      "Phường Tam Hiệp",
      "Phường Long Bình",
      "Phường Hố Nai",
      "Phường Long Hưng",
      "Phường Phước Tân",
      "Phường Tam Phước",
    ],
    "Khu vực Long Khánh": [
      "Phường Long Khánh",
      "Phường Bảo Vinh",
      "Phường Xuân Lập",
      "Phường Hàng Gòn",
      "Phường Bình Lộc",
    ],
    "Khu vực Tân Phú": [
      "Xã Tân Phú",
      "Xã Đak Lua",
      "Xã Nam Cát Tiên",
      "Xã Tài Lài",
      "Xã Phú Lâm",
    ],
    "Khu vực Trảng Bom": [
      "Xã Trảng Bom",
      "Xã An Viễn",
      "Xã Bàu Hàm",
      "Xã Hưng Thịnh",
      "Xã Bình Minh",
    ],
    "Khu vực Xuân Lộc": [
      "Xã Xuân Định",
      "Xã Xuân Phú",
      "Xã Xuân Hòa",
      "Xã Xuân Lộc",
      "Xã Xuân Thành",
      "Xã Xuân Bắc",
    ],
    "Khu vực Cẩm Mỹ": [
      "Xã Cẩm Mỹ",
      "Xã Sông Ray",
      "Xã Xuân Quế",
      "Xã Xuân Đường",
      "Xã Xuân Đông",
    ],
    "Khu vực Long Thành": [
      "Xã An Phước",
      "Xã Bình An",
      "Xã Long Thành",
      "Xã Long Phước",
      "Xã Phước Thái",
    ],
    "Khu vực Nhơn Trạch": [
      "Xã Nhơn Trạch",
      "Xã Phước An",
      "Xã Đại Phước",
    ],
    "Khu vực Thống Nhất": [
      "Xã Dầu Giây",
      "Xã Gia Kiệm",
      "Xã Thống Nhất",
    ],
    "Khu vực Định Quán": [
      "Xã Định Quán",
      "Xã Thanh Sơn",
      "Xã Phú Hoà",
      "Xã Phú Vinh",
      "Xã La Ngà",
    ],
    "Khu vực Vĩnh Cửu": [
      "Xã Trị An",
      "Xã Phú Lý",
      "Xã Tân An",
      "Xã Tân Triều",
    ],
    "Khu vực Chơn Thành": [
      "Phường Minh Hưng",
      "Phường Chơn Thành",
      "Xã Nha Bích",
    ],
    "Khu vực Đồng Phú": [
      "Xã Đồng Tâm",
      "Xã Đồng Phú",
      "Xã Tân Lợi",
      "Xã Thuận Lợi",
    ],
    "Khu vực Hớn Quản": [
      "Xã Tân Quan ",
      "Xã Tân Khai",
      "Xã Tân Hưng",
      "Xã Minh Đức",
    ],
    "Khu vực Lộc Ninh": [
      "Xã Lộc Ninh",
      "Xã Lộc Hưng",
      "Xã Lộc Tấn",
      "Xã Lộc Thạnh",
      "Xã Lộc Thành",
      "Xã Lộc Quang",
    ],
    "Khu vực Bù Đốp": [
      "Xã Tân Tiến",
      "Xã Thiện Hưng",
      "Xã Hưng Phước",
    ],
    "Khu vực Bù Gia Mập": [
      "Xã Bù Gia Mập",
      "Xã Đăk Ơ",
      "Xã Đa Kia",
      "Xã Phú Nghĩa",
    ],
    "Khu vực Phú Riềng": [
      "Xã Bình Tân",
      "Xã Long Hà",
      "Xã Phú Riềng",
      "Xã Phú Trung",
    ],
    "Khu vực Bù Đăng": [
      "Xã Phước Sơn",
      "Xã Nghĩa Trung",
      "Xã Bù Đăng",
      "Xã Thọ Sơn",
      "Xã Đak Nhau",
      "Xã Bom Bo",
    ],
    "Khu vực Đồng Xoài": [
      "Phường Đồng Xoài",
      "Phường Bình Phước",
    ],
    "Khu vực Bình Long": [
      "Phường Bình Long",
      "Phường An Lộc",
    ],
    "Khu vực Phước Long": [
      "Phường Phước Long",
      "Phường Phước Bình",
    ],
  },
}

export function getDistricts(province: string): string[] {
  return districtData[province] || []
}

export function getWards(province: string, district: string): string[] {
  return wardData[province]?.[district] || []
}

// Interface cho thông tin bổ sung
export interface AdditionalInfo {
  title: string                 // Tiêu đề/Nội dung mô tả
  currentPrice: number          // Giá hiện tại
  proposedPrice: number         // Giá đề xuất
  coefficient: number           // Hệ số
}

// Interface cho dữ liệu giá đất chi tiết từ file CSV
export interface LandPriceDetail {
  id: number                    // TT - Số thứ tự
  streetName: string            // Tên đường sao thăng
  startPoint: string            // Điểm đầu
  endPoint: string              // Điểm cuối
  // Thông tin giá đất theo loại
  residential?: {               // Đất ở
    currentPrice: number
    proposedPrice: number
    coefficient: number
  }
  commercial?: {                // Đất thương mại - dịch vụ
    currentPrice: number
    proposedPrice: number
    coefficient: number
  }
  production?: {                // Đất sản xuất - kinh doanh
    currentPrice: number
    proposedPrice: number
    coefficient: number
  }
  // Thông tin bổ sung (mảng các bảng nhỏ)
  additionalInfo?: AdditionalInfo[]
}

// Dữ liệu giá đất chi tiết từ file CSV - Phường Long Khánh
export const landPriceDetailData: LandPriceDetail[] = [
  {
    id: 1,
    streetName: "Đường Hồng Thập Tự",
    startPoint: "Đường Quốc lộ 1 - Xuân Lập",
    endPoint: "Đường 21/4",
    residential: {
      currentPrice: 4000000,
      proposedPrice: 11200000,
      coefficient: 2.8,
    },
    commercial: {
      currentPrice: 2800000,
      proposedPrice: 7840000,
      coefficient: 2.8,
    },
    production: {
      currentPrice: 2400000,
      proposedPrice: 6720000,
      coefficient: 2.8,
    },
    additionalInfo: [
      {
        title: "Vị trí đắc địa, gần trung tâm thành phố, thuận tiện giao thông",
        currentPrice: 5000000,
        proposedPrice: 14000000,
        coefficient: 2.8,
      },
      {
        title: "Khu vực phát triển mạnh, có nhiều tiện ích xung quanh",
        currentPrice: 4500000,
        proposedPrice: 12600000,
        coefficient: 2.8,
      },
      {
        title: "Đường rộng, hạ tầng hoàn thiện, phù hợp kinh doanh",
        currentPrice: 3800000,
        proposedPrice: 10640000,
        coefficient: 2.8,
      },
      {
        title: "Gần trường học, bệnh viện, chợ, thuận tiện sinh hoạt",
        currentPrice: 4200000,
        proposedPrice: 11760000,
        coefficient: 2.8,
      },
      {
        title: "Khu dân cư đông đúc, tiềm năng phát triển cao",
        currentPrice: 3500000,
        proposedPrice: 9800000,
        coefficient: 2.8,
      },
    ],
  },
  {
    id: 2,
    streetName: "Đường Nguyễn Văn Hoa",
    startPoint: "Đường Võ Thị Sáu",
    endPoint: "Đường N1 khu dân cư D2D",
    residential: {
      currentPrice: 18000000,
      proposedPrice: 21600000,
      coefficient: 1.20,
    },
    commercial: {
      currentPrice: 25000000,
      proposedPrice: 30000000,
      coefficient: 1.20,
    },
    production: {
      currentPrice: 15000000,
      proposedPrice: 18000000,
      coefficient: 1.20,
    },
  },
  {
    id: 3,
    streetName: "Đường Cách Mạng Tháng 8",
    startPoint: "Ngã ba Mũi tàu",
    endPoint: "Đường Nguyễn Ái Quốc",
    residential: {
      currentPrice: 22000000,
      proposedPrice: 26400000,
      coefficient: 1.20,
    },
    commercial: {
      currentPrice: 30000000,
      proposedPrice: 36000000,
      coefficient: 1.20,
    },
    production: {
      currentPrice: 18000000,
      proposedPrice: 21600000,
      coefficient: 1.20,
    },
  },
]
