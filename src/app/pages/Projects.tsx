import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl: string;
  date: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Sistema de Gerenciamento de Tarefas",
      description:
        "Aplicação web completa para gerenciamento de tarefas e projetos com autenticação de usuários, dashboard interativo e notificações em tempo real.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      githubUrl: "https://github.com/seuusuario/task-manager",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      date: "2024",
    },
    {
      id: 2,
      name: "App Mobile de Delivery",
      description:
        "Aplicativo mobile para pedidos de delivery com rastreamento em tempo real, integração com pagamentos e sistema de avaliações.",
      technologies: ["React Native", "Firebase", "Redux", "Google Maps API"],
      githubUrl: "https://github.com/seuusuario/delivery-app",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      date: "2025",
    },
    {
      id: 3,
      name: "Dashboard de Analytics",
      description:
        "Painel de visualização de dados com gráficos interativos, relatórios personalizados e exportação de dados em múltiplos formatos.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/seuusuario/analytics-dashboard",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      date: "2026",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl mb-4 text-slate-900">Meus Projetos</h1>
          <p className="text-xl text-slate-600">
            Uma linha do tempo dos projetos que desenvolvi
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Ponto na timeline */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Conteúdo */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-4">
                    {project.date}
                  </div>
                  <h3 className="text-2xl mb-3 text-slate-900">{project.name}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 justify-start md:justify-end">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Github size={20} />
                    Ver no GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Imagem */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12"
                  }`}
                >
                  <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                    <ImageWithFallback
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
