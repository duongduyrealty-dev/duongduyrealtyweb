"use client"

import { useState, Fragment } from "react"
import { Download, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LandPriceDetail } from "@/lib/data"

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
          <h3 className="text-xl font-bold text-foreground">Dữ liệu giá đất chi tiết</h3>
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
                  <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-foreground font-medium">{item.id}</td>
                    <td className="px-4 py-3 text-foreground font-medium">{item.streetName}</td>
                    <td className="px-4 py-3 text-foreground text-sm">{item.startPoint}</td>
                    <td className="px-4 py-3 text-foreground text-sm">{item.endPoint}</td>
                  </tr>

                  {/* Hàng thông tin giá đất cho từng đường */}
                  <tr key={`detail-${index}`}>
                    <td colSpan={4} className="p-0">
                      <div className="bg-muted/30 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {/* Đất ở */}
                          <Card className="border-2">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-center">Đất ở</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Giá hiện tại:</span>
                                <span className="font-semibold text-foreground">
                                  {item.residential?.currentPrice.toLocaleString("vi-VN") || "N/A"} đ/m²
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Giá đề xuất:</span>
                                <span className="font-semibold text-primary">
                                  {item.residential?.proposedPrice.toLocaleString("vi-VN") || "N/A"} đ/m²
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Hệ số:</span>
                                <span className="font-semibold text-foreground">
                                  {item.residential?.coefficient.toFixed(2) || "N/A"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Đất Thương mại - Dịch vụ */}
                          <Card className="border-2">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-center">Đất Thương mại - Dịch vụ</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Giá hiện tại:</span>
                                <span className="font-semibold text-foreground">
                                  {item.commercial?.currentPrice.toLocaleString("vi-VN") || "N/A"} đ/m²
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Giá đề xuất:</span>
                                <span className="font-semibold text-primary">
                                  {item.commercial?.proposedPrice.toLocaleString("vi-VN") || "N/A"} đ/m²
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Hệ số:</span>
                                <span className="font-semibold text-foreground">
                                  {item.commercial?.coefficient.toFixed(2) || "N/A"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Đất Sản xuất - Kinh doanh */}
                          <Card className="border-2">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg text-center">Đất Sản xuất - Kinh doanh</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Giá hiện tại:</span>
                                <span className="font-semibold text-foreground">
                                  {item.production?.currentPrice.toLocaleString("vi-VN") || "N/A"} đ/m²
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Giá đề xuất:</span>
                                <span className="font-semibold text-primary">
                                  {item.production?.proposedPrice.toLocaleString("vi-VN") || "N/A"} đ/m²
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Hệ số:</span>
                                <span className="font-semibold text-foreground">
                                  {item.production?.coefficient.toFixed(2) || "N/A"}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Các bảng thông tin bổ sung */}
                        {item.additionalInfo && item.additionalInfo.length > 0 && (
                          <div className="mt-4 border-t-2 border-border pt-4 space-y-3">
                            {item.additionalInfo.map((info, infoIndex) => (
                              <div key={infoIndex} className="bg-card rounded-lg border border-border overflow-hidden">
                                <div className="flex flex-row">
                                  {/* Cột trái - Nội dung mô tả */}
                                  <div className="flex-[2] p-4 border-r border-border">
                                    <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{info.title}</p>
                                  </div>

                                  {/* Cột phải - Thông tin giá */}
                                  <div className="flex-1 p-4 bg-muted/30 space-y-1">
                                    <p className="text-xs text-muted-foreground">
                                      Giá hiện tại:{" "}
                                      <span className="font-semibold text-foreground">
                                        {info.currentPrice.toLocaleString("vi-VN")} đ/m²
                                      </span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Giá đề xuất:{" "}
                                      <span className="font-semibold text-primary">
                                        {info.proposedPrice.toLocaleString("vi-VN")} đ/m²
                                      </span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Hệ số: <span className="font-semibold text-foreground">{info.coefficient.toFixed(2)}</span>
                                    </p>
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

