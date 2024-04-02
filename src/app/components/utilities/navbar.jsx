// "use client";
import { Button, Navbar } from "keep-react";
import { Heart, GithubLogo, ShoppingCart, User } from "phosphor-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import Image from 'next/image';

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-transparent fixed top-0 left-0 right-0 z-50  backdrop-blur-lg">
      <Navbar.Container className="flex items-center justify-between pt-2">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8 pl-20"
        >
          <Navbar.Link href="#home"  className="text-white opacity-45 hover:opacity-100" linkName="Home"/>
          <Navbar.Link href="#acerdaDe"  className="text-white opacity-45 hover:opacity-100" linkName="Acerca de"/>
          <Navbar.Link href="#sobreNosotros" className="text-white opacity-45 hover:opacity-100" linkName="Sobre Nosotros "/>
          <Navbar.Link  href="#metodosDePago " className="text-white opacity-45 hover:opacity-100" linkName="Métodos de pago "/>


        </Navbar.Container>
        

        <Navbar.Collapse collapseType="sidebar" className="bg-transparent text-white">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
          <Navbar.Link href="#home"  className="opacity-50 hover:opacity-100" linkName="Home"/>
          <Navbar.Link href="#acerdaDe"  className="opacity-50 hover:opacity-100" linkName="Acerca de"/>
          <Navbar.Link href="#sobreNosotros "  className="opacity-50 hover:opacity-100" linkName="Sobre Nosotros "/>
          <Navbar.Link href="#metodosDePago "  className="opacity-50 hover:opacity-100" linkName="Métodos de pago "/>
          <Navbar.Container
            tag="ul"
            className="flex items-center justify-around pt-2"
          >
            <Navbar.Link className="opacity-50 hover:opacity-100" href="https://wa.me/3117612960"
              icon={<FaWhatsapp  size={25} />}
              iconAnimation={false}
            />
          </Navbar.Container>
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3 pr-20">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link className="text-white hover:text-cyan-900 opacity-50 hover:opacity-100" href="https://wa.me/3117612960"
              icon={<FaWhatsapp  size={25}  />}
              iconAnimation={false}
            />
          </Navbar.Container>
          <Navbar.Toggle className="text-white opacity-100 hover:opacity-40 backdrop-blur-lg" />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
