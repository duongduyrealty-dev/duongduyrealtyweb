"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { provinces, getDistricts, getWards } from "@/lib/data"

interface SearchFormProps {
  onSearch: (filters: {
    province?: string
    district?: string
    ward?: string
    street?: string
    landType?: string
  }) => void
  onReset: () => void
  isLoading: boolean
}

export default function SearchForm({ onSearch, onReset, isLoading }: SearchFormProps) {
  const [selectedProvince, setSelectedProvince] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedWard, setSelectedWard] = useState("")
  const [street, setStreet] = useState("")
  const [landType, setLandType] = useState("")

  const districts = useMemo(() => (selectedProvince ? getDistricts(selectedProvince) : []), [selectedProvince])

  const wards = useMemo(
    () => (selectedDistrict ? getWards(selectedProvince, selectedDistrict) : []),
    [selectedProvince, selectedDistrict],
  )

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince(e.target.value)
    setSelectedDistrict("")
    setSelectedWard("")
  }

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value)
    setSelectedWard("")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({
      province: selectedProvince,
      district: selectedDistrict,
      ward: selectedWard,
      street,
      landType,
    })
  }

  const handleReset = () => {
    setSelectedProvince("")
    setSelectedDistrict("")
    setSelectedWard("")
    setStreet("")
    setLandType("")
    onReset()
  }

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border p-6 md:p-8 mb-8">
      <h3 className="text-2xl font-bold text-foreground mb-6">Tìm kiếm Giá Đất</h3>

      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Province */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">
              Tỉnh/Thành phố <span className="text-destructive">*</span>
            </label>
            <select
              value={selectedProvince}
              onChange={handleProvinceChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">Quận/Huyện</label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedProvince}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Chọn quận/huyện</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          {/* Ward */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">Phường/Xã</label>
            <select
              value={selectedWard}
              onChange={(e) => setSelectedWard(e.target.value)}
              disabled={!selectedDistrict}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Chọn phường/xã</option>
              {wards.map((ward) => (
                <option key={ward} value={ward}>
                  {ward}
                </option>
              ))}
            </select>
          </div>

          {/* Land Type */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-foreground">Loại đất</label>
            <select
              value={landType}
              onChange={(e) => setLandType(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">Tất cả loại đất</option>
              <option value="Thổ cư">Thổ cư (Residential)</option>
              <option value="Nông nghiệp">Nông nghiệp (Agricultural)</option>
              <option value="Thương mại-Dịch vụ">Thương mại-Dịch vụ (Commercial)</option>
            </select>
          </div>
        </div>

        {/* Street Input */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-foreground">Đường/Phố (Tùy chọn)</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Nhập tên đường hoặc phố..."
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            type="submit"
            disabled={!selectedProvince || isLoading}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Đang tìm kiếm...
              </>
            ) : (
              "Tra cứu ngay"
            )}
          </Button>
          <Button
            type="button"
            onClick={handleReset}
            variant="outline"
            className="flex-1 border-border hover:bg-muted text-foreground font-semibold py-2 rounded-lg transition-all bg-transparent"
          >
            Xóa
          </Button>
        </div>
      </form>
    </div>
  )
}
