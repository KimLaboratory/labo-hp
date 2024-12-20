import { Users, Lightbulb } from "lucide-react";

export default function AboutLab() {
  return (
    <section className="py-20 bg-gray-100" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          About the Lab
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 mb-4">
              金研究室では、情報セキュリティ（個人認証、暗号、サイバー攻撃）、情報処理、画像処理などのテーマに注力し、処理方法の検討、ソフトウェアやコンテンツの開発、評価を行い、卒業論文としてまとめています。
            </p>
            <p className="text-lg text-gray-600 mb-4">
              また、学生自らがテーマを提案し、教員と議論しながら卒業研究として実行することを奨励しています。個性を重視し、各学生が自分の強みや興味に合わせたユニークな研究テーマに取り組めるようにしています。
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col gap-8">
            <LabFeature
              icon={<Users className="w-8 h-8 text-gray-700" />}
              title="コラボレーション環境"
              description="最先端の研究プロジェクトにおいて、教員や他の学生と緊密に協力します。"
            />
            <LabFeature
              icon={<Lightbulb className="w-8 h-8 text-gray-700" />}
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
    <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
