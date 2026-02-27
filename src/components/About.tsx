import { GraduationCap, TrendingUp, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "AI & ML undergraduate with 8.6+ CGPA",
    },
    {
      icon: TrendingUp,
      title: "Regression Modeling",
      description:
        "Strong foundation in statistical analysis and predictive modeling",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Experience cleaning and preprocessing messy real-world datasets",
    },
    {
      icon: Cpu,
      title: "Production Focus",
      description:
        "Building deployable ML solutions with scalable architecture",
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-900 py-28">
      <div className="w-full px-10 lg:px-24 xl:px-32 2xl:px-40">

        {/* CENTERED TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          About Me
        </motion.h2>

        {/* CENTERED TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            I'm an AI & Machine Learning undergraduate with a strong academic
            record (CGPA 8.6+) and a focus on building practical, data-driven
            solutions.
          </p>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            I specialize in the complete machine learning pipeline — cleaning
            messy real-world data, engineering meaningful features, training
            robust models, and evaluating performance rigorously.
          </p>

          <p className="text-xl text-gray-300 leading-relaxed">
            My goal is to build scalable, production-ready AI systems that
            create measurable impact.
          </p>
        </motion.div>

        {/* FULL-WIDTH CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all"
            >
              <item.icon className="text-blue-400 mb-6" size={40} />
              <h3 className="text-white font-semibold text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}