import { Beaker, Lock, Cpu } from "lucide-react";

export default function Introduction() {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Introduction to Kim Lab
      </h2>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
        松蔭大学
        金研究室では、個人認証、暗号、情報セキュリティ、情報教育を支援するソフトウェアなどの最先端の研究を通じて、学生の成長をサポートしています。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Beaker className="w-12 h-12 text-gray-700" />}
          title="最先端の研究"
          description="情報セキュリティと処理の最新情報を探ります。"
        />
        <FeatureCard
          icon={<Lock className="w-12 h-12 text-gray-700" />}
          title="暗号化とセキュリティ"
          description="高度なセキュリティシステムを開発および評価します。"
        />
        <FeatureCard
          icon={<Cpu className="w-12 h-12 text-gray-700" />}
          title="情報教育"
          description="現代の情報教育をサポートするソフトウェアを作成します。"
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
