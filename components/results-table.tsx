"use client"

import { useState } from "react"
import { Download, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { landPriceData } from "@/lib/data"

interface ResultsTableProps {
  results: typeof landPriceData
  isLoading: boolean
}

type SortField = "province" | "district" | "ward" | "minPrice" | "maxPrice"
type SortOrder = "asc" | "desc"

export default function ResultsTable({ results, isLoading }: ResultsTableProps) {
  const [sortField, setSortField] = useState<SortField>("province")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }
  }

  const sortedResults = [...results].sort((a, b) => {
    let aVal: any = a[sortField as keyof typeof a]
    let bVal: any = b[sortField as keyof typeof b]

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal
    }

    aVal = String(aVal).toLowerCase()
    bVal = String(bVal).toLowerCase()
    return sortOrder === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
  })

  const handleDownloadPDF = () => {
    // Simulate PDF download
    const csvContent = [
      ["Tỉnh", "Quận/Huyện", "Phường/Xã", "Đường", "Giá tối thiểu (VNĐ/m²)", "Giá tối đa (VNĐ/m²)", "Loại đất"],
      ...sortedResults.map((item) => [
        item.province,
        item.district,
        item.ward,
        item.street,
        item.minPrice.toLocaleString("vi-VN"),
        item.maxPrice.toLocaleString("vi-VN"),
        item.landType,
      ]),
    ]

    const csvString = csvContent.map((row) => row.join(",")).join("\n")
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `land-prices-${new Date().toISOString().split("T")[0]}.csv`)
    link.click()
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <p className="text-lg text-muted-foreground mb-2">Không tìm thấy dữ liệu</p>
        <p className="text-sm text-muted-foreground">Vui lòng thử địa điểm khác hoặc điều chỉnh bộ lọc của bạn</p>
      </div>
    )
  }

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <div className="w-4 h-4" />
    return sortOrder === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
  }

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Kết quả tìm kiếm</h3>
          <p className="text-sm text-muted-foreground">Tìm thấy {results.length} kết quả</p>
        </div>
        <Button
          onClick={handleDownloadPDF}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Tải xuống CSV
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="px-4 py-3 text-left">
                  <button
                    onClick={() => handleSort("province")}
                    className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Tỉnh/Thành phố
                    <SortIcon field="province" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left">
                  <button
                    onClick={() => handleSort("district")}
                    className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Quận/Huyện
                    <SortIcon field="district" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Phường/Xã</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Đường</th>
                <th className="px-4 py-3 text-right">
                  <button
                    onClick={() => handleSort("minPrice")}
                    className="flex items-center justify-end gap-2 font-semibold text-foreground hover:text-primary transition-colors w-full"
                  >
                    Giá tối thiểu
                    <SortIcon field="minPrice" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right">
                  <button
                    onClick={() => handleSort("maxPrice")}
                    className="flex items-center justify-end gap-2 font-semibold text-foreground hover:text-primary transition-colors w-full"
                  >
                    Giá tối đa
                    <SortIcon field="maxPrice" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Loại đất</th>
              </tr>
            </thead>
            <tbody>
              {sortedResults.map((item, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 text-foreground font-medium">{item.province}</td>
                  <td className="px-4 py-3 text-foreground">{item.district}</td>
                  <td className="px-4 py-3 text-foreground">{item.ward}</td>
                  <td className="px-4 py-3 text-foreground text-sm">{item.street}</td>
                  <td className="px-4 py-3 text-right font-semibold text-primary">
                    {item.minPrice.toLocaleString("vi-VN")}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-primary">
                    {item.maxPrice.toLocaleString("vi-VN")}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {item.landType}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <span className="font-semibold">Lưu ý:</span> Giá đất mang tính tham khảo, áp dụng theo Luật Đất đai 2024 và
          Quyết định UBND tỉnh. Dữ liệu được cập nhật đến năm 2025.
        </p>
      </div>
    </div>
  )
}
