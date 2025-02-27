const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 w-full">
      <div className="text-center mb-10">
        <h3 className="text-xl text-teal-600 mb-2">專注經營會員管理的行銷人</h3>
        <h2 className="text-4xl font-bold mb-8">大家好！我是克萊爾</h2>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        <div className="space-y-3 text-center md:text-right md:z-10 bg-transparent">
          <p className="text-sm text-[#415f61] leading-relaxed">20年的會員經營顧問</p>
          <p className="text-sm text-[#415f61] leading-relaxed">走過無數彎路累積了豐富的實戰經驗</p>
          <p className="text-sm text-[#415f61] leading-relaxed">在這個部落格，我會用精煉的5分鐘短文</p>
          <p className="text-sm text-[#415f61] leading-relaxed">分享那些真正有效的會員策略</p>
          <p className="text-sm text-[#415f61] leading-relaxed">幫你避開80%新手常見的錯誤</p>
          <p className="text-sm text-[#415f61] leading-relaxed">期待成為你的口袋智囊</p>
          <p className="text-sm text-[#415f61] leading-relaxed">一起打造專屬於你的會員經營方程式</p>
          <p className="text-sm text-[#415f61] leading-relaxed">歡迎在這裡與大家交流討論！</p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] mt-8 md:mt-0 overflow-hidden md:absolute md:right-0 md:w-1/2 md:top-1/2 md:-translate-y-1/2 xl:right-[calc(50%-600px)]">
          <img 
            src="/pict/portraits-2.png" 
            alt="克萊爾的照片" 
            className="absolute right-0 h-full object-cover object-right"
          />
        </div>
      </div>
    </div>
  )
}

export default About