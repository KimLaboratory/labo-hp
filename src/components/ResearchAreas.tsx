import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Shield,
  Calculator,
  Image,
  QrCodeIcon as Qrcode,
  Laptop,
  Droplet,
} from "lucide-react";

const researchAreas = [
  {
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    title: "モバイルシステム",
    description:
      "スマートフォンやウェブを活用した電子投票や電子商取引などの理論システムの開発と評価。",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: "暗号化、認証、セキュリティ",
    description:
      "暗号化および認証アルゴリズムとプロトコルを研究し、これらの技術を適用するソフトウェアを開発および評価します。",
  },
  {
    icon: <Calculator className="w-8 h-8 text-blue-400" />,
    title: "情報システムの数学的分析",
    description:
      "社会情報システムのモデリング、分析、最適化、予測、数値計算、カオス理論、アルゴリズムを研究しています。",
  },
  {
    icon: <Image className="w-8 h-8 text-blue-400" />,
    title: "コンピュータ画像処理と応用",
    description:
      "デジタル画像を分析および認識し、アルゴリズムを開発し、ソフトウェアを通じて実装する方法を探ります。",
  },
  {
    icon: <Qrcode className="w-8 h-8 text-blue-400" />,
    title: "2Dバーコードの用途",
    description:
      "2次元バーコードの活用状況の調査、アプリケーションソフトウェアの開発、比較評価などを実施します。",
  },
  {
    icon: <Laptop className="w-8 h-8 text-blue-400" />,
    title: "情報教育支援ソフトウェア",
    description: "情報教育を支援するためのソフトの作成と評価を行います。",
  },
  {
    icon: <Droplet className="w-8 h-8 text-blue-400" />,
    title: "電子透かし",
    description:
      "画像の透かしのアルゴリズムやデジタル著作物の保護方式について検討し、ソフトの作成と評価を行います。",
  },
];

export default function ResearchAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <section ref={sectionRef} className="py-24" id="research">
      <div className="relative mb-16">
        <h2
          className={`text-4xl font-bold text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">Research Areas</span>
        </h2>
        <div
          className={`h-0.5 w-24 bg-blue-400 mx-auto mt-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="glassmorphism p-6 card-hover relative transition-all duration-300 ease-out overflow-hidden group"
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex items-center mb-4 relative">
              <div className="p-2 rounded-full bg-white/5 mr-3">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{area.title}</h3>
            </div>
            <p className="text-gray-300 relative z-10">{area.description}</p>

            {/* 装飾的な要素 */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
