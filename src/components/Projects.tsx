import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Pune Real Estate Price Prediction',
      problem: 'Accurate property price estimation using real-world housing data.',
      approach: [
        'Cleaned and standardized inconsistent price formats (L/Cr)',
        'Handled missing values and outliers',
        'Engineered features like price-per-sq-ft',
        'Built regression model using scikit-learn',
      ],
      outcome: [
        'Achieved 81% R² score on test data',
        'Improved interpretability using feature analysis',
      ],
      tech: ['Python', 'Pandas', 'scikit-learn'],
      github: 'https://github.com/VivekLakum/Pune-Real-Estate-Price-Prediction',
    },
    {
      title: 'UrbanNest – Urban Livability Scoring Model',
      problem: 'How to quantitatively rank localities based on livability factors.',
      approach: [
        'Combined housing affordability and AQI data',
        'Normalized heterogeneous datasets',
        'Designed weighted scoring index',
      ],
      outcome: [
        'Generated ranked locality insights',
        'Enabled data-backed relocation decisions',
      ],
      tech: ['Python', 'Data Analysis'],
      github: 'https://github.com/VivekLakum/UrbanNest',
    },
    {
      title: 'Classroom Utilization Analysis',
      problem: 'Inefficient classroom resource allocation.',
      approach: [
        'Analyzed occupancy patterns',
        'Identified underutilized time slots',
        'Generated efficiency metrics',
      ],
      outcome: [
        'Highlighted optimization opportunities',
      ],
      tech: ['Python', 'Data Analysis'],
      github: 'https://github.com/VivekLakum/Classroom-Utilization',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 lg:mb-0">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                >
                  <Github size={18} />
                  View Code
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Problem Statement</h4>
                  <p className="text-gray-300">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Approach</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.approach.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Outcome</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.outcome.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
