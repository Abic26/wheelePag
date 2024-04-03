"use client";
import React from "react";
export const SobreMiComponent = () => {
  return (
    <div id="sobreNosotros" className="min-h-screen text-white p-10 lg:p-20">
      <div className="flex flex-col pt-54 lg:flex-row justify-between gap-14 lg:gap-24 ">
        {/* Sección sobre mí */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-cyan-900">
            Sobre Nosotros
          </h2>
          <div>
            <p className="text-sm lg:text-base opacity-55">
              Somos SASOS, una compañía dedicada a ofrecer soluciones integrales
              en el ámbito del software. Nos hemos consolidado como líderes en
              el sector gracias a nuestra pasión por la innovación y el
              compromiso con la excelencia.
            </p>
          </div>
          <br />
          <div>
            <p className="text-sm lg:text-base opacity-55">
              Comprendemos las necesidades únicas de cada cliente y nos
              esforzamos por proporcionar soluciones personalizadas que impulsen
              su éxito empresarial. Nuestro equipo de expertos altamente
              capacitados combina habilidades técnicas sólidas con un profundo
              conocimiento del mercado para ofrecer servicios de mantenimiento y
              venta de software de la más alta calidad.
            </p>
          </div>
          <br />

          <div>
            <p className="text-sm lg:text-base opacity-55">
              Nos enorgullece ofrecer una amplia gama de servicios, que incluyen
              mantenimiento preventivo y correctivo, actualizaciones de
              software, soporte técnico continuo y consultoría especializada.
              Además, trabajamos en estrecha colaboración con nuestros clientes
              para entender sus objetivos y desafíos específicos, brindando
              soluciones que no solo satisfacen sus necesidades actuales, sino
              que también los preparan para el futuro.
            </p>
          </div>
          <br />

          <div>
            <p className="text-sm lg:text-base opacity-55">
              En SASOS la satisfacción del cliente es nuestra máxima prioridad.
              Nos esforzamos por establecer relaciones sólidas y duraderas con
              cada cliente, basadas en la confianza, la transparencia y el
              compromiso mutuo. Estamos comprometidos a proporcionar un servicio
              excepcional en cada paso del camino, desde la consulta inicial
              hasta la implementación y más allá.
            </p>
          </div>
          <br />

          <div>
            <p className="text-sm lg:text-base opacity-55">
              Si buscas un socio de confianza para satisfacer tus necesidades de
              mantenimiento y venta de software, SASOS está aquí para ayudarte.
              Contáctanos hoy mismo para descubrir cómo podemos ayudarte a
              alcanzar tus objetivos empresariales
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="flex gap-6">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-cyan-900">
                Misión
              </h3>
              <p className="text-sm lg:text-base opacity-55">
                Ofrecer servicios de asesoramiento, implantación, mantenimiento
                y venta para soluciones de tecnología que aporten valor añadido
                a nuestros clientes y ayuden a mejorar sus procesos de negocios.{" "}
              </p>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-cyan-900">
                Visión
              </h3>
              <p className="text-sm lg:text-base opacity-55">
                En el plazo de dos años ser reconocidos como la mejor y más
                grande empresa a nivel nacional por la calidad de nuestro
                trabajo y la honestidad de nuestros servicios como un socio
                tecnológico y un factor de crecimiento para nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
