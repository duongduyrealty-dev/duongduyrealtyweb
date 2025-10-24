"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import SearchForm from "@/components/search-form"
import ResultsTable from "@/components/results-table"
import Footer from "@/components/footer"
import { landPriceData } from "@/lib/data"

export default function Home() {
  const [searchResults, setSearchResults] = useState<typeof landPriceData>([])
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
      let results = landPriceData

      if (filters.province) {
        results = results.filter((item) => item.province === filters.province)
      }
      if (filters.district) {
        results = results.filter((item) => item.district === filters.district)
      }
      if (filters.ward) {
        results = results.filter((item) => item.ward === filters.ward)
      }
      if (filters.street) {
        results = results.filter((item) => item.street.toLowerCase().includes(filters.street!.toLowerCase()))
      }
      if (filters.landType) {
        results = results.filter((item) => item.landType === filters.landType)
      }

      setSearchResults(results)
      setHasSearched(true)
      setIsLoading(false)
    }, 600)
  }

  const handleReset = () => {
    setSearchResults([])
    setHasSearched(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-8 md:py-12">
          <SearchForm onSearch={handleSearch} onReset={handleReset} isLoading={isLoading} />
          {hasSearched && <ResultsTable results={searchResults} isLoading={isLoading} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}
