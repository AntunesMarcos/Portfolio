import { motion } from "motion/react";
import { Briefcase, Calendar, Award, Users } from "lucide-react";

interface ExperienceItem {
  id: number;
  type: "work" | "event" | "opensource";
  company: string;
  role: string;
  period: string;
  description: string;
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      type: "work",
      company: "TechStart Innovations",
      role: "Desenvolvedor Full-Stack - Estágio",
      period: "Jan 2025 - Presente",
      description:
        "Desenvolvimento de aplicações web utilizando React e Node.js. Participação em reuniões de planejamento ágil, code reviews e implementação de novas funcionalidades. Colaboração com equipe de 5 desenvolvedores em projetos de e-commerce.",
    },
    {
      id: 2,
      type: "work",
      company: "Freelancer",
      role: "Desenvolvedor Front-end",
      period: "Jun 2024 - Dez 2024",
      description:
        "Desenvolvimento de landing pages e websites responsivos para pequenas empresas. Utilização de React, Tailwind CSS e animações com Framer Motion. Entrega de 8 projetos concluídos com feedback positivo dos clientes.",
    },
    {
      id: 3,
      type: "event",
      company: "Hackathon Universitário 2024",
      role: "Participante - 2º Lugar",
      period: "Out 2024",
      description:
        "Desenvolvimento de um sistema de gerenciamento de estoque inteligente em 48 horas. Utilizamos React, Python e Machine Learning para previsão de demanda. Conquistamos o segundo lugar entre 30 equipes participantes.",
    },
    {
      id: 4,
      type: "opensource",
      company: "Projeto Open Source - React UI Library",
      role: "Contribuidor",
      period: "Mar 2024 - Ago 2024",
      description:
        "Contribuições para biblioteca de componentes React open source. Implementação de novos componentes, correção de bugs e melhorias na documentação. Total de 15 pull requests aprovados e merged.",
    },
    {
      id: 5,
      type: "event",
      company: "Workshop de AWS Cloud",
      role: "Participante",
      period: "Fev 2024",
      description:
        "Participação em workshop intensivo de 3 dias sobre AWS Cloud Computing. Aprendizado prático sobre EC2, S3, Lambda, RDS e boas práticas de arquitetura cloud. Certificado de conclusão obtido.",
    },
  ];

  const getIcon = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "work":
        return Briefcase;
      case "event":
        return Award;
      case "opensource":
        return Users;
    }
  };

  const getTypeLabel = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "work":
        return "Experiência Profissional";
      case "event":
        return "Evento Técnico";
      case "opensource":
        return "Open Source";
    }
  };

  const getTypeColor = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "work":
        return "bg-blue-100 text-blue-600";
      case "event":
        return "bg-green-100 text-green-600";
      case "opensource":
        return "bg-purple-100 text-purple-600";
    }
  };

  return (
    <div className="min-h-screen py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl mb-4 text-slate-900">Experiências</h1>
          <p className="text-xl text-slate-600">
            Minha trajetória profissional e acadêmica
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 ${getTypeColor(exp.type)}`}>
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">
                    {/* Type Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${getTypeColor(exp.type)}`}>
                      {getTypeLabel(exp.type)}
                    </span>

                    {/* Company/Event */}
                    <h3 className="text-2xl mb-2 text-slate-900">{exp.company}</h3>

                    {/* Role */}
                    <p className="mb-2 text-slate-700">{exp.role}</p>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-slate-500 mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
