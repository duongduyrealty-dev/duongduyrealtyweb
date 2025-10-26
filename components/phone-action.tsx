"use client"

import { useState } from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

type Props = {
  phone: string // e.g. +84964198005
  display?: string // what to show in UI
  showIcon?: boolean
}

export default function PhoneAction({ phone, display, showIcon = true }: Props) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const normalizeForTel = (p: string) => {
    // ensure starts with + and digits only
    return p.replace(/[^+0-9]/g, "")
  }

  const isMobile = () => {
    if (typeof navigator === "undefined") return false
    const ua = navigator.userAgent || ""
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(ua)
  }

  const zaloWeb = `https://zalo.me/${phone.replace(/[^0-9]/g, "")}`

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (isMobile()) {
      e.preventDefault()
      setOpen(true)
    } else {
      // desktop: open Zalo web in new tab
      // allow default anchor (we use href)
    }
  }

  const handleCall = () => {
    const tel = `tel:${normalizeForTel(phone)}`
    window.location.href = tel
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(display || phone)
      toast({ title: "Đã sao chép", description: `Số ${display || phone} đã được sao chép vào clipboard.` })
    } catch (err) {
      toast({ title: "Không thể sao chép", description: "Trình duyệt không cho phép sao chép." })
    } finally {
      setOpen(false)
    }
  }

  const handleOpenZalo = () => {
    // Attempt to open Zalo (web). On mobile this may prompt to open app if available.
    // Open in a new tab instead of replacing current page
    window.open(zaloWeb, "_blank")
  }

  return (
    <div className="relative inline-block">
      <a
        href={zaloWeb}
        onClick={handleClick}
        className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
        aria-label={`Gọi hoặc mở Zalo ${display || phone}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {showIcon && (
          <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
            <Phone className="w-4 h-4 text-foreground" />
          </span>
        )}
        <span>{display || phone}</span>
      </a>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          <div className="relative w-full max-w-md bg-card rounded-lg border border-border p-4 shadow-lg">
            <div className="mb-3">
              <p className="text-sm font-medium">Số điện thoại</p>
              <p className="text-sm text-muted-foreground">{display || phone}</p>
            </div>

            <div className="flex flex-col gap-2">
              <Button variant="default" onClick={handleCall}>Gọi</Button>
              <Button variant="outline" onClick={handleCopy}>Sao chép số</Button>
              <Button variant="ghost" onClick={handleOpenZalo}>Mở Zalo</Button>
              <Button variant="link" onClick={() => setOpen(false)}>Đóng</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
