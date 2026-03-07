import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Laptop, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const content = {
    pt: {
      title: "Olá, eu sou [Seu Nome]",
      subtitle: "Estudante de Engenharia de Software",
      description: `Sou um estudante apaixonado por tecnologia e desenvolvimento de software. 
        Atualmente cursando Engenharia de Software, estou constantemente buscando novos 
        conhecimentos e desafios na área de desenvolvimento web, mobile e sistemas. 
        Tenho interesse especial em desenvolvimento full-stack, arquitetura de software 
        e boas práticas de programação.`,
      interests: "Áreas de Interesse",
      goals: "Objetivos Profissionais",
      goalsText: `Busco oportunidades para aplicar meus conhecimentos em projetos reais, 
        contribuir com equipes de desenvolvimento e crescer como profissional. 
        Estou aberto a estágios, projetos colaborativos e novos desafios.`,
    },
    en: {
      title: "Hello, I'm [Your Name]",
      subtitle: "Software Engineering Student",
      description: `I am a student passionate about technology and software development. 
        Currently studying Software Engineering, I am constantly seeking new knowledge 
        and challenges in web, mobile, and systems development. 
        I have a special interest in full-stack development, software architecture, 
        and programming best practices.`,
      interests: "Areas of Interest",
      goals: "Professional Goals",
      goalsText: `I am looking for opportunities to apply my knowledge in real projects, 
        contribute to development teams, and grow as a professional. 
        I am open to internships, collaborative projects, and new challenges.`,
    },
  };

  const interests = [
    { icon: Code2, label: "Desenvolvimento Full-Stack" },
    { icon: Laptop, label: "Arquitetura de Software" },
    { icon: Globe, label: "Desenvolvimento Web & Mobile" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-6">
            <div className="bg-white/20 rounded-full p-1 flex gap-2">
              <button
                onClick={() => setLanguage("pt")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  language === "pt" ? "bg-white text-blue-600" : "hover:bg-white/10"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  language === "en" ? "bg-white text-blue-600" : "hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl mb-4">{content[language].title}</h1>
              <p className="text-xl text-blue-100 mb-6">{content[language].subtitle}</p>
              <p className="text-lg leading-relaxed">{content[language].description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-slate-900">
            {content[language].interests}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <interest.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-slate-900">{interest.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl text-center mb-8 text-slate-900">
              {content[language].goals}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              {content[language].goalsText}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
