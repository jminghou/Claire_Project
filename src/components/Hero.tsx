import Card from './UI/Card';

const Hero = () => {
    const cards = [
      { title: "顧客北極星", imageSrc: "/pict/h_icon_01.jpg", id: "customer", buttonLink: "/customer" },
      { title: "商務戰情室", imageSrc: "/pict/h_icon_02.jpg", id: "business", buttonLink: "/business" },
      { title: "行銷科技站", imageSrc: "/pict/h_icon_03.jpg", id: "marketing", buttonLink: "/marketing" },
      { title: "彎道實驗室", imageSrc: "/pict/h_icon_04.jpg", id: "lab", buttonLink: "/lab" }
    ];
    
    return (
      <div className="relative overflow-hidden pt-32 pb-48 min-h-[90vh]">
        {/* 背景容器 */}
        <div className="absolute inset-0">
          {/* 上半部背景 - 淺色 */}
          <div className="absolute inset-x-0 top-0 h-[43.5%] bg-[#f6f5f1]"></div>
          
          {/* 下半部背景 - 保持原有顏色 */}
          <div className="absolute inset-x-0 bottom-0 h-[56.5%] bg-[#e4eae6]"></div>
        </div>
        
        {/* 冰山圖片容器 - 固定寬度並置中，在小螢幕上位置更高，在大螢幕上限制尺寸 */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative -translate-y-24 sm:-translate-y-12 md:translate-y-0" style={{ width: 'min(2200px, 100vw)', maxWidth: 'none' }}>
            <img 
              src="/pict/bg_iceberg.jpg" 
              alt="冰山背景" 
              className="w-full h-auto scale-125 xl:scale-110 2xl:scale-100"
            />
          </div>
        </div>
        
        {/* 內容層 - 置中顯示，在小螢幕上調整位置 */}
        <div className="relative flex flex-col items-center justify-start pt-20 sm:pt-24 md:pt-32">
          <div className="text-center px-4 z-10 mb-8 sm:mb-16 mt-0 sm:mt-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black relative">
              <span className="relative z-10">創作的底層邏輯．就是商業模式的重構</span>
              <span className="absolute inset-0 bg-white/70 blur-md -z-0 rounded-lg"></span>
            </h1>
          </div>
          
          {/* 四張卡片 */}
          <div className="container mx-auto px-4 z-10 mt-12 sm:mt-20">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-8">
              {cards.map((card) => (
                <Card 
                  key={card.id}
                  title={card.title}
                  imageSrc={card.imageSrc}
                  buttonLink={card.buttonLink}
                  id={card.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero