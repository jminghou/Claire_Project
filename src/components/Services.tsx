const Services = () => {
    return (
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">煉金觀點</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">置頂文章 1</h3>
            <p>觀點洞見...</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">置頂文章 2</h3>
            <p>觀點洞見...</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">置頂文章 3</h3>
            <p>觀點洞見...</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Services