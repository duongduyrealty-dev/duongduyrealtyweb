"use client"

import { useState, Fragment } from "react"
import { Download, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LandPriceDetail } from "@/lib/data"

// Helper function để tạo mảng các giá trị không null
function buildPriceDisplay(currentPrice: number | null | undefined, proposedPrice: number | null | undefined, coefficient: number | null | undefined): string[] {
  const parts: string[] = []
  if (currentPrice !== null && currentPrice !== undefined) {
    parts.push(`${currentPrice.toLocaleString("vi-VN")} đ/m²`)
  }
  if (proposedPrice !== null && proposedPrice !== undefined) {
    parts.push(`${proposedPrice.toLocaleString("vi-VN")} đ/m²`)
  }
  if (coefficient !== null && coefficient !== undefined) {
    parts.push(coefficient.toFixed(2))
  }
  return parts
}

interface LandPriceDetailTableProps {
  results: LandPriceDetail[]
  isLoading: boolean
}

type SortField = "id" | "streetName"
type SortOrder = "asc" | "desc"

export default function LandPriceDetailTable({ results, isLoading }: LandPriceDetailTableProps) {
  const [sortField, setSortField] = useState<SortField>("id")
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

  const handleDownloadCSV = () => {
    const csvContent = [
      ["TT", "Tên đường", "Điểm đầu", "Điểm cuối"],
      ...sortedResults.map((item) => [
        item.id,
        item.streetName,
        item.startPoint,
        item.endPoint,
      ]),
    ]

    const csvString = csvContent.map((row) => row.join(",")).join("\n")
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `land-price-detail-${new Date().toISOString().split("T")[0]}.csv`)
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
        <p className="text-sm text-muted-foreground">Vui lòng thử tìm kiếm khác</p>
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
          <h3 className="text-xl font-bold text-foreground">Giá đất dự kiến năm 2026</h3>
          <p className="text-sm text-muted-foreground">Giá Hiện Hành | Giá Đề Xuất | Hệ Số</p>
          <p className="text-sm text-muted-foreground">Tìm thấy {results.length} kết quả</p>
        </div>
        <Button
          onClick={handleDownloadCSV}
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
                    onClick={() => handleSort("id")}
                    className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    TT
                    <SortIcon field="id" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left">
                  <button
                    onClick={() => handleSort("streetName")}
                    className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Tên đường
                    <SortIcon field="streetName" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Điểm đầu</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Điểm cuối</th>
              </tr>
            </thead>
            <tbody>
              {sortedResults.map((item, index) => (
                <Fragment key={`street-${item.id}-${index}`}>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-foreground font-bold">{item.id}</td>
                    <td className="px-4 py-3 text-foreground font-bold">{item.streetName}</td>
                    <td className="px-4 py-3 text-foreground font-bold text-sm">{item.startPoint}</td>
                    <td className="px-4 py-3 text-foreground font-bold text-sm">{item.endPoint}</td>
                  </tr>

                  {/* Hàng thông tin giá đất cho từng đường */}
                  <tr key={`detail-${index}`} className="border-b border-border">
                    <td colSpan={4} className="p-0">
                      <div className="bg-muted/30 px-4 pb-4 pt-2">
                        {/* Header với 3 tabs */}
                        <div className="space-y-2 mb-4">
                          {/* Tab Đất ở */}
                          {item.residential && buildPriceDisplay(item.residential.currentPrice, item.residential.proposedPrice, item.residential.coefficient).length > 0 && (
                            <div className="bg-[#FFC107] text-white rounded-lg px-4 py-3">
                              <div className="flex items-center justify-between gap-4">
                                <div className="font-bold text-sm whitespace-nowrap">ĐẤT Ở</div>
                                <div className="flex items-center font-bold gap-3 text-xs">
                                  {buildPriceDisplay(item.residential.currentPrice, item.residential.proposedPrice, item.residential.coefficient).map((part, idx, arr) => (
                                    <Fragment key={idx}>
                                      <span>{part}</span>
                                      {idx < arr.length - 1 && <span>|</span>}
                                    </Fragment>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Tab Đất TMDV */}
                          {item.commercial && buildPriceDisplay(item.commercial.currentPrice, item.commercial.proposedPrice, item.commercial.coefficient).length > 0 && (
                            <div className="bg-[#F44336] text-white rounded-lg px-4 py-3">
                              <div className="flex items-center justify-between gap-4">
                                <div className="font-bold text-sm whitespace-nowrap">ĐẤT TMDV</div>
                                <div className="flex items-center font-bold gap-3 text-xs">
                                  {buildPriceDisplay(item.commercial.currentPrice, item.commercial.proposedPrice, item.commercial.coefficient).map((part, idx, arr) => (
                                    <Fragment key={idx}>
                                      <span>{part}</span>
                                      {idx < arr.length - 1 && <span>|</span>}
                                    </Fragment>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Tab Đất SXKD */}
                          {item.production && buildPriceDisplay(item.production.currentPrice, item.production.proposedPrice, item.production.coefficient).length > 0 && (
                            <div className="bg-[#4CAF50] text-white rounded-lg px-4 py-3">
                              <div className="flex items-center justify-between gap-4">
                                <div className="font-bold text-sm whitespace-nowrap">ĐẤT SXKD</div>
                                <div className="flex items-center font-bold gap-3 text-xs">
                                  {buildPriceDisplay(item.production.currentPrice, item.production.proposedPrice, item.production.coefficient).map((part, idx, arr) => (
                                    <Fragment key={idx}>
                                      <span>{part}</span>
                                      {idx < arr.length - 1 && <span>|</span>}
                                    </Fragment>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Các bảng thông tin bổ sung */}
                        {item.additionalInfo && item.additionalInfo.length > 0 && (
                          <div className="mt-4 space-y-3">
                          <div className="mb-2">
                            <p className="text-sm font-bold text-center">Thông tin chi tiết ( Giá Đề Xuất )</p>
                          </div>
                            {item.additionalInfo.map((info, infoIndex) => (
                              <div key={infoIndex} className="bg-card rounded-lg border border-border overflow-hidden">
                                <div className="flex flex-row">
                                  {/* Cột trái - Nội dung mô tả */}
                                  <div className="flex-[2] p-4 border-r border-border">
                                    <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{info.title}</p>
                                  </div>

                                  {/* Cột phải - 3 tabs thông tin giá */}
                                  <div className="flex-1 p-3 bg-muted/30">
                                    <div className="space-y-2">
                                      {/* Tab Đất ở - chỉ hiển thị nếu có data */}
                                      {info.residential && buildPriceDisplay(info.residential.currentPrice, info.residential.proposedPrice, info.residential.coefficient).length > 0 && (
                                        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-lg px-3 py-2">
                                          <div className="flex items-center justify-between gap-2">
                                            <div className="font-bold text-xs whitespace-nowrap">ĐẤT Ở</div>
                                            <div className="flex items-center font-bold gap-2 text-[10px]">
                                              {buildPriceDisplay(info.residential.currentPrice, info.residential.proposedPrice, info.residential.coefficient).map((part, idx, arr) => (
                                                <Fragment key={idx}>
                                                  <span>{part}</span>
                                                  {idx < arr.length - 1 && <span>|</span>}
                                                </Fragment>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      {/* Tab Đất TMDV - chỉ hiển thị nếu có data */}
                                      {info.commercial && buildPriceDisplay(info.commercial.currentPrice, info.commercial.proposedPrice, info.commercial.coefficient).length > 0 && (
                                        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg px-3 py-2">
                                          <div className="flex items-center justify-between gap-2">
                                            <div className="font-bold text-xs whitespace-nowrap">ĐẤT TMDV</div>
                                            <div className="flex items-center font-bold gap-2 text-[10px]">
                                              {buildPriceDisplay(info.commercial.currentPrice, info.commercial.proposedPrice, info.commercial.coefficient).map((part, idx, arr) => (
                                                <Fragment key={idx}>
                                                  <span>{part}</span>
                                                  {idx < arr.length - 1 && <span>|</span>}
                                                </Fragment>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      {/* Tab Đất SXKD - chỉ hiển thị nếu có data */}
                                      {info.production && buildPriceDisplay(info.production.currentPrice, info.production.proposedPrice, info.production.coefficient).length > 0 && (
                                        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg px-3 py-2">
                                          <div className="flex items-center justify-between gap-2">
                                            <div className="font-bold text-xs whitespace-nowrap">ĐẤT SXKD</div>
                                            <div className="flex items-center font-bold gap-2 text-[10px]">
                                              {buildPriceDisplay(info.production.currentPrice, info.production.proposedPrice, info.production.coefficient).map((part, idx, arr) => (
                                                <Fragment key={idx}>
                                                  <span>{part}</span>
                                                  {idx < arr.length - 1 && <span>|</span>}
                                                </Fragment>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <span className="font-semibold">Lưu ý: Đây chỉ là bảng giá đất đề xuất dự kiến năm 2026 của UBND Tỉnh Đồng Nai. Không phải bảng giá đất chính thức.</span>
        </p>
      </div>
    </div>
  )
}

