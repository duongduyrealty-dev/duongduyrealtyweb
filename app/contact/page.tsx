"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactCard from "@/components/contact-card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // basic validation
    if (!name || !email || !phone || !message) {
      toast({ title: "Thiếu thông tin", description: "Vui lòng điền đầy đủ các trường có dấu *." })
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
        cache: 'no-store' // Thêm để tránh cache
      })

      const data = await res.json()
      if (!res.ok) {
        console.error('Lỗi API', {
          status: res.status,
          data,
          url: '/api/contact'
        })
        toast({
          title: 'Lỗi',
          description: data?.detail || data?.error || 'Không thể gửi tin nhắn.'
        })
        return
      }

      toast({ title: 'Gửi thành công', description: 'Chúng tôi đã nhận được tin nhắn của bạn.' })

      // reset
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } catch (err) {
      console.error('Lỗi gửi form:', err)
      toast({
        title: 'Lỗi kết nối',
        description: 'Không thể kết nối tới máy chủ. Vui lòng kiểm tra mạng và thử lại.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-sm text-muted-foreground mt-2">Chúng tôi luôn sẵn sàng trả lời mọi câu hỏi của bạn về lĩnh vực đầu tư Bất Động Sản. Hãy liên hệ với chúng tôi ngay hôm nay.</p>
          </div>

          <div className="border-t border-border mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <ContactCard />
            </div>

            <div className="md:col-span-7">
              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Gửi Tin Nhắn</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Họ và Tên *</label>
                    <Input placeholder="Nhập tên của bạn" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <Input placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Số Điện Thoại *</label>
                    <Input placeholder="Ví dụ: 0964.198.005" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Tin Nhắn *</label>
                    <Textarea placeholder="Nhập tin nhắn của bạn..." value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>

                  <div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}
