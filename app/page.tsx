"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import SearchForm from "@/components/search-form"
import LandPriceDetailTable from "@/components/land-price-detail-table"
import Footer from "@/components/footer"
import { landPriceDetailData } from "@/lib/data"

export default function Home() {
  const [detailSearchResults, setDetailSearchResults] = useState<typeof landPriceDetailData>([])
  const [hasSearched, setHasSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (filters: {
    province?: string
    district?: string
    ward?: string
    street?: string
    landType?: string
  }) => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // Lọc dữ liệu chi tiết theo tên đường
      let detailResults = landPriceDetailData
      if (filters.street) {
        detailResults = detailResults.filter((item) =>
          item.streetName.toLowerCase().includes(filters.street!.toLowerCase())
        )
      }

      setDetailSearchResults(detailResults)
      setHasSearched(true)
      setIsLoading(false)
    }, 600)
  }

  const handleReset = () => {
    setDetailSearchResults([])
    setHasSearched(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-8 md:py-12">
          <SearchForm onSearch={handleSearch} onReset={handleReset} isLoading={isLoading} />

          {/* Hiển thị bảng dữ liệu chi tiết */}
          {hasSearched && <LandPriceDetailTable results={detailSearchResults} isLoading={isLoading} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}
