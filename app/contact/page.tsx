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

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidVietnamesePhone = (phone: string) => {
  // Định dạng số điện thoại Việt Nam:
  // - Bắt đầu bằng 03, 05, 07, 08, 09
  // - Theo sau bởi 8 chữ số
  const phoneRegex = /^(03|05|07|08|09)[0-9]{8}$/
  // Loại bỏ khoảng trắng, dấu gạch ngang và dấu chấm
  const cleanPhone = phone.replace(/[\s.-]/g, '')
  return phoneRegex.test(cleanPhone)
}

const isValidName = (name: string) => {
  return name.trim().length >= 2
}

const isValidMessage = (message: string) => {
  return message.trim().length > 0
}

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Hàm validate form
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!isValidName(name)) {
      newErrors.name = 'Tên phải có ít nhất 2 ký tự'
    }

    if (!isValidEmail(email)) {
      newErrors.email = 'Email không hợp lệ'
    }

    if (!isValidVietnamesePhone(phone)) {
      newErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ'
    }

    if (!isValidMessage(message)) {
      newErrors.message = 'Vui lòng nhập nội dung tin nhắn'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Kiểm tra form trước khi gửi
    if (!validateForm()) {
      toast({
        title: 'Lỗi',
        description: 'Vui lòng kiểm tra lại thông tin.',
        variant: 'destructive'
      })
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.replace(/[\s.-]/g, ''), // Cleanup phone number
          message: message.trim()
        }),
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
                  <div className="space-y-2">
                    <Input
                      placeholder="Họ và tên"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Input
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={isSubmitting}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      placeholder="Hãy cho chúng tôi biết bạn đang quan tâm đến điều gì. Chúng tôi sẽ sớm liên hệ để hỗ trợ bạn."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSubmitting}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
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
