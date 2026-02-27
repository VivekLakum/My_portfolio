import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Achievements</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition-colors">
            <div className="flex items-start gap-4">
              <Award className="text-blue-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Certificate of Appreciation for Academic Excellence
                </h3>
                <p className="text-gray-400">Academic Year 2024–25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
