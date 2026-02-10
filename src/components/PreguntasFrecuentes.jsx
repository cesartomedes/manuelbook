import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "📘 ¿Necesito experiencia previa para empezar?",
    answer:
      "No. Esta guía está pensada para personas que arrancan desde cero. No necesitás conocimientos técnicos, ni experiencia previa en ventas, ni en **Hotmart**.",
  },
  {
    question: "🛒 ¿Qué voy a aprender exactamente en esta guía?",
    answer:
      "Vas a aprender a crear tu ebook, armar tu tienda en **Hotmart**, configurar pagos, automatizar entregas y montar un sistema de ventas que funcione todos los días.",
  },
  {
    question: "⏱ ¿Cuánto tiempo tarda en verse todo el contenido?",
    answer:
      "Podés avanzar a tu ritmo. Muchas personas arman su tienda básica en uno o dos días siguiendo los pasos del sistema.",
  },
  {
    question: "🎁 ¿Qué incluyen los bonos?",
    answer:
      "Incluye plantillas editables para **Hotmart**, prompts para crear tu ebook con IA, checklist completo de lanzamiento, taller de Meta Ads + **Hotmart** y una clase completa de campañas.",
  },
  {
    question: "🤖 ¿Puedo crear mi ebook con inteligencia artificial?",
    answer:
      "Sí. Uno de los bonos te da prompts listos para usar con ChatGPT y otras IAs para que puedas crear todo tu ebook incluso si no sabés escribir.",
  },
  {
    question: "💳 ¿Cómo puedo pagar?",
    answer:
      "Podés pagar con tarjeta de crédito, débito o Mercado Pago, según tu país.",
  },
  {
    question: "📩 ¿Cómo recibo el contenido después de comprar?",
    answer:
      "Tenés acceso inmediato. Lo recibís por email y también podés descargarlo al instante.",
  },
  {
    question: "📈 ¿Voy a aprender a vender con anuncios?",
    answer:
      "Sí. Incluye un taller y una clase completa donde te enseño a crear campañas de venta en Meta Ads paso a paso.",
  },
  {
    question: "💰 ¿Esto garantiza que voy a ganar dinero?",
    answer:
      "No existen garantías mágicas, pero te doy el sistema completo que hoy se usa para vender ebooks de forma automática. El resultado depende de que lo implementes.",
  },
  {
    question: "🔐 ¿El acceso es para siempre?",
    answer: "Sí. El acceso es de por vida.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Ajustar la altura para animación
  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.maxHeight = openIndex === i ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="max-w-3xl mx-auto p-6 relative z-20 pb-40">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span className="text-left font-medium">{faq.question}</span>
              <span className="text-2xl transition-transform duration-300 transform">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-300 max-h-0 bg-white border-t"
            >
              <div className="p-4">
                <p className="font-bold">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
