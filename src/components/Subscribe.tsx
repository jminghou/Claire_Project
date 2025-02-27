const Subscribe = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">訂閱我，每週給你實用案例</h2>
        <p className="text-teal-600 mb-2">每週精選會員管理的實用案例，不漏接任何新消息</p>
        <p className="text-teal-600 mb-8">希望陪你在會員管理的路上得心應手。</p>
      </div>
      
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
        <input 
          type="text" 
          placeholder="如何稱呼您？" 
          className="flex-1 p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input 
          type="email" 
          placeholder="輸入您的 email" 
          className="flex-1 p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      
      <div className="text-center">
        <button className="bg-[#415f61] text-white py-3 px-12 rounded-full text-lg font-medium hover:bg-[#344b4d] transition-colors shadow-md">
          免費訂閱
        </button>
      </div>
    </div>
  )
}

export default Subscribe