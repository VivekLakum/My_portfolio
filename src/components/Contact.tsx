import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-800 py-28">
      <div className="w-full px-10 lg:px-24 xl:px-32 2xl:px-40">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE – CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <Mail className="text-blue-400 mb-4" size={32} />
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white text-lg">connect.viveklakum@gmail.com</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <Phone className="text-blue-400 mb-4" size={32} />
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white text-lg">+91 9030585182</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <MapPin className="text-blue-400 mb-4" size={32} />
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white text-lg">Hanumakonda, Telangana, India</p>
            </div>
          </motion.div>

          {/* RIGHT SIDE – MESSAGE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-10 rounded-2xl border border-gray-700"
          >
            <h3 className="text-3xl font-semibold text-white mb-8">
              Leave Me a Message
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}