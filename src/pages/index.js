// import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Menu from "@/components/Menu/menu";
import Cartaoinicial from "@/components/Cartaoinicial/cartao";
import Sobremim from "@/components/Sobremim/sobremim";
import Cartaotecnologia from "@/components/Cartaotecnologia/cartaotecnologia";
import Projetos from "@/components/Projetos/projetos";
import Contatos from "@/components/Contatos/contatos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
 <>
 <Cartaoinicial/>
    <Menu/>
    <Sobremim/>
    <Cartaotecnologia/>
    <Projetos/>
    <Contatos/>
    
 </>
  );
}
