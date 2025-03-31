import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Research = {
  year: number;
  items: {
    name: string;
    title: string;
    content: string;
  }[];
};

const researchData: Research[] = [
  {
    year: 2025,
    items: [
      {
        name: "小幡優斗",
        title: "社会での画像処理の実用性とAIを組み合わせた今後の拡充性について",
        content: "",
      },
      {
        name: "土屋翔吾",
        title:
          "日本語スパムメール分類のためのディープラーニングとベイジアンニューラルネットワークの比較分析",
        content:
          "Naive Bayes ClassifierのBernoulliNBと通常ニューラルネットワーク、ニューラルネットワークの重みにベイズ推定を利用したベイジアンニューラルネットワークの3つでスパムメールの分類を行い、各モデルの正確性を検証する予定",
      },
      { name: "中野渡凌輔", title: "AI教育の活用法", content: "" },
      { name: "山本将叶", title: "未定", content: "" },
    ],
  },
  {
    year: 2024,
    items: [
      {
        name: "姥貝智也",
        title: "電子透かしによる個人情報やプライバシー保護への取り組み",
        content: "",
      },
      {
        name: "叶家豪",
        title: "ChatGPT4を使用した小説や児童書の作成における危険性と対処方法",
        content: "",
      },
      {
        name: "李大優",
        title: "ChatGPT4での大学レポート作成における対策方法",
        content: "",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        name: "橋本辰治",
        title:
          "コンテナオーケストレーション技術を用いた秘密分散ベースでのマルチパーティ計算システムの安全性と評価",
        content:
          "情報セキュリティに関する課題とその解決策としての秘密分散ベースのマルチパーティ計算システムの開発について述べています。インターネット上でのデータ通信が増加する中、サイバー攻撃のリスクも高まっており、従来の暗号化技術では量子コンピュータに対抗できない可能性があります。そのため、新たなセキュリティ技術が求められています。 本論文では、クラウドプラットフォームを活用し、秘密分散ベースのマルチパーティ計算システムを開発することを目的としています。このシステムは、エンタープライズ向けの複雑な構築を簡略化し、プライバシー保護を重視した計算処理を実現することを目指しています。",
      },
      {
        name: "郭政揚",
        title: "個人モバイル機に電子透かし技術を用いた個人認証方式と提案",
        content:
          "現代の高速化社会における効率的な個人認証の必要性と、電子透かし技術を用いたモバイル機での個人認証の利便性について述べています。インターネットの発達と新型コロナウイルスの影響により、非接触での迅速な個人認証方法が求められています。 この研究では、モバイル機を利用して電子透かし入りの個人認証を行う方法を提案しています。従来のICカードによる個人認証に代わり、電子透かし技術を用いてカード情報をモバイル機で読み取る仕組みです。これにより、認証時間の短縮と利便性の向上が期待されます。 具体的には、学生証に電子透かしを埋め込み、モバイル機で認証を行うシステムを提案しています。これにより、試験や手続きにおける本人確認が迅速かつ便利になります。モバイル機を用いた電子透かし入り学生証の導入で、学生が必要な時に学生証を持ち歩かずとも、電子学生証で認証が可能となります。 このシステムの導入により、個人認証の効率化と利便性の向上が見込まれます。",
      },
      {
        name: "何睿",
        title: "二次元コードの電子決済システムの現状と未来の考察",
        content:
          "二次元コードを用いた電子決済システムの現状と将来の進化について焦点を当てています。このレポートの目的は、二次元コードを介した決済システムの重要性、利点、課題について深く理解し、その技術がビジネスと消費者に与える影響を検討することです。 レポートでは、二次元コードを使用した主要な決済システムの仕組みや技術、市場動向、競合状況を解説しています。二次元コード決済の普及により、取引の迅速性やセキュリティが向上している一方で、特定の課題やセキュリティリスクも浮き彫りになっています。 このレポートでは、二次元コード決済がもたらすビジネスと消費者への機会や課題について深く考察し、特に将来の発展や改善が期待される点を明らかにしています。効率性や利便性が高まる一方で、セキュリティの強化が求められるこの技術が、今後ますます普及していくと考えられます。",
      },
      {
        name: "上園紬真",
        title: "日本の地方選挙における投票所入場券の電子化する方法の提案",
        content:
          "電子投票システムの利便性と安全性について述べています。電子投票の導入は、選挙の不正防止や投票率向上を目的としており、スマートフォンを利用した投票システムが注目されています。2013年の香川県高松市の参議院選挙での票不足事件をきっかけに、電子投票の必要性が浮き彫りになりました。 電子投票のメリットとして、ボタンやタッチ式で簡単に投票できることが挙げられます。エストニアでは、選挙日の10日前から投票できるシステムや身分証明書を使用した投票方法があり、特にモバイルIDを利用した投票は認証が不要で利便性が高いです。 本論文では、プロトタイプを用いた投票システムの開発と評価についても触れています。携帯電話機での顔認証や2次元コードを利用した個人認証は、紛失のリスクが低く、顔画像の正確性が高いため、認証の効率化と安全性の向上が期待されます。 このように、電子投票システムは利便性と安全性のバランスを取りつつ、選挙の透明性と信頼性を高める手段として有望です。",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        name: "西川巧馬",
        title: "身分証明書の電子化と認証システムの導入における今後の展望",
        content:
          "スマートフォンの普及とインターネットの発達に伴う非接触技術の重要性について述べています。特に、スマートフォンを利用した電子決済と二次元コード技術の本人確認への応用に焦点を当てています。 スマートフォンを使った電子決済は、二次元コードやバーコードを利用して支払いが行われています。この技術を本人確認にも応用することで、確認にかかる時間の短縮と利便性の向上が期待されます。現在、多くの身分証明書はICチップを内蔵した「電子証明書」となっており、2001年の「電子署名及び認証業務に関する法律」によって普及が進んでいます。 当大学では、ICチップのない学生証を使用しているため、本人確認に時間がかかることが多々あります。これに対し、スマートフォンを利用した電子証明書の発行と認証システムを導入することで、利便性の向上、業務の効率化、本人確認にかかる時間の短縮が可能となると考えられます。",
      },
      {
        name: "石冰清",
        title: "Pythonによる暗号プログラミングの応用モデル",
        content:
          "情報の安全を守るための暗号技術と、その実装におけるPythonの利点について述べています。インターネットの普及に伴い、情報保護が重要となり、暗号技術が不可欠です。Pythonはシンプルで学びやすく、暗号アルゴリズムの実装に適しています。論文では、RSA、AES、3DESの3種類の暗号化アルゴリズムの原理と実装方法を解説し、デジタル署名やキャンパスネットワークセキュリティなどの具体的な応用例を示しています。",
      },
    ],
  },
];

export default function PastResearch() {
  const [expandedYears, setExpandedYears] = useState<number[]>([
    researchData[0].year,
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);
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

  const toggleYear = (year: number) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year],
    );
  };

  return (
    <div ref={sectionRef} className="space-y-6">
      {researchData.map((research, idx) => (
        <div
          key={research.year}
          className={`glassmorphism overflow-hidden transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          <button
            onClick={() => toggleYear(research.year)}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/10 transition-colors duration-200"
          >
            <span className="text-xl font-semibold text-white">{research.year}年度</span>
            {expandedYears.includes(research.year) ? (
              <ChevronUp className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-400" />
            )}
          </button>
          {expandedYears.includes(research.year) && (
            <div className="p-6 space-y-5">
              {research.items.map((item, index) => (
                <div 
                  key={index} 
                  className="glassmorphism p-5 bg-white/5"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
                  <h4 className="text-base font-medium mb-4 text-blue-300">
                    {item.title}
                  </h4>
                  {item.content && (
                    <p className="text-sm text-gray-300">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
