export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      howItWorks: "Cómo funciona",
      demos: "Demos",
      pricing: "Precios",
      moreServices: "Más Servicios",
    },
    hero: {
      badge: "Webs Inteligentes para Emprendedores",
      title_part1: "Tu Landing Page",
      title_part2: "ahora vende sola.",
      description:
        "Transformamos tu web estática en una tienda inteligente que atiende, muestra productos y envía el pedido listo a tu WhatsApp.",
      cta_demo: "Probar Demo Gratis",
      cta_pricing: "Ver Precios",
      social_proof: "+500 Emprendedores confían en nosotros",
    },
    clients: {
      title: "Confían en nosotros",
    },
    problem: {
      title: "¿Por qué tus clientes no compran?",
      subtitle: "La fricción mata las ventas. Elimina los pasos innecesarios.",
      old_way_title: "El Sitio Web 'Folleto'",
      old_way_1: "Nadie lee textos largos 'Sobre Nosotros'.",
      old_way_2: "Formularios de contacto que nadie llena.",
      old_way_3: "El cliente tiene dudas y se va a la competencia.",
      old_way_4: "0 Ventas directas, solo 'tráfico'.",
      new_way_badge: "¡Tu Nueva Web!",
      new_way_title: "Tu Vendedor Digital (Web + IA)",
      new_way_1: "La IA saluda y ofrece ayuda proactivamente.",
      new_way_2: "Muestra productos y resuelve dudas al instante.",
      new_way_3: "Cierra la venta y te manda el pedido listo.",
      new_way_4: "Funciona 24/7 sin que muevas un dedo.",
    },
    examples: {
      title: "Adaptable a Cualquier Negocio",
      subtitle: "Mira cómo funciona la IA en diferentes industrias.",
      restaurants_title: "Restaurantes",
      restaurants_desc:
        "Menú digital interactivo. La IA toma pedidos y sugiere adicionales (upselling).",
      realestate_title: "Inmobiliarias",
      realestate_desc:
        "Catálogo de propiedades. La IA agenda visitas y pre-califica a los interesados.",
      services_title: "Servicios Profesionales",
      services_desc:
        "Abogados, Dentistas, Coaches. Agenda citas y resuelve dudas frecuentes 24/7.",
      cta_demo: "Ver Demo en Vivo",
    },
    chat: {
      title: "Pruébalo Tú Mismo",
      subtitle: "Interactúa conmigo. Soy el 'empleado' que vive en tu web.",
      header_title: "Asistente IA",
      header_status: "En línea",
      input_placeholder: "Escribe un mensaje...",
      bot_intro:
        "¡Hola! 👋 Soy la IA de esta página web. ¿Te gustaría ver cómo aumento tus ventas?",
      bot_price_response:
        "Tu web inteligente cuesta desde $299 (Pago Único). Incluye el catálogo y yo (la IA) para atender a tus clientes.",
      bot_catalog_response:
        "Aquí en la web mostraré tus productos. Cuando el cliente elija, le pediré sus datos y te mandaré el pedido listo a tu WhatsApp. ¿Genial no?",
      bot_hello_response:
        "¡Hola! Estoy integrada en esta web para vender por ti las 24 horas.",
    },
    admin: {
      badge: "Solo en el Plan Pro",
      title: "Control Total desde tu Celular",
      subtitle:
        "¿Quieres cambiar un precio? ¿Se acabó la mercancía? No necesitas un computador ni llamarnos.",
      highlight:
        "Simplemente envíale un mensaje a tu Bot Administrador en Telegram y tu web se actualiza al instante.",
      feature_1: "Cambiar precios en segundos",
      feature_2: "Activar/Desactivar productos",
      feature_3: "Crear ofertas relámpago",
      feature_4: "Ver reporte de ventas del día",
      chat_name: "Admin Bot",
      chat_status: "bot",
      msg_user_1: "Cambiar precio hamburguesa a $12",
      msg_bot_1_title: "✅ Actualizado:",
      msg_bot_1_desc: "Hamburguesa Clásica ahora cuesta $12.00",
      msg_user_2: "Pausar ventas de Pizza",
      msg_bot_2_title: "🚫 Producto Pausado:",
      msg_bot_2_desc: "'Pizza Pepperoni' ya no aparece en el catálogo.",
    },
    pricing: {
      title: "Inversión Única. Beneficios Diarios.",
      subtitle:
        "Olvídate de mensualidades costosas. Pagas una vez por el desarrollo y solo una pequeña cuota anual de mantenimiento.",
      maintenance_label: "Mantenimiento Anual",
      maintenance_desc: "Incluye Hosting, Dominio y Soporte",
      guarantee:
        "Garantía de Satisfacción: Si no te gusta el diseño, lo cambiamos.",
      plans: {
        standard: {
          name: "Estándar",
          period: "Pago Único",
          description: "Perfecto para empezar. Tu web vendiendo sola.",
          feature_1: "Landing Page Moderna (Diseño Premium)",
          feature_2: "Catálogo de Productos (Hasta 50 ítems)",
          feature_3: "IA de Ventas (Atiende y Cierra)",
          feature_4: "Pedidos directo a tu WhatsApp",
          feature_5: "Hosting y Dominio (.com) gratis 1er año",
          renewal: "$99/año (Renovación)",
          cta: "Empezar Ahora",
        },
        pro: {
          name: "Negocio Pro",
          badge: "Recomendado por Dueños",
          period: "Pago Único",
          description: "Para dueños que quieren control total.",
          feature_1: "Incluye TODO lo del Plan Estándar",
          feature_2: "Catálogo Ilimitado",
          feature_3: "Bot Administrador en Telegram (Modo Dios)",
          feature_4: "Edita precios y productos desde tu celular",
          feature_5: "Soporte Prioritario (2 tickets GRATIS/año)",
          feature_6: "Hosting y Dominio (.com) gratis 1er año",
          renewal: "$149/año (Renovación)",
          cta: "Obtener Control Total",
        },
        enterprise: {
          name: "Enterprise",
          price: "A Medida",
          period: "Cotización",
          description: "Para proyectos complejos y Software a medida.",
          feature_1: "Desarrollo SaaS, CRM o Plataformas Web",
          feature_2: "Microservicios con IA avanzada",
          feature_3: "Integraciones a medida (APIs externas)",
          feature_4: "Diseño UI/UX 100% Personalizado",
          feature_5: "Arquitectura Escalable (Cloud)",
          feature_6: "Soporte Dedicado 24/7",
          renewal: "A Medida",
          cta: "Agendar Consultoría",
        },
      },
    },
    footer: {
      company_desc:
        "Democratizando la tecnología para emprendedores. Webs inteligentes que venden solas.",
      product: "Producto",
      company: "Compañía",
      legal: "Legal",
      contact: "Contacto",
      copyright: "© 2024 Rueda la Rola. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      howItWorks: "How it Works",
      demos: "Demos",
      pricing: "Pricing",
      moreServices: "More Services",
    },
    hero: {
      badge: "Smart Websites for Entrepreneurs",
      title_part1: "Your Landing Page",
      title_part2: "now sells by itself.",
      description:
        "We transform your static website into a smart store that serves customers, showcases products, and sends the ready order to your WhatsApp.",
      cta_demo: "Try Free Demo",
      cta_pricing: "See Pricing",
      social_proof: "+500 Entrepreneurs trust us",
    },
    clients: {
      title: "Trusted by",
    },
    problem: {
      title: "Why aren't your customers buying?",
      subtitle: "Friction kills sales. Eliminate unnecessary steps.",
      old_way_title: "The 'Brochure' Website",
      old_way_1: "No one reads long 'About Us' texts.",
      old_way_2: "Contact forms that no one fills out.",
      old_way_3: "The customer has doubts and goes to the competition.",
      old_way_4: "0 Direct sales, just 'traffic'.",
      new_way_badge: "Your New Web!",
      new_way_title: "Your Digital Salesman (Web + AI)",
      new_way_1: "AI greets and offers help proactively.",
      new_way_2: "Showcases products and resolves doubts instantly.",
      new_way_3: "Closes the sale and sends you the ready order.",
      new_way_4: "Works 24/7 without you lifting a finger.",
    },
    examples: {
      title: "Adaptable to Any Business",
      subtitle: "See how AI works in different industries.",
      restaurants_title: "Restaurants",
      restaurants_desc:
        "Interactive digital menu. AI takes orders and suggests add-ons (upselling).",
      realestate_title: "Real Estate",
      realestate_desc:
        "Property catalog. AI schedules visits and pre-qualifies leads.",
      services_title: "Professional Services",
      services_desc:
        "Lawyers, Dentists, Coaches. Schedule appointments and answer FAQs 24/7.",
      cta_demo: "View Live Demo",
    },
    chat: {
      title: "Try It Yourself",
      subtitle:
        "Interact with me. I'm the 'employee' that lives on your website.",
      header_title: "AI Assistant",
      header_status: "Online",
      input_placeholder: "Type a message...",
      bot_intro:
        "Hello! 👋 I'm this website's AI. Would you like to see how I increase your sales?",
      bot_price_response:
        "Your smart website starts at $299 (One-Time Payment). Includes the catalog and me (the AI) to serve your customers.",
      bot_catalog_response:
        "I'll show your products here. When the customer chooses, I'll ask for their details and send the ready order to your WhatsApp. Cool, right?",
      bot_hello_response:
        "Hello! I'm integrated into this website to sell for you 24/7.",
    },
    admin: {
      badge: "Only in Pro Plan",
      title: "Total Control from Your Phone",
      subtitle:
        "Want to change a price? Out of stock? You don't need a computer or to call us.",
      highlight:
        "Simply send a message to your Admin Bot on Telegram and your website updates instantly.",
      feature_1: "Change prices in seconds",
      feature_2: "enable/disable products",
      feature_3: "Create flash offers",
      feature_4: "View daily sales report",
      chat_name: "Admin Bot",
      chat_status: "bot",
      msg_user_1: "Change burger price to $12",
      msg_bot_1_title: "✅ Updated:",
      msg_bot_1_desc: "Classic Burger now costs $12.00",
      msg_user_2: "Pause Pizza sales",
      msg_bot_2_title: "🚫 Product Paused:",
      msg_bot_2_desc: "'Pepperoni Pizza' no longer appears in the catalog.",
    },
    pricing: {
      title: "One-Time Investment. Daily Benefits.",
      subtitle:
        "Forget expensive monthly fees. You pay once for development and only a small annual maintenance fee.",
      maintenance_label: "Annual Maintenance",
      maintenance_desc: "Includes Hosting, Domain, and Support",
      guarantee:
        "Satisfaction Guarantee: If you don't like the design, we'll change it.",
      plans: {
        standard: {
          name: "Standard",
          period: "One-Time Payment",
          description: "Perfect to start. Your website selling by itself.",
          feature_1: "Modern Landing Page (Premium Design)",
          feature_2: "Product Catalog (Up to 50 items)",
          feature_3: "Sales AI (Serves and Closes)",
          feature_4: "Orders direct to your WhatsApp",
          feature_5: "Free Hosting and Domain (.com) 1st year",
          renewal: "$99/year (Renewal)",
          cta: "Start Now",
        },
        pro: {
          name: "Business Pro",
          badge: "Recommended by Owners",
          period: "One-Time Payment",
          description: "For owners who want total control.",
          feature_1: "Includes EVERYTHING in Standard Plan",
          feature_2: "Unlimited Catalog",
          feature_3: "Admin Bot on Telegram (God Mode)",
          feature_4: "Edit prices and products from your phone",
          feature_5: "Priority Support (2 FREE tickets/year)",
          feature_6: "Free Hosting and Domain (.com) 1st year",
          renewal: "$149/year (Renewal)",
          cta: "Get Total Control",
        },
        enterprise: {
          name: "Enterprise",
          price: "Custom",
          period: "Quote",
          description: "For complex projects and Custom Software.",
          feature_1: "SaaS Development, CRM or Web Platforms",
          feature_2: "Microservices with advanced AI",
          feature_3: "Custom Integrations (External APIs)",
          feature_4: "100% Custom UI/UX Design",
          feature_5: "Scalable Architecture (Cloud)",
          feature_6: "Dedicated Support 24/7",
          renewal: "Custom",
          cta: "Schedule Consulting",
        },
      },
    },
    footer: {
      company_desc:
        "Democratizing technology for entrepreneurs. Smart websites that sell by themselves.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      contact: "Contact",
      copyright: "© 2024 Rueda la Rola. All rights reserved.",
    },
  },
};
