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
      <a
        href="https://api.whatsapp.com/send?phone=5491170614169&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20Gu%C3%ADa%20para%20vender%20Ebooks%20en%20Hotmart.%20%C2%BFPuedes%20ayudarme%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
      >
        {/* Ícono WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white"
        >
          <path d="M19.11 17.19c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.11 2.82.13.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.27.22-.63.22-1.17.16-1.27-.06-.09-.25-.16-.52-.29z" />
          <path d="M16.01 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.61 4.64 1.77 6.66L2.67 29.33l6.86-1.76c1.94 1.06 4.13 1.62 6.48 1.62 7.36 0 13.33-5.97 13.33-13.33S23.37 2.67 16.01 2.67zm0 24.33c-2.14 0-4.24-.58-6.07-1.67l-.43-.26-4.07 1.04 1.09-3.97-.28-.41c-1.19-1.86-1.82-4.02-1.82-6.25 0-6.44 5.24-11.67 11.67-11.67S27.67 9.04 27.67 15.48 22.44 27 16.01 27z" />
        </svg>
        Aprovecha esta oferta 
      </a>
    </section>
  );
}
