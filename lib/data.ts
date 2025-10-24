export const provinces = [
  "Đồng Nai",
  "TP. Hồ Chí Minh",
  "Tây Ninh",
  "Bình Dương",
  "Long An",
  "Tiền Giang",
  "Bến Tre",
  "Vĩnh Long",
  "Cần Thơ",
  "An Giang",
  "Kiên Giang",
  "Hà Nội",
  "Hải Phòng",
  "Đà Nẵng",
]

const districtData: Record<string, string[]> = {
  "Đồng Nai": ["Biên Hòa", "Long Khánh", "Trảng Bom", "Định Quán", "Vĩnh Cửu"],
  "TP. Hồ Chí Minh": [
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 7",
    "Quận 9",
    "Quận 12",
    "Bình Thạnh",
    "Gò Vấp",
  ],
  "Tây Ninh": ["Tây Ninh", "Trảng Bàng", "Dương Minh Châu", "Châu Thành"],
  "Bình Dương": ["Thủ Dầu Một", "Dĩ An", "Bến Cát", "Tân Uyên", "Thuận An"],
  "Long An": ["Tân An", "Cần Đước", "Cần Giuộc", "Mộc Hóa", "Tân Hưng"],
  "Tiền Giang": ["Tiền Hải", "Cai Lậy", "Gò Công", "Gò Công Đông", "Cái Bè"],
  "Bến Tre": ["Bến Tre", "Châu Thành", "Chợ Lách", "Mỏ Cày Nam", "Mỏ Cày Bắc"],
  "Vĩnh Long": ["Vĩnh Long", "Mang Thít", "Vũng Liêm", "Tam Bình", "Long Hồ"],
  "Cần Thơ": ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn", "Thốt Nốt"],
  "An Giang": ["Long Xuyên", "Châu Đốc", "Tân Châu", "Phú Tân", "Chợ Mới"],
  "Kiên Giang": ["Rạch Giá", "Hà Tiên", "Phú Quốc", "Kiên Lương", "An Biên"],
  "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Cầu Giấy", "Đống Đa", "Hai Bà Trưng", "Thanh Xuân"],
  "Hải Phòng": ["Hồng Bàng", "Ngô Quyền", "Lê Chân", "Kiến An", "Đồ Sơn"],
  "Đà Nẵng": ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu"],
}

const wardData: Record<string, Record<string, string[]>> = {
  "Đồng Nai": {
    "Biên Hòa": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"],
    "Long Khánh": ["Phường 1", "Phường 2", "Phường 3", "Phường 4"],
  },
  "TP. Hồ Chí Minh": {
    "Quận 1": ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cô Giang", "Phường Đa Kao"],
    "Quận 2": ["Phường An Khánh", "Phường An Lợi Đông", "Phường Bình An", "Phường Bình Khánh"],
    "Quận 3": ["Phường 1", "Phường 2", "Phường 3", "Phường 4"],
  },
  "Tây Ninh": {
    "Tây Ninh": ["Phường 1", "Phường 2", "Phường 3", "Phường 4"],
    "Trảng Bàng": ["Xã Tân Hòa", "Xã Tân Phú", "Xã Tân Thạnh"],
  },
  "Bình Dương": {
    "Thủ Dầu Một": ["Phường Phú Hòa", "Phường Hiệp Thành", "Phường Tân Bình"],
    "Dĩ An": ["Phường Dĩ An", "Phường Tân Bình", "Phường Tân Định"],
  },
  "Long An": {
    "Tân An": ["Phường 1", "Phường 2", "Phường 3", "Phường 4"],
    "Cần Đước": ["Xã Tân Hòa", "Xã Tân Phú", "Xã Tân Thạnh"],
  },
  "Tiền Giang": {
    "Tiền Hải": ["Phường 1", "Phường 2", "Phường 3"],
    "Cai Lậy": ["Phường 1", "Phường 2", "Phường 3"],
  },
  "Bến Tre": {
    "Bến Tre": ["Phường 1", "Phường 2", "Phường 3"],
    "Châu Thành": ["Xã Tân Hòa", "Xã Tân Phú"],
  },
  "Vĩnh Long": {
    "Vĩnh Long": ["Phường 1", "Phường 2", "Phường 3"],
    "Mang Thít": ["Xã Tân Hòa", "Xã Tân Phú"],
  },
  "Cần Thơ": {
    "Ninh Kiều": ["Phường An Hòa", "Phường An Khánh", "Phường An Phú"],
    "Bình Thủy": ["Phường Bình Thủy", "Phường Phú Thứ"],
  },
  "An Giang": {
    "Long Xuyên": ["Phường 1", "Phường 2", "Phường 3"],
    "Châu Đốc": ["Phường Châu Đốc", "Phường Nhơn Phú"],
  },
  "Kiên Giang": {
    "Rạch Giá": ["Phường 1", "Phường 2", "Phường 3"],
    "Hà Tiên": ["Phường Hà Tiên", "Phường Vĩnh Thuận"],
  },
  "Hà Nội": {
    "Ba Đình": ["Phường Phúc Tân", "Phường Trúc Bạch", "Phường Cống Vị"],
    "Hoàn Kiếm": ["Phường Hàng Bạc", "Phường Hàng Bồ", "Phường Hàng Gai"],
  },
  "Hải Phòng": {
    "Hồng Bàng": ["Phường Hồng Bàng", "Phường Máy Tơ"],
    "Ngô Quyền": ["Phường Ngô Quyền", "Phường Quán Toan"],
  },
  "Đà Nẵng": {
    "Hải Châu": ["Phường Hải Châu 1", "Phường Hải Châu 2"],
    "Thanh Khê": ["Phường Thanh Khê Tây", "Phường Thanh Khê Đông"],
  },
}

export function getDistricts(province: string): string[] {
  return districtData[province] || []
}

export function getWards(province: string, district: string): string[] {
  return wardData[province]?.[district] || []
}

export const landPriceData = [
  // Đồng Nai - Biên Hòa
  {
    province: "Đồng Nai",
    district: "Biên Hòa",
    ward: "Phường 1",
    street: "Đường Nguyễn Huệ",
    minPrice: 8500000,
    maxPrice: 12000000,
    landType: "Thổ cư",
  },
  {
    province: "Đồng Nai",
    district: "Biên Hòa",
    ward: "Phường 1",
    street: "Đường Trần Phú",
    minPrice: 7500000,
    maxPrice: 10500000,
    landType: "Thổ cư",
  },
  {
    province: "Đồng Nai",
    district: "Biên Hòa",
    ward: "Phường 2",
    street: "Đường Lê Lợi",
    minPrice: 6500000,
    maxPrice: 9500000,
    landType: "Nông nghiệp",
  },
  {
    province: "Đồng Nai",
    district: "Biên Hòa",
    ward: "Phường 3",
    street: "Đường Hùng Vương",
    minPrice: 9000000,
    maxPrice: 13000000,
    landType: "Thương mại-Dịch vụ",
  },
  {
    province: "Đồng Nai",
    district: "Long Khánh",
    ward: "Phường 1",
    street: "Đường Quốc Lộ 1",
    minPrice: 4500000,
    maxPrice: 7000000,
    landType: "Nông nghiệp",
  },
  {
    province: "Đồng Nai",
    district: "Long Khánh",
    ward: "Phường 2",
    street: "Đường Trần Hưng Đạo",
    minPrice: 5500000,
    maxPrice: 8500000,
    landType: "Thổ cư",
  },

  // TP. Hồ Chí Minh - Quận 1
  {
    province: "TP. Hồ Chí Minh",
    district: "Quận 1",
    ward: "Phường Bến Nghé",
    street: "Đường Nguyễn Huệ",
    minPrice: 45000000,
    maxPrice: 65000000,
    landType: "Thương mại-Dịch vụ",
  },
  {
    province: "TP. Hồ Chí Minh",
    district: "Quận 1",
    ward: "Phường Bến Thành",
    street: "Đường Lê Lợi",
    minPrice: 40000000,
    maxPrice: 60000000,
    landType: "Thương mại-Dịch vụ",
  },
  {
    province: "TP. Hồ Chí Minh",
    district: "Quận 1",
    ward: "Phường Cô Giang",
    street: "Đường Võ Văn Kiệt",
    minPrice: 35000000,
    maxPrice: 55000000,
    landType: "Thổ cư",
  },

  // TP. Hồ Chí Minh - Quận 2
  {
    province: "TP. Hồ Chí Minh",
    district: "Quận 2",
    ward: "Phường An Khánh",
    street: "Đường Nguyễn Hữu Cảnh",
    minPrice: 25000000,
    maxPrice: 40000000,
    landType: "Thổ cư",
  },
  {
    province: "TP. Hồ Chí Minh",
    district: "Quận 2",
    ward: "Phường An Lợi Đông",
    street: "Đường Tạo Đàn",
    minPrice: 22000000,
    maxPrice: 38000000,
    landType: "Thổ cư",
  },
  {
    province: "TP. Hồ Chí Minh",
    district: "Quận 2",
    ward: "Phường Bình An",
    street: "Đường Lương Nhu Học",
    minPrice: 20000000,
    maxPrice: 35000000,
    landType: "Nông nghiệp",
  },

  // Tây Ninh
  {
    province: "Tây Ninh",
    district: "Tây Ninh",
    ward: "Phường 1",
    street: "Đường Quốc Lộ 22",
    minPrice: 3500000,
    maxPrice: 6000000,
    landType: "Thổ cư",
  },
  {
    province: "Tây Ninh",
    district: "Tây Ninh",
    ward: "Phường 2",
    street: "Đường Trần Hưng Đạo",
    minPrice: 3000000,
    maxPrice: 5500000,
    landType: "Nông nghiệp",
  },
  {
    province: "Tây Ninh",
    district: "Trảng Bàng",
    ward: "Xã Tân Hòa",
    street: "Đường Quốc Lộ 1",
    minPrice: 2000000,
    maxPrice: 4000000,
    landType: "Nông nghiệp",
  },

  // Bình Dương
  {
    province: "Bình Dương",
    district: "Thủ Dầu Một",
    ward: "Phường Phú Hòa",
    street: "Đường Quốc Lộ 13",
    minPrice: 8000000,
    maxPrice: 12000000,
    landType: "Thổ cư",
  },
  {
    province: "Bình Dương",
    district: "Dĩ An",
    ward: "Phường Dĩ An",
    street: "Đường Tỉnh Lộ 743",
    minPrice: 7000000,
    maxPrice: 11000000,
    landType: "Thổ cư",
  },
  {
    province: "Bình Dương",
    district: "Bến Cát",
    ward: "Phường Bến Cát",
    street: "Đường Quốc Lộ 1",
    minPrice: 5000000,
    maxPrice: 8500000,
    landType: "Nông nghiệp",
  },

  // Long An
  {
    province: "Long An",
    district: "Tân An",
    ward: "Phường 1",
    street: "Đường Quốc Lộ 1",
    minPrice: 4000000,
    maxPrice: 7000000,
    landType: "Thổ cư",
  },
  {
    province: "Long An",
    district: "Cần Đước",
    ward: "Xã Tân Hòa",
    street: "Đường Quốc Lộ 1",
    minPrice: 2500000,
    maxPrice: 4500000,
    landType: "Nông nghiệp",
  },

  // Hà Nội
  {
    province: "Hà Nội",
    district: "Ba Đình",
    ward: "Phường Phúc Tân",
    street: "Đường Trần Phú",
    minPrice: 35000000,
    maxPrice: 55000000,
    landType: "Thổ cư",
  },
  {
    province: "Hà Nội",
    district: "Hoàn Kiếm",
    ward: "Phường Hàng Bạc",
    street: "Đường Hàng Bạc",
    minPrice: 40000000,
    maxPrice: 65000000,
    landType: "Thương mại-Dịch vụ",
  },
  {
    province: "Hà Nội",
    district: "Cầu Giấy",
    ward: "Phường Dịch Vọng",
    street: "Đường Trần Thái Tông",
    minPrice: 25000000,
    maxPrice: 40000000,
    landType: "Thổ cư",
  },

  // Đà Nẵng
  {
    province: "Đà Nẵng",
    district: "Hải Châu",
    ward: "Phường Hải Châu 1",
    street: "Đường Bạch Đằng",
    minPrice: 15000000,
    maxPrice: 28000000,
    landType: "Thổ cư",
  },
  {
    province: "Đà Nẵng",
    district: "Thanh Khê",
    ward: "Phường Thanh Khê Tây",
    street: "Đường Nguyễn Chí Thanh",
    minPrice: 12000000,
    maxPrice: 22000000,
    landType: "Thổ cư",
  },

  // Cần Thơ
  {
    province: "Cần Thơ",
    district: "Ninh Kiều",
    ward: "Phường An Hòa",
    street: "Đường Hòa Bình",
    minPrice: 8000000,
    maxPrice: 14000000,
    landType: "Thổ cư",
  },
  {
    province: "Cần Thơ",
    district: "Bình Thủy",
    ward: "Phường Bình Thủy",
    street: "Đường Cách Mạng Tháng 8",
    minPrice: 6000000,
    maxPrice: 11000000,
    landType: "Nông nghiệp",
  },
]
