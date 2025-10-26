"use client"

import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react"
import PhoneAction from "@/components/phone-action"

export default function ContactCard() {
  return (
    <div className="space-y-6">
      {/* Main contact info card */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4">Thông Tin Liên Hệ</h3>

        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Phone className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Điện Thoại / Zalo</p>
              <div className="text-sm text-muted-foreground mt-0.5">
                <PhoneAction phone="+84964198005" display="(+84) 964.198.005" showIcon={false} />
              </div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Mail className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">duongduy.realty@gmail.com</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <MapPin className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Địa Chỉ</p>
              <p className="text-sm text-muted-foreground">Phường Long Khánh<br/>Tỉnh Đồng Nai, Việt Nam</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Follow card */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <h4 className="text-sm font-semibold mb-4">Theo Dõi Chúng Tôi</h4>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/duongduyrealty/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
