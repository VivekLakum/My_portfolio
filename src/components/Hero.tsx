import { Github, Mail } from "lucide-react";
import profile from "../assets/Vivek.png";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-[#0b1a33] to-[#0f172a]">
      
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-10 lg:px-24 xl:px-32 2xl:px-40 py-28">
        
        <div className="grid lg:grid-cols-2 gap-28 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
              Vivek Lakum
            </h1>

            <h2 className="text-3xl md:text-4xl text-blue-400 font-semibold mb-10">
              Machine Learning Developer | Data-Driven Systems & Predictive Modeling
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl">
              I build applied machine learning systems that transform raw data
              into actionable predictions. My work focuses on regression modeling,
              feature engineering, and data-driven decision systems using Python
              and scikit-learn.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              I prioritize clean pipelines, measurable performance, and real-world usability.
            </p>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
              >
                View Projects
              </button>

              <a
                href="https://github.com/VivekLakum"
                target="_blank"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl flex items-center gap-2 transition"
              >
                <Github size={18} />
                GitHub
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border border-gray-600 hover:border-white text-white rounded-xl flex items-center gap-2 transition"
              >
                <Mail size={18} />
                Contact
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt="Vivek Lakum"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}