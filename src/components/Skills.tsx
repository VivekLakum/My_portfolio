export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'Java', 'SQL (MySQL)'],
    },
    {
      title: 'Machine Learning',
      skills: ['Regression Modeling', 'Feature Engineering', 'Model Evaluation', 'Data Preprocessing'],
    },
    {
      title: 'Data & Analytics',
      skills: ['Exploratory Data Analysis (EDA)', 'Statistical Modeling', 'Data Cleaning & Transformation'],
    },
    {
      title: 'Libraries & Tools',
      skills: ['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Git'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Core Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:border-blue-500 hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
