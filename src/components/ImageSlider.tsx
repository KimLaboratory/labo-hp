import { useState, useEffect, useRef } from "react";

const images = [
  { src: "lecture.JPG", alt: "Kim Lab Research" },
  { src: "seminar.JPG", alt: "Kim Lab Research" },
  { src: "thesis.JPG", alt: "Kim Lab Research" },
  { src: "books.JPG", alt: "Kim Lab Research" },
  { src: "nameplate.JPG", alt: "Kim Lab Research" },
  { src: "support_desk.JPG", alt: "Kim Lab Research" },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ paddingTop: "40%" }}>
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a] opacity-80 z-10"></div>
      
      {/* メインスライダー */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            } ${isTransitioning ? "blur-sm" : ""}`}
            style={{
              transition: isTransitioning ? 'all 0.5s ease-in-out' : 'none'
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      
      {/* 装飾的なフローティング要素 */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-white/10 rounded-full animate-float opacity-30" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-white/10 rounded-full animate-float opacity-30" style={{ animationDelay: "2s" }}></div>
      </div>
      
      {/* オーバーレイテキスト */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-8 py-6 max-w-2xl mx-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg animate-fadeIn">
            <span className="text-gradient">Kim Lab</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-xl mx-auto animate-fadeIn opacity-90">
            情報セキュリティと教育の最先端研究
          </p>
        </div>
      </div>
      
      {/* ナビゲーションボタン */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* インジケーター */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              index === currentIndex 
                ? "bg-blue-400 w-8 h-1 neon-border" 
                : "bg-gray-400/50 w-4 h-1"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
