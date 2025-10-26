"use client"

import { CalendarClock } from "lucide-react"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div className="rounded-full bg-primary/10 p-4 text-primary">
              <CalendarClock className="h-12 w-12" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Sắp ra mắt
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Chúng tôi đang phát triển trang Tin Bất động sản với nhiều nội dung hữu ích.
                Hãy quay lại sau nhé!
              </p>
            </div>

            <div className="w-full max-w-sm space-y-4">
              <div className="grid grid-cols-1 gap-4 text-center text-muted-foreground md:grid-cols-3">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Tin thị trường</h2>
                  <p className="text-xs">Cập nhật thường xuyên</p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Phân tích</h2>
                  <p className="text-xs">Chuyên sâu</p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Tư vấn</h2>
                  <p className="text-xs">Chuyên nghiệp</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <a
                href="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
              >
                Về trang chủ
              </a>
              <a
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                Liên hệ với chúng tôi
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}