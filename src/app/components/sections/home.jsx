// "use client";
import { Avatar } from "keep-react";
export const HomeComponent = () => {
  return (
    <div
      id="home"
      className="text-white bg-opacity-80 min-h-screen flex justify-end items-center "
    >
      <div className="px-6 container mx-auto flex flex-col lg:flex-row flex-wrap justify-start items-center md:relative lg:absolute lg:inset-0 md:pt-72 lg:pb-96">
        <div className="text-center lg:text-left w-full lg:max-w-5xl">
          <div className="flex justify-start ml-2">
            <Avatar
              className="w-40 h-40"
              shape="circle"
              size="xl"
              img="./z.jpeg"
            />
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-bunker-100 hover:text-cyan-900">
            Sales And Services Of Software
          </h1>
          <p className="mt-4 opacity-45">
            Bienvenido a S.A.S.O.S., tu distribuidor mayorista de hardware y
            software de confianza. Estamos aquí para ofrecerte las mejores
            soluciones tecnológicas que mantendrán a tu empresa siempre a la
            vanguardia en un mundo en constante evolución.
          </p>
        </div>
      </div>
    </div>
  );
};
