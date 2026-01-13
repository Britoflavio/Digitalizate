"use client";

import { useState } from 'react';

export default function BudgetCalculator() {
  // Lista de servicios de AuraCode
  const [services, setServices] = useState([
    { 
      id: 1, 
      name: "Landing Page Pro", 
      price: 300, 
      desc: "Diseño de alto impacto, 4 secciones, formulario.", 
      selected: true, 
      required: true 
    },
    { 
      id: 2, 
      name: "SEO Avanzado", 
      price: 150, 
      desc: "Posicionamiento en Google y optimización de velocidad.", 
      selected: false 
    },
    { 
      id: 3, 
      name: "E-commerce", 
      price: 200, 
      desc: "Pasarela de pagos (MercadoPago/Stripe) + Catálogo.", 
      selected: false 
    },
    { 
      id: 4, 
      name: "Chatbot IA", 
      price: 100, 
      desc: "Asistente virtual 24/7 entrenado con tus datos.", 
      selected: false 
    },
    { 
        id: 5, 
        name: "Mantenimiento Mensual", 
        price: 50, 
        desc: "Actualizaciones, seguridad y soporte prioritario.", 
        selected: false 
      },
  ]);

  // Calcular total
  const total = services.reduce((acc, curr) => curr.selected ? acc + curr.price : acc, 0);

  const toggleService = (id: number) => {
    setServices(services.map(service => 
      service.id === id && !service.required 
        ? { ...service, selected: !service.selected } 
        : service
    ));
  };

  const handleWhatsapp = () => {
    const selectedNames = services.filter(s => s.selected).map(s => s.name).join(', ');
    const msg = `Hola AuraCode! 🚀 Me interesa armar un plan con: ${selectedNames}. Presupuesto estimado en web: $${total} USD.`;
    // Reemplaza el número por el tuyo real
    window.open(`https://wa.me/549DATOSDEMERLO?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    // Sección con fondo oscuro (Deep Purple muy oscuro) para que resalten los neones
    <section className="py-20 px-4 bg-[#1a0033] text-white relative overflow-hidden">
      
      {/* Efecto de luz de fondo (opcional) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8F00FF] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cotiza tu proyecto con <span className="text-gradient">AuraCode</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Selecciona los módulos que necesitas. Sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          
          {/* Columna Izquierda: Tarjetas de Servicios */}
          <div className="space-y-4">
            {services.map((service) => (
              <div 
                key={service.id} 
                onClick={() => toggleService(service.id)}
                className={`
                  relative flex flex-col sm:flex-row items-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border
                  ${service.selected 
                    ? 'border-[#CCFF00] bg-[#400080]/40 shadow-[0_0_20px_rgba(204,255,0,0.15)]' 
                    : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#8F00FF]/50'}
                `}
              >
                {/* Checkbox Visual */}
                <div className={`
                  w-6 h-6 rounded flex-shrink-0 border-2 mr-0 sm:mr-5 mb-3 sm:mb-0 flex items-center justify-center transition-colors
                  ${service.selected ? 'border-[#CCFF00] bg-[#CCFF00]' : 'border-gray-500 bg-transparent'}
                `}>
                  {service.selected && (
                    <svg className="w-4 h-4 text-[#400080]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-1">
                    <h3 className={`text-xl font-bold ${service.selected ? 'text-[#00D09B]' : 'text-white'}`}>
                        {service.name}
                    </h3>
                    <span className="text-[#CCFF00] font-bold text-lg ml-0 sm:ml-4 bg-white/5 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      ${service.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha: Resumen Sticky */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[#0d0d0d]/80 backdrop-blur-xl p-8 rounded-3xl border border-[#8F00FF] shadow-2xl relative overflow-hidden">
                {/* Borde brillante superior */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8F00FF] via-[#CCFF00] to-[#00D09B]"></div>
                
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Inversión Total</h3>
              
              <div className="flex justify-center items-baseline my-6">
                <span className="text-5xl font-extrabold text-[#CCFF00] tracking-tight">
                    ${total}
                </span>
                <span className="text-xl text-gray-400 ml-2">USD</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm text-gray-400">
                    <span>Tiempo estimado:</span>
                    <span className="text-white">7 - 14 días</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                    <span>Garantía:</span>
                    <span className="text-white">30 días post-entrega</span>
                </div>
              </div>

              <button 
                onClick={handleWhatsapp}
                className="w-full group relative py-4 bg-[#00D09B] text-[#1a0033] font-bold rounded-xl text-lg overflow-hidden transition-transform active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                <span className="relative flex items-center justify-center gap-2">
                    Comenzar Proyecto
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                *Precios referenciales sujetos a evaluación final.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}