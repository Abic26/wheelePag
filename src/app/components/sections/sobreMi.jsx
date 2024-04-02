"use client";
import React from "react";
export const SobreMiComponent = () => {
  return (
    <div id="sobreNosotros" className="min-h-screen text-white p-10 lg:p-20">
      <div className="flex flex-col pt-54 lg:flex-row justify-between gap-14 lg:gap-24">
        {/* Sección sobre mí */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-cyan-900">
            Sobre Nosotros
          </h2>
          <div>
            <p className="text-sm lg:text-base opacity-55">
              En SASOS, nos dedicamos apasionadamente a ofrecer las mejores
              soluciones tecnológicas para que tu empresa siempre esté a la
              vanguardia en un mundo en constante cambio. Desde nuestro inicio,
              hemos estado comprometidos con la excelencia en el servicio y la
              satisfacción del cliente.
            </p>
          </div>
          <br />
          <div>
            <p className="text-sm lg:text-base opacity-55">
              Nuestro compromiso con la calidad y la innovación nos impulsa a
              proporcionar un portafolio de productos de primera clase que
              abarca tanto hardware como software, ofreciendo a nuestros
              clientes la gama más amplia de opciones para cubrir sus
              necesidades tecnológicas.
            </p>
          </div>
          <br />

          <div>
            <p className="text-sm lg:text-base opacity-55">
              Entendemos que el correcto funcionamiento de tu empresa es de
              vital importancia, por lo que nos esforzamos por ofrecer un
              servicio integral que incluye soporte técnico, asesoría
              especializada y total garantía en cada compra que realizas con
              nosotros. Nuestro equipo está compuesto por expertos en cada área
              de conocimiento, listos para brindarte la atención personalizada
              que mereces.
            </p>
          </div>
          <br />

          <div>
            <p className="text-sm lg:text-base opacity-55">
              En SASOS, valoramos tu tiempo y tu confianza. Es por eso que nos
              aseguramos de que tu mercancía llegue a tiempo y en óptimas
              condiciones, gracias al apoyo logístico de las principales
              compañías de transporte aéreo y terrestre.
            </p>
          </div>
          <br />

          <div>
            <p className="text-sm lg:text-base opacity-55">
              Nuestra misión es ser tu socio de confianza en el camino hacia el
              éxito tecnológico de tu empresa. Estamos aquí para ayudarte a
              llevar tu negocio al siguiente nivel, proporcionándote las
              herramientas y el soporte que necesitas para prosperar en un mundo
              digital en constante evolución.
            </p>
          </div>
          <br />

          <div>
            <p className="text-sm lg:text-base">
              ¡Únete a nosotros en SASOS y descubre por qué somos la opción
              preferida de empresas que buscan excelencia, calidad y compromiso
              en soluciones tecnológicas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
