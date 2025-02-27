import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// 設定 Inter 字體
const inter = Inter({ subsets: ['latin'] })

// 設定網站的基本元數據
export const metadata: Metadata = {
  title: '克萊爾數位煉金室',
  description: '專業的數位轉型與網站開發服務，幫助企業提升線上形象與業務效率',
  keywords: '網站開發, 數位轉型, 網頁設計, 克萊爾數位煉金室',
  authors: [{ name: '克萊爾' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: '克萊爾數位煉金室',
    description: '專業的數位轉型與網站開發服務',
    url: 'https://claire-project.vercel.app/',
    siteName: '克萊爾數位煉金室',
    locale: 'zh_TW',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* 如果需要添加其他 head 元素 */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* 如果需要添加全局組件，例如加載指示器或分析工具 */}
        <div className="min-h-screen">
          {children}
        </div>
        {/* 如果需要添加全局頁尾 */}
      </body>
    </html>
  )
}