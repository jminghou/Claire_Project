const Footer = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-6">數位煉金室</h2>
          <p className="text-[#adccc5] mb-2">你的口袋智囊，淬鍊20年實戰精華，</p>
          <p className="text-[#adccc5] mb-2">5分鐘掌握一則關鍵，提供數位轉型的</p>
          <p className="text-[#adccc5] mb-2">實戰案例。</p>
        </div>
        
        <div className="flex justify-end items-end">
          <p className="text-sm text-[#adccc5]">BetweenGos © 2015-2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
