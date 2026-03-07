import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

import EMAILJS_CONFIG from "../../config/emailJsConfig";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const time = new Date().toLocaleString('pt-BR');

    // Organizando os dados para o EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: time,
    };

    try {
      // Usamos Promise.all para disparar os dois e-mails simultaneamente
      await Promise.all([
        // 2. Email para VOCÊ
        emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_FOR_ME,
          { ...templateParams, title: `Nova mensagem de: ${formData.name}` },
          EMAILJS_CONFIG.PUBLIC_KEY
        ),
        // 3. Email de confirmação para o CLIENTE (Sender)
        emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_FOR_SENDER,
          { ...templateParams, title: "Recebemos sua mensagem!" },
          EMAILJS_CONFIG.PUBLIC_KEY
        )
      ]);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Erro no envio:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "seu.email@exemplo.com",
      link: "mailto:seu.email@exemplo.com",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (11) 98765-4321",
      link: "https://wa.me/5511987654321",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/seu-perfil",
      link: "https://linkedin.com/in/seu-perfil",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@seuusuario",
      link: "https://github.com/seuusuario",
      color: "bg-slate-100 text-slate-700",
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
          <h1 className="text-4xl mb-4 text-slate-900">Entre em Contato</h1>
          <p className="text-xl text-slate-600">
            Vamos conversar sobre projetos, oportunidades ou apenas trocar ideias
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl mb-6 text-slate-900">Formas de Contato</h2>
            
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${method.color}`}>
                    <method.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{method.label}</p>
                    <p className="text-slate-900">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} />
                <h3 className="text-xl">Localização</h3>
              </div>
              <p className="text-blue-100">São Paulo, SP - Brasil</p>
              <p className="text-blue-100 text-sm mt-2">
                Disponível para trabalho remoto e presencial
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl mb-6 text-slate-900">Envie uma Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-slate-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  Mensagem enviada com sucesso! Retornarei em breve.
                </motion.div>
              )}
              {/* NOVA MENSAGEM DE ERRO (Adicione esta) */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-red-100 text-red-700 border border-red-200 rounded-lg flex items-center gap-2"
                >
                  <span className="font-bold">Oops!</span> Ocorreu um erro ao enviar. Tente novamente mais tarde ou me chame no WhatsApp.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              <p className="text-sm text-slate-500 mt-4 text-center">
                Nota: Para ativar o envio real de emails, integre com serviços como 
                EmailJS, Formspree ou seu próprio backend.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
