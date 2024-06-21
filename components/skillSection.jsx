import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = {
  web: [
    { name: "HTML5", image: "/html5.png", description: "HyperText Markup Language" },
    { name: "CSS3", image: "/css3.png", description: "Cascading Style Sheets" },
    { name: "JavaScript", image: "/javascript.png", description: "JavaScript description" },
    { name: "React", image: "/react.png", description: "React description" },
    { name: "Next.js", image: "/nextjs.png", description: "Next.js description" },
    { name: "Tailwind CSS", image: "/tailwindcss.png", description: "Tailwind CSS description" },
    { name: "Node.js", image: "/nodejs.png", description: "Node.js description" },
    { name: "Express", image: "/express.png", description: "Express description" },
  ],
  mobile: [
    { name: "React Native", image: "/react-native.png", description: "React Native description" },
    { name: "Flutter", image: "/flutter.png", description: "Flutter description" },
    { name: "Swift", image: "/swift.png", description: "Swift description" },
    { name: "Kotlin", image: "/kotlin.png", description: "Kotlin description" },
    { name: "Java", image: "/java.png", description: "Java description" },
    { name: "Dart", image: "/dart.png", description: "Dart description" },
    { name: "SQLite", image: "/sqlite.png", description: "SQLite description" },
    { name: "Firebase", image: "/firebase.png", description: "Firebase description" },
  ],
  dataScience: [
    { name: "Python", image: "/python.png", description: "Python description" },
    { name: "R", image: "/r.png", description: "R description" },
    { name: "TensorFlow", image: "/tensorflow.png", description: "TensorFlow description" },
    { name: "PyTorch", image: "/pytorch.png", description: "PyTorch description" },
    { name: "Scikit-Learn", image: "/scikit-learn.png", description: "Scikit-Learn description" },
    { name: "Pandas", image: "/pandas.png", description: "Pandas description" },
    { name: "NumPy", image: "/numpy.png", description: "NumPy description" },
    { name: "Matplotlib", image: "/matplotlib.png", description: "Matplotlib description" },
  ],
};

const SkillCategory = ({ skills, category }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      className="w-full py-20 overflow-hidden relative bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">{category}</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow flex-none w-32 h-32 md:w-48 md:h-48"
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <motion.img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover w-full h-full"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75 backdrop-blur-lg transition-opacity opacity-0 hover:opacity-100">
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2 text-white">{skill.name}</h4>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillSection = () => {
  return (
    <div className="mt-20">
      <SkillCategory skills={skills.web} category="Web Development" />
      <SkillCategory skills={skills.mobile} category="Mobile Development" />
      <SkillCategory skills={skills.dataScience} category="Data Science & ML" />
    </div>
  );
};

export default SkillSection;
