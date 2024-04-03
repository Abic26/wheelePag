// "use client";
import { SectionPrice } from "../utilities/sectionPrice";
export const TablaPrice = () => {
  const datos = [
    {
      COD: "CE104",
      DESCRIPCION:
        'SAMSUNG A25 5G SM-A256E-PANTALLA 6,5"-OCTA CORE 2,4GHZ/2,0GHZ-128GB-MEMORIA 6GB-TRIPLE CAMARA-ANDROID 14-DUAL SIM-5G',
      PRECIO: "$999.000",
      CATEGORIA: "CELULARES",
    },
    {
      COD: "CE106",
      DESCRIPCION:
        'SAMSUNG A04E SM-A042M-PANTALLA 6,5"-OCTA CORE 2,2GHZ/1,8GHZ-64G-MEMORIA 3GB-DOBLE CAMARA-ANDROID 12-DUAL SIM-4G LTE',
      PRECIO: "$385.000",
      CATEGORIA: "CELULARES",
    },
    {
      COD: "PC8NGR",
      DESCRIPCION:
        'PC DELL VOSTRO SFF 3020-INTEL CORE I7 13700-16GB DDR4-512GB SSD-NO DVD + MONITOR 18,5"-WINDOWS 11 PROFESIONAL-8NGR',
      PRECIO: "$4.190.000",
      CATEGORIA: "COMPUTADORES",
    },
    {
      COD: "PCNDN94",
      DESCRIPCION:
        'PC DELL VOSTRO SFF 3020-INTEL CORE I5 13400-8GB DDR4-512GB SSD-NO DVD-+ MONITOR 18,5"-WINDOWS 11 PROFESIONAL-NDN94',
      PRECIO: "$2.990.000",
      CATEGORIA: "COMPUTADORES",
    },
    {
      COD: "IM7MD74",
      DESCRIPCION:
        "IMPRESORA HP LASERJET M141W-MONOCROMATICA-WIFI-MULTIFUNCIONAL-7MD74A#BGJ",
      PRECIO: "$825.000",
      CATEGORIA: "IMPRESORAS",
    },
    {
      COD: "IM7MD68",
      DESCRIPCION:
        "IMPRESORA HP LASERJET M111W - MONOCROMATICA - WIFI - 7MD68A#BGJ",
      PRECIO: "$62.000",
      CATEGORIA: "IMPRESORAS",
    },
    {
      COD: "MT295IN",
      DESCRIPCION:
        "COMBO TECLADO Y MOUSE LOGITECH MK295 - INALAMBRICO - NEGRO - INCLUYE SILENT TOUCH",
      PRECIO: "$105.000",
      CATEGORIA: "MOUSE Y TECLADO",
    },
    {
      COD: "MT270",
      DESCRIPCION: "COMBO TECLADO Y MOUSE LOGITECH MK270 - INALAMBRICO - NEGRO",
      PRECIO: "$93.000",
      CATEGORIA: "MOUSE Y TECLADO",
    },
    {
      COD: "RO306R",
      DESCRIPCION: "ROUTER MERCUSYS MW306R - 300MBPS - 3 ANTENAS",
      PRECIO: "$62.000",
      CATEGORIA: "ROUTER",
    },
    {
      COD: "RO325R",
      DESCRIPCION: "ROUTER MERCUSYS MW325R - 300MBPS - 4 ANTENAS",
      PRECIO: "$72.000",
      CATEGORIA: "ROUTER",
    },
    {
      COD: "RTN300",
      DESCRIPCION:
        "ROUTER TP-LINK TL-WR850N - N300 MBPS - 2 ANTENAS - FUNCION WISP",
      PRECIO: "$62.000",
      CATEGORIA: "ROUTER",
    },
    {
      COD: "RTAC7504",
      DESCRIPCION: "ROUTER TP-LINK ARCHER C24 - DUAL BAND - AC750 - 4 ANTENAS",
      PRECIO: "$93.000",
      CATEGORIA: "ROUTER",
    },
    {
      COD: "RTAC7503",
      DESCRIPCION: "ROUTER TP-LINK ARCHER C20 - DUAL BAND - AC750 - 3 ANTENAS",
      PRECIO: "$118.000",
      CATEGORIA: "ROUTER",
    },
    {
      COD: "SWPF5",
      DESCRIPCION:
        "SWITCH DAHUA 5 PUERTOS ESCRITORIO 10/100M - DH-PFS3005-5ET-L 5",
      PRECIO: "$24.000",
      CATEGORIA: "SWITCH",
    },
    {
      COD: "SWPF8",
      DESCRIPCION:
        "SWITCH DAHUA 8 PUERTOS ESCRITORIO 10/100M - DH-PFS3008-8ET-L 8",
      PRECIO: "$30.000",
      CATEGORIA: "SWITCH",
    },
    {
      COD: "SWE5G5",
      DESCRIPCION:
        "SWITCH DAHUA 5 PUERTOS ESCRITORIO 10/100/1000M - DH-PFS3005-5GT-L 5",
      PRECIO: "$35.000",
      CATEGORIA: "SWITCH",
    },
    {
      COD: "SWE8G8",
      DESCRIPCION:
        "SWITCH DAHUA 8 PUERTOS ESCRITORIO 10/100/1000M - DH-PFS3008-8GT-L 8",
      PRECIO: "$65.000",
      CATEGORIA: "SWITCH",
    },
    {
      COD: "SW24GT8",
      DESCRIPCION:
        "SWITCH DAHUA 24 PUERTOS - PARA ESCRITORIO Y MONTAJE EN RACK - 10/100/1000M - DH-PFS3024-24GT 8",
      PRECIO: "$315.000",
      CATEGORIA: "SWITCH",
    },
  ];

  return (
    <div
      id="tablaPrecios"
      className="px-6 container mx-auto flex flex-col lg:flex-row flex-wrap justify-start items-center lg:inset-0 md:pt-72 lg:pb-96 text-white bg-opacity-80 min-h-screen flex justify-end items-center "
    >
      <div className="overflow-x-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 hover:text-cyan-900">
          Tabla de Productos
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 text-black px-4 py-2">
                Código
              </th>
              <th className="border border-gray-300 text-black px-4 py-2">
                Descripción
              </th>
              <th className="border border-gray-300 text-black px-4 py-2">
                Precio
              </th>
              <th className="border border-gray-300 text-black px-4 py-2">
                Categoría
              </th>
            </tr>
          </thead>
          <tbody>
            {datos.map((producto, index) => (
              <tr key={index}>
                <td className="opacity-70 border border-gray-300 px-4 py-2">
                  {producto.COD}
                </td>
                <td className="opacity-70 border border-gray-300 px-4 py-2">
                  {producto.DESCRIPCION}
                </td>
                <td className="opacity-70 border border-gray-300 px-4 py-2">
                  {producto.PRECIO}
                </td>
                <td className="opacity-70 border border-gray-300 px-4 py-2">
                  {producto.CATEGORIA}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-10">
          <SectionPrice />
        </div>
      </div>
    </div>
  );
};
