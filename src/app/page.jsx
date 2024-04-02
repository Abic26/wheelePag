"use client";
import React from "react";
import './globals.css'
import { NavbarComponent } from "./components/utilities/navbar";
import { HomeComponent } from "./components/sections/home";
import { SobreMiComponent } from "./components/sections/sobreMi";
import { ExperienciaComponent } from "./components/sections/experiencia";

import "@/app/pages/_apps"

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_90%_90%_at_10%_-2%,rgb(17,76,83),rgba(255,255,255,0))] overflow-x-auto">
        <NavbarComponent />
        <div className="flex flex-col justify-center items-center">
          <HomeComponent />
          <ExperienciaComponent/>
          <SobreMiComponent/>
        </div>
      </div>
    </div>
  );
}
