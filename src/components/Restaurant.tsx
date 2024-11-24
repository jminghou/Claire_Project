const Restaurant = () => {
    return (
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">餐廳介紹</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-64">
            {/* 餐廳圖片 */}
          </div>
          <div>
            <p className="text-lg">餐廳介紹內容...</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Restaurant