const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h3 className="text-xl text-teal-600 mb-2">專注經營會員管理的行銷人</h3>
        <h2 className="text-4xl font-bold mb-8">大家好！我是克萊爾</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        <div className="space-y-4 text-right md:z-10 bg-transparent">
          <p className="text-lg">20年的會員經營顧問</p>
          <p className="text-lg">走過無數彎路累積了豐富的實戰經驗</p>
          <p className="text-lg">在這個部落格，我會用精煉的5分鐘短文</p>
          <p className="text-lg">分享那些真正有效的會員策略</p>
          <p className="text-lg">幫你避開80%新手常見的錯誤</p>
          <p className="text-lg">期待成為你的口袋智囊</p>
          <p className="text-lg">一起打造專屬於你的會員經營方程式</p>
          <p className="text-lg">歡迎在這裡與大家交流討論！</p>
        </div>
        
        <div className="relative h-[500px] overflow-hidden md:absolute md:right-0 md:w-1/2 md:top-1/2 md:-translate-y-1/2">
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