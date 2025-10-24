export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-12 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tra cứu Bảng Giá Đất Chính Thức
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Nhập địa điểm để xem giá đất theo Quyết định UBND tỉnh đến năm 2025
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-2xl">📍</span>
              <span className="text-sm font-medium text-foreground">Toàn quốc</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
              <span className="text-2xl">📊</span>
              <span className="text-sm font-medium text-foreground">Dữ liệu cập nhật</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-2xl">✓</span>
              <span className="text-sm font-medium text-foreground">Chính xác</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
