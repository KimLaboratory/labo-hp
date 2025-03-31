import { Users, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AboutLab() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0f172a] -z-10"></div>

      {/* 装飾的な背景要素 */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="relative mb-16">
          <h2
            className={`text-4xl font-bold text-center transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-gradient">About the Lab</span>
          </h2>
          <div
            className={`h-0.5 w-24 bg-blue-400 mx-auto mt-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div
            className={`md:w-1/2 glassmorphism p-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              金研究室では、情報セキュリティ（個人認証、暗号、サイバー攻撃）、情報処理、画像処理などのテーマに注力し、処理方法の検討、ソフトウェアやコンテンツの開発、評価を行い、卒業論文としてまとめています。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              また、学生自らがテーマを提案し、教員と議論しながら卒業研究として実行することを奨励しています。個性を重視し、各学生が自分の強みや興味に合わせたユニークな研究テーマに取り組めるようにしています。
            </p>
          </div>
          <div
            className={`md:w-1/2 flex flex-col gap-8 transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <LabFeature
              icon={<Users className="w-8 h-8 text-blue-400" />}
              title="コラボレーション環境"
              description="最先端の研究プロジェクトにおいて、教員や他の学生と緊密に協力します。"
            />
            <LabFeature
              icon={<Lightbulb className="w-8 h-8 text-blue-400" />}
              title="革新的な研究"
              description="斬新なアイデアを探求し、情報セキュリティと処理の進歩に貢献します。"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LabFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glassmorphism p-6 card-hover">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-white/5 neon-border">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
