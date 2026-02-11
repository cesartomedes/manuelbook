const testimonials = [
  {
    name: "Camila R.",
    text: "Nunca había usado Hotmart y pensaba que era súper complicado. Esta guía me explicó todo paso a paso y en dos días ya tenía todo armado. Ahora entiendo cómo funciona y me siento mucho más segura.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/5.jpg",
  },
  {
    name: "Julieta M.",
    text: "Lo que más me gustó es que no es solo teoría. Te muestra exactamente qué hacer, dónde tocar y cómo configurarlo todo. Yo estaba perdida y ahora ya tengo todo automatizado.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/1.jpg",
  },
  {
    name: "Luciana S.",
    text: "Probé otros cursos y siempre me quedaba con dudas. Esta guía es la primera que realmente entendí. Está pensada para personas que arrancamos desde cero.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/3.jpg",
  },
  {
    name: "María L.",
    text: "Yo no sabía ni cómo cobrar online. Con esta guía aprendí a conectar pagos, automatizar entregas y dejar todo listo. Me ahorró muchísimo tiempo.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/6.jpg",
  },
  {
    name: "Florencia D.",
    text: "Todo está explicado de forma simple, sin palabras raras. Eso fue lo que más me gustó. Ahora entiendo cómo funciona una tienda digital.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/7.jpg",
  },
  {
    name: "Natalia P.",
    text: "La compré sin muchas expectativas y me sorprendió. Es muy práctica y te lleva de la mano en todo el proceso.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/8.jpg",
  },
  {
    name: "Paula F.",
    text: "No sabía nada de tiendas online y ahora tengo todo armado. La guía es muy clara y directa.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/9.jpg",
  },
  {
    name: "Carolina V.",
    text: "Me ayudó a ordenar todo lo que tenía en mi cabeza. Ahora tengo un sistema claro y simple.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/10.jpg",
  },
  {
    name: "Agustina B.",
    text: "Antes dependía de responder mensajes todo el día. Ahora está todo automatizado y funciona solo.",
    product: "Guía Vende Ebooks con Hotmart",
    avatar: "images/avatars/11.jpg",
  },

];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
          Personas reales. Resultados reales.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-yellow-500">★★★★★</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">“{t.text}”</p>

              <p className="text-sm font-medium text-gray-500">{t.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
