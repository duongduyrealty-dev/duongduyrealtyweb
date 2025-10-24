"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Dương Duy Realty Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Dương Duy Realty</h1>
              <p className="text-xs text-muted-foreground">Chuyên bất động sản khu vực Đồng Nai</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Trang chủ
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Tra cứu Giá
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Tin Bất động sản
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Liên hệ
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            <a href="#" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Trang chủ
            </a>
            <a href="#" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Tra cứu Giá
            </a>
            <a href="#" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Tin Bất động sản
            </a>
            <a href="#" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Liên hệ
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
