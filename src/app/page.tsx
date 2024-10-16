export default function Home() {
  const images = ["/assets/1.jpg","/assets/2.jpg","/assets/3.jpg","/assets/4.jpg"]
  return (
    <>
      <div className="h-full w-full min-h-screen bg-[#212121] flex items-center justify-center">
        <section className="bg-[#383838] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-orange-500 tracking-tight mb-8">
              Hero Section Gallery built in NextJS 
            </h1>
            <p className="text-lg text-orange-500 font-light mb-12">
              Check out some of our best shots!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-gray-300 rounded-lg shadow-lg aspect-square"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
