"use client";
import { Timeline } from "keep-react";
import { IoCodeSlash } from "react-icons/io5";

export const ExperienciaComponent = () => {
  const WorkData = [
    {
      title: "Variedad de Productos:",
      body: "Nuestro extenso portafolio de productos incluye las últimas novedades en hardware y software de las marcas más reconocidas a nivel mundial. Desde equipos de cómputo hasta soluciones de almacenamiento en la nube, tenemos todo lo que necesitas para mantener tu negocio en funcionamiento.",
    },
    {
      title: "Soporte Integral:",
      body: "Entendemos la importancia del correcto funcionamiento de tu empresa. Es por eso que ofrecemos un servicio de soporte técnico completo, asesoría especializada y total garantía en cada compra que realices con nosotros. Estamos aquí para resolver cualquier duda o inconveniente que puedas tener, ¡nuestro equipo está siempre a tu disposición!",
    },
    {
      title: "Atención Personalizada:",
      body: "Sabemos que cada empresa es única, por eso ofrecemos un servicio personalizado adaptado a tus necesidades específicas. Nuestro equipo está compuesto por expertos en cada área de conocimiento, listos para brindarte la asistencia que necesitas en cada etapa del proceso.",
    },
    {
      title: "Logística Eficiente:",
      body: " Tu tiempo es valioso, por lo que nos aseguramos de que tu mercancía llegue a tiempo y en óptimas condiciones. Contamos con el apoyo logístico de las principales compañías de transporte aéreo y terrestre, garantizando una entrega rápida y segura en cualquier parte del país",
    },
  ];

  return (
    <div id="acerdaDe" className="min-h-screen text-white p-10 lg:p-20">
      <h1 className="text-xl lg:text-2xl font-bold mb-16 hover:text-cyan-900 cursor-default">
        ¿Por qué elegirnos?{" "}
      </h1>
      <Timeline className="">
        {WorkData.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point></Timeline.Point>
            <Timeline.Content>
              {item.company && (
                <Timeline.Time className="flex gap-2 items-center hover:text-cyan-900 opacity-55 hover:opacity-100 cursor-default">
                  {item.company}
                  {item.icon}
                </Timeline.Time>
              )}
              <Timeline.Title className="hover:text-cyan-900 cursor-default">
                {item.title}
              </Timeline.Title>
              <Timeline.Body className="opacity-55 text-sm">
                {item.body}
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
      <br />
      <br />
      <p>
        No dejes pasar la oportunidad de conocer nuestro portafolio de productos
        y descubrir por qué comprar con nosotros es una garantía extendida.
        ¡Contáctanos hoy mismo y lleva tu empresa al siguiente nivel con
        Conexión Data!
      </p>
    </div>
  );
};
