import Card from './UI/Card';

const Hero = () => {
    const cards = [
      { title: "顧客北極星", imageSrc: "", id: "customer", buttonLink: "/customer" },
      { title: "商務戰情室", imageSrc: "", id: "business", buttonLink: "/business" },
      { title: "行銷科技站", imageSrc: "", id: "marketing", buttonLink: "/marketing" },
      { title: "彎道實驗室", imageSrc: "", id: "lab", buttonLink: "/lab" }
    ];
    
    return (
      <div className="min-h-screen relative overflow-hidden pt-20">
        {/* 背景容器 */}
        <div className="absolute inset-0">
          {/* 上半部背景 - 淺色 */}
          <div className="absolute inset-x-0 top-0 h-[43.5%] bg-[#f6f5f1]"></div>
          
          {/* 下半部背景 - 保持原有顏色 */}
          <div className="absolute inset-x-0 bottom-0 h-[56.5%] bg-[#e4eae6]"></div>
        </div>
        
        {/* 冰山圖片容器 - 固定寬度並置中，在小螢幕上位置更高，在大螢幕上限制尺寸 */}
        <div className="absolute inset-0 flex items-center sm:items-center justify-center overflow-hidden">
          <div className="relative -translate-y-36 sm:translate-y-0" style={{ width: 'min(2200px, 100vw)', maxWidth: 'none' }}>
            <img 
              src="/pict/bg_iceberg.jpg" 
              alt="冰山背景" 
              className="w-full h-auto scale-150 xl:scale-125 2xl:scale-100"
            />
          </div>
        </div>
        
        {/* 內容層 - 置中顯示，在小螢幕上調整位置 */}
        <div className="absolute inset-0 flex flex-col items-center justify-start sm:justify-center pt-32 sm:pt-0">
          <div className="text-center px-4 z-10 mb-6 sm:mb-16 mt-0 sm:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black relative">
              <span className="relative z-10">創作的底層邏輯．就是商業模式的重構</span>
              <span className="absolute inset-0 bg-white/70 blur-md -z-0 rounded-lg"></span>
            </h1>
          </div>
          
          {/* 四張卡片 */}
          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              {cards.map((card) => (
                <Card 
                  key={card.id}
                  title={card.title}
                  imageSrc={card.imageSrc}
                  buttonLink={card.buttonLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero