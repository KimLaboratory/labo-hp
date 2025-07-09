import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { infoItems } from "../data/informationData";

// サマリを100文字で制限する関数
const truncateSummary = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export default function Information() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleCardClick = (index: number) => {
    navigate(`/information/${index}`);
  };

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto">
      {infoItems.map((item, index) => {
        return (
          <div
            key={index}
            className={`py-8 cursor-pointer hover:opacity-40 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            } ${index !== infoItems.length - 1 ? "border-b border-gray-700" : ""}`}
            style={{ 
              transitionDelay: `${index * 150}ms`,
              transition: isVisible ? 'opacity 1s ease-out, transform 1s ease-out' : 'none'
            }}
            onClick={() => handleCardClick(index)}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-white flex-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400 ml-6 whitespace-nowrap">
                {item.date}
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {truncateSummary(item.summary)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
