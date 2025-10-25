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
  residential?: {               // Đất ở
    currentPrice: number | null
    proposedPrice: number | null
    coefficient: number | null
  }
  commercial?: {                // Đất thương mại - dịch vụ
    currentPrice: number | null
    proposedPrice: number | null
    coefficient: number | null
  }
  production?: {                // Đất sản xuất - kinh doanh
    currentPrice: number | null
    proposedPrice: number | null
    coefficient: number | null
  }
}

// Interface cho dữ liệu giá đất chi tiết từ file CSV
export interface LandPriceDetail {
  id: number                    // TT - Số thứ tự
  streetName: string            // Tên đường sao thăng
  startPoint: string            // Điểm đầu
  endPoint: string              // Điểm cuối
  // Thông tin giá đất theo loại
  residential?: {               // Đất ở
    currentPrice: number | null
    proposedPrice: number | null
    coefficient: number | null
  }
  commercial?: {                // Đất thương mại - dịch vụ
    currentPrice: number | null
    proposedPrice: number | null
    coefficient: number | null
  }
  production?: {                // Đất sản xuất - kinh doanh
    currentPrice: number | null
    proposedPrice: number | null
    coefficient: number | null
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
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường Quốc lộ 1 - Xuân Lập đến Đường 21/4 đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",
        residential: {
          currentPrice: null,
          proposedPrice: 5600000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 3920000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 3360000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường Quốc lộ 1 - Xuân Lập đến Đường 21/4 đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 4200000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 2940000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2520000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường Quốc lộ 1 - Xuân Lập đến Đường 21/4 đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông >200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 2520000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 1764000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 1512000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường Quốc lộ 1 - Xuân Lập đến Đường 21/4 đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",
        residential: {
          currentPrice: null,
          proposedPrice: 4480000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 3136000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2688000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường Quốc lộ 1 - Xuân Lập đến Đường 21/4 đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 3360000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 2352000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2016000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường Quốc lộ 1 - Xuân Lập đến Đường 21/4 đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông > 200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 2016000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 1411000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 1210000,
          coefficient: null,
        },
      },
    ],
  },
  {
    id: 2,
    streetName: "Đường Hồng Thập Tự",
    startPoint: "Đường 21/4",
    endPoint: "Đường Hùng Vương",
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
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường 21/4 đến Đường Hùng Vương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",
        residential: {
          currentPrice: null,
          proposedPrice: 5600000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 3920000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 3360000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường 21/4 đến Đường Hùng Vương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 4200000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 2940000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2520000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường 21/4 đến Đường Hùng Vương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông >200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 2520000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 1764000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 1512000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường 21/4 đến Đường Hùng Vương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",
        residential: {
          currentPrice: null,
          proposedPrice: 4480000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 3136000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2688000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường 21/4 đến Đường Hùng Vương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 3360000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 2352000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2016000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường 21/4 đến Đường Hùng Vương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông > 200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 2016000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 1411000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 1210000,
          coefficient: null,
        },
      }
    ]
  },
  {
    id: 3,
    streetName: "Đường Hồng Thập Tự",
    startPoint: "Đường Hùng Vương",
    endPoint: "Đường Hồ Thị Hương",
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
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường Hùng Vương đến Đường Hồ Thị Hương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",
        residential: {
          currentPrice: null,
          proposedPrice: 5600000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 3920000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 3360000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường Hùng Vương đến Đường Hồ Thị Hương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 4200000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 2940000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2520000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hồng Thập Tự đoạn từ Đường Hùng Vương đến Đường Hồ Thị Hương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông >200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 2800000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 1960000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 1680000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường Hùng Vương đến Đường Hồ Thị Hương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",
        residential: {
          currentPrice: null,
          proposedPrice: 4480000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 3136000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2688000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường Hùng Vương đến Đường Hồ Thị Hương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 3360000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 2352000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 2016000,
          coefficient: null,
        },
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hồng Thập Tự đoạn từ Đường Hùng Vương đến Đường Hồ Thị Hương đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông > 200m.",
        residential: {
          currentPrice: null,
          proposedPrice: 2040000,
          coefficient: null,
        },
        commercial: {
          currentPrice: null,
          proposedPrice: 1568000,
          coefficient: null,
        },
        production: {
          currentPrice: null,
          proposedPrice: 1344000,
          coefficient: null,
        },
      }
    ]
  },
  {
    id: 1,
    streetName: "Đường Hoàng Diệu",
    startPoint: "Đường Hồ Thị Hương",
    endPoint: "Đường Ngô Quyền",
    residential: {
      currentPrice: 3200000,
      proposedPrice: 8960000,
      coefficient: 2.8,
    },
    commercial: {
      currentPrice: 2240000,
      proposedPrice: 6272000,
      coefficient: 2.8,
    },
    production: {
      currentPrice: 1920000,
      proposedPrice: 5376000,
      coefficient: 2.8,
    },
    additionalInfo: [
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hoàng Diệu đoạn từ Đường Hồ Thị Hương đến Đường Ngô Quyền đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",                
          residential: {               
          currentPrice: null,
          proposedPrice: 4480000,
          coefficient: null,
        },
          commercial: {                
            currentPrice: null,
            proposedPrice: 3136000,
            coefficient: null,
        },
          production: {                
            currentPrice: null,
            proposedPrice: 2688000,
            coefficient: null,
        }
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hoàng Diệu đoạn từ Đường Hồ Thị Hương đến Đường Ngô Quyền đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",                
          residential: {               
          currentPrice: null,
          proposedPrice: 3640000,
          coefficient: null,
        },
          commercial: {                
            currentPrice: null,
            proposedPrice: 2548000,
            coefficient: null,
        },
          production: {                
            currentPrice: null,
            proposedPrice: 2184000,
            coefficient: null,
        }
      },
      {
        title: "Các tuyến đường giao thông đấu nối trực tiếp ra Đường Hoàng Diệu đoạn từ Đường Hồ Thị Hương đến Đường Ngô Quyền đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông >200m.",                
          residential: {               
          currentPrice: null,
          proposedPrice: 2660000,
          coefficient: null,
        },
          commercial: {                
            currentPrice: null,
            proposedPrice: 1862000,
            coefficient: null,
        },
          production: {                
            currentPrice: null,
            proposedPrice: 1596000,
            coefficient: null,
        }
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hoàng Diệu đoạn từ Đường Hồ Thị Hương đến Đường Ngô Quyền đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông ≤600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông ≤400m.",                
          residential: {               
          currentPrice: null,
          proposedPrice: 3584000,
          coefficient: null,
        },
          commercial: {                
            currentPrice: null,
            proposedPrice: 2509000,
            coefficient: null,
        },
          production: {                
            currentPrice: null,
            proposedPrice: 2150000,
            coefficient: null,
        }
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hoàng Diệu đoạn từ Đường Hồ Thị Hương đến Đường Ngô Quyền đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng ≥5m, cách đường giao thông >600m.\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông từ >400m đến ≤600m.\n- Có bề rộng <3m, cách đường giao thông ≤200m.",                
          residential: {               
          currentPrice: null,
          proposedPrice: 2192000,
          coefficient: null,
        },
          commercial: {                
            currentPrice: null,
            proposedPrice: 2038000,
            coefficient: null,
        },
          production: {                
            currentPrice: null,
            proposedPrice: 1747000,
            coefficient: null,
        }
      },
      {
        title: "Các tuyến đường giao thông không đấu nối trực tiếp và thông ra Đường Hoàng Diệu đoạn từ Đường Hồ Thị Hương đến Đường Ngô Quyền đã được đầu tư mặt đường nhựa, bê tông xi măng:\n- Có bề rộng từ ≥3m đến <5m, cách đường giao thông >600m.\n- Có bề rộng <3m, cách đường giao thông > 200m.",                
          residential: {               
          currentPrice: null,
          proposedPrice: 2128000,
          coefficient: null,
        },
          commercial: {                
            currentPrice: null,
            proposedPrice: 1490000,
            coefficient: null,
        },
          production: {                
            currentPrice: null,
            proposedPrice: 1277000,
            coefficient: null,
        }
      }
    ]
  }
]
