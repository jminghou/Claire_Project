import Image from 'next/image'

const Pain = () => {
  return (
    <div className="container mx-auto px-6 text-white bg-[#415f61] py-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-lg mb-2 text-[#adccc5] font-light">關於會員經營</p>
        <h2 className="text-4xl font-bold text-center mb-10">你有這些困擾嗎？</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 左側欄 */}
          <div className="flex flex-col justify-between">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">招募效率低</h3>
              <p className="text-sm mb-1 text-[#adccc5] font-light">投入大量行銷資源</p>
              <p className="text-sm text-[#adccc5] font-light">卻無法有效吸引目標客群加入會員</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">互動率不足</h3>
              <p className="text-sm mb-1 text-[#adccc5] font-light">會員加入後缺乏持續參與感</p>
              <p className="text-sm text-[#adccc5] font-light">逐漸淪為沉睡帳號</p>
            </div>
          </div>
          
          {/* 中間欄 - 圖片 */}
          <div className="flex items-center justify-center">
            <Image 
              src="/pict/peo_icon.svg"
              alt="People Icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '60%', height: 'auto', maxWidth: '200px' }}
              priority
            />
          </div>
          
          {/* 右側欄 */}
          <div className="flex flex-col justify-between">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">流失率高</h3>
              <p className="text-sm mb-1 text-[#adccc5] font-light">無法即時掌握流失原因</p>
              <p className="text-sm text-[#adccc5] font-light">也缺乏有效的會員回流機制</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">缺乏分析</h3>
              <p className="text-sm mb-1 text-[#adccc5] font-light">擁有會員數據但不懂得解讀與應用</p>
              <p className="text-sm text-[#adccc5] font-light">無法從中優化經營策略</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pain