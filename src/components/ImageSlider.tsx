import { useState, useEffect } from "react";

const images = [
  { src: "books.JPG", alt: "Kim Lab Research" },
  { src: "lecture.JPG", alt: "Kim Lab Research" },
  { src: "nameplate.JPG", alt: "Kim Lab Research" },
  { src: "seminar.JPG", alt: "Kim Lab Research" },
  { src: "support_desk.JPG", alt: "Kim Lab Research" },
  { src: "thesis.JPG", alt: "Kim Lab Research" },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" style={{ paddingTop: "40%" }}>
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
          loading="lazy"
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
