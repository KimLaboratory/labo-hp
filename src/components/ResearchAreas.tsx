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
    icon: <Smartphone className="w-8 h-8 text-gray-700" />,
    title: "モバイルシステム",
    description:
      "スマートフォンやウェブを活用した電子投票や電子商取引などの理論システムの開発と評価。",
  },
  {
    icon: <Shield className="w-8 h-8 text-gray-700" />,
    title: "暗号化、認証、セキュリティ",
    description:
      "暗号化および認証アルゴリズムとプロトコルを研究し、これらの技術を適用するソフトウェアを開発および評価します。",
  },
  {
    icon: <Calculator className="w-8 h-8 text-gray-700" />,
    title: "情報システムの数学的分析",
    description:
      "社会情報システムのモデリング、分析、最適化、予測、数値計算、カオス理論、アルゴリズムを研究しています。",
  },
  {
    icon: <Image className="w-8 h-8 text-gray-700" />,
    title: "コンピュータ画像処理と応用",
    description:
      "デジタル画像を分析および認識し、アルゴリズムを開発し、ソフトウェアを通じて実装する方法を探ります。",
  },
  {
    icon: <Qrcode className="w-8 h-8 text-gray-700" />,
    title: "2Dバーコードの用途",
    description:
      "2次元バーコードの活用状況の調査、アプリケーションソフトウェアの開発、比較評価などを実施します。",
  },
  {
    icon: <Laptop className="w-8 h-8 text-gray-700" />,
    title: "情報教育支援ソフトウェア",
    description: "情報教育を支援するためのソフトの作成と評価を行います。",
  },
  {
    icon: <Droplet className="w-8 h-8 text-gray-700" />,
    title: "電子透かし",
    description:
      "画像の透かしのアルゴリズムやデジタル著作物の保護方式について検討し、ソフトの作成と評価を行います。",
  },
];

export default function ResearchAreas() {
  return (
    <section className="py-20" id="research">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Research Areas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchAreas.map((area, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {area.icon}
              <h3 className="text-xl font-semibold ml-2 text-gray-800">
                {area.title}
              </h3>
            </div>
            <p className="text-gray-600">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
