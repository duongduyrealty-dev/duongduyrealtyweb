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
            TRA CỨU BẢNG GIÁ ĐẤT ĐỀ XUẤT DỰ KIẾN 2026
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Lưu ý: Đây chỉ là bảng giá đề xuất dự kiến của UBND Tỉnh Đồng Nai.
          </p>
        </div>
      </div>
    </section>
  )
}
