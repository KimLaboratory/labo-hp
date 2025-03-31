import { Beaker, Lock, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
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
      }
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

  return (
    <section ref={sectionRef} className="pb-16 pt-16 relative">
      {/* 装飾的な背景要素 */}
      <div 
        className={`absolute top-20 right-40 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`} 
        style={{ animationDelay: "300ms" }}
      ></div>
      <div 
        className={`absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 blur-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`} 
        style={{ animationDelay: "500ms" }}
      ></div>
      
      <h2 
        className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="text-gradient">Introduction to Kim Lab</span>
      </h2>
      
      <div 
        className={`h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      ></div>
      
      <p 
        className={`text-lg text-gray-300 mb-16 max-w-3xl mx-auto text-center transition-all duration-1000 delay-300 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        松蔭大学
        金研究室では、個人認証、暗号、情報セキュリティ、情報教育を支援するソフトウェアなどの最先端の研究を通じて、学生の成長をサポートしています。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
        {/* 接続線の装飾 */}
        <div 
          className={`absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 hidden md:block transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        ></div>
        
        <FeatureCard
          icon={<Beaker className="w-12 h-12 text-blue-400" />}
          title="最先端の研究"
          description="情報セキュリティと処理の最新情報を探ります。"
          delay={0}
          isVisible={isVisible}
          index={0}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <FeatureCard
          icon={<Lock className="w-12 h-12 text-blue-400" />}
          title="暗号化とセキュリティ"
          description="高度なセキュリティシステムを開発および評価します。"
          delay={200}
          isVisible={isVisible}
          index={1}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <FeatureCard
          icon={<Cpu className="w-12 h-12 text-blue-400" />}
          title="情報教育"
          description="現代の情報教育をサポートするソフトウェアを作成します。"
          delay={400}
          isVisible={isVisible}
          index={2}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
  isVisible,
  index,
  activeCard,
  setActiveCard,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
  index: number;
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
}) {
  const isActive = activeCard === index;
  
  return (
    <div 
      className={`relative glassmorphism p-8 transition-all duration-700 ease-out overflow-hidden group ${
        isActive ? "scale-105 shadow-lg shadow-blue-500/20" : ""
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? isActive ? 'translateY(-10px)' : 'translateY(0)' 
          : 'translateY(40px)',
        borderColor: isActive ? 'rgba(96, 165, 250, 0.5)' : 'rgba(255, 255, 255, 0.1)'
      }}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {/* 装飾的な背景エフェクト */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transitionDelay: "150ms" }}></div>
      
      <div className="flex justify-center mb-6 relative">
        <div className={`p-4 rounded-full bg-white/5 transition-all duration-500 ${
          isActive ? "neon-border bg-gradient-to-br from-blue-500/20 to-purple-500/20" : ""
        }`}>
          {icon}
        </div>
      </div>
      
      <h3 className={`text-xl font-semibold mb-4 text-center transition-all duration-500 ${
        isActive ? "text-gradient" : "text-white"
      }`}>
        {title}
      </h3>
      
      <p className="text-gray-300 text-center relative z-10">{description}</p>
      
      {/* ホバー時の装飾ライン */}
      <div 
        className={`h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-5 transition-all duration-500 ${
          isActive ? "w-16" : "w-0"
        }`}
      ></div>
    </div>
  );
}
