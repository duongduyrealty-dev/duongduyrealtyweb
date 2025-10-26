import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const TELEGRAM_TOPIC_ID = process.env.TELEGRAM_TOPIC_ID

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('Thiếu biến môi trường cần thiết:', {
    TELEGRAM_BOT_TOKEN: !!TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: !!TELEGRAM_CHAT_ID,
    TELEGRAM_TOPIC_ID: !!TELEGRAM_TOPIC_ID 
  })
}

export async function POST(request: Request) {
  try {
    console.log('Đã nhận yêu cầu gửi form liên hệ')

    // Kiểm tra biến môi trường
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Chưa cấu hình biến môi trường')
      return NextResponse.json(
        { error: 'Lỗi cấu hình máy chủ', detail: 'Thiếu biến môi trường' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, message } = body

    // Kiểm tra các trường bắt buộc
    if (!name || !email || !phone || !message) {
      console.error('Thiếu các trường bắt buộc:', {
        name: !!name,
        email: !!email,
        phone: !!phone,
        message: !!message
      })
      return NextResponse.json(
        { error: 'Thiếu thông tin', detail: 'Vui lòng điền đầy đủ thông tin' },
        { status: 400 }
      )
    }

    // Định dạng tin nhắn cho Telegram
    const telegramMessage = `
📨 Bạn có 1 yêu cầu liên hệ mới

👤 Tên khách hàng: ${name}
📧 Email: ${email}
📱 Số điện thoại: ${phone}
💬 Nội dung:
${message}
    `.trim()

    console.log('Đang gửi tin nhắn tới Telegram...')
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          message_thread_id: TELEGRAM_TOPIC_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }
    )

    const telegramData = await telegramResponse.json()
    console.log('Phản hồi từ API Telegram:', telegramData)

    if (!telegramResponse.ok) {
      console.error('Lỗi API Telegram:', {
        status: telegramResponse.status,
        data: telegramData
      })
      return NextResponse.json(
        { error: 'Không thể gửi tin nhắn', detail: 'Lỗi kết nối với Telegram' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, message: 'Đã gửi tin nhắn thành công' })
  } catch (error) {
    console.error('Lỗi không mong đợi trong API liên hệ:', error)
    return NextResponse.json(
      { error: 'Lỗi máy chủ', detail: 'Đã xảy ra lỗi không mong đợi' },
      { status: 500 }
    )
  }
}
