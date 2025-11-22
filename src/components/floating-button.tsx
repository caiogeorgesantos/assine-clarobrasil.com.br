"use client";

import { getWhatsappLink } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingButton() {
  const whatsappLink = getWhatsappLink();

  const [isExpanded, setIsExpanded] = useState(true);
  const [minutes, setMinutes] = useState(44);
  const [onlineUsers, setOnlineUsers] = useState(244);

  const now = new Date();
  const hours = now.getHours();

  useEffect(() => {
    if (!isExpanded) return;

    // Faz a versão extendida aparecer após 10 segundos, e desaparecer após 5 segundos
    const timer = setTimeout(() => {
      setIsExpanded(true);

      const hideTimer = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isExpanded]);

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutes((prevMinutes) => {
        if (prevMinutes === 0) {
          return 44;
        }
        return prevMinutes - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes]);

  useEffect(() => {
    const timer = setInterval(() => {
      // Gera um número aleatório entre 244 e 300
      const newOnlineUsers = Math.floor(Math.random() * (300 - 244 + 1)) + 244;
      setOnlineUsers(newOnlineUsers);
    }, 3000);

    return () => clearInterval(timer);
  }, [onlineUsers]);

  function handleCloseExpandedButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsExpanded(false);
  }

  if (hours >= 18) {
    return null;
  }

  return (
    <>
      {/* Versão Desktop - botão arredondado completo */}
      <div className="hidden md:block fixed bottom-12 right-4 z-[9999]">
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row-reverse items-center justify-center"
        >
          <button
            className={`${
              isExpanded ? "w-14 h-14" : "w-16 h-16"
            } bg-whatsapp transition-all duration-300 rounded-full flex items-center justify-center shadow-lg border-2 border-white drop-shadow-lg drop-shadow-whatsapp/50 z-10 cursor-pointer`}
            title="Fale conosco pelo WhatsApp"
          >
            {/* Ícone do WhatsApp */}
            <Image
              src="/icons/whatsapp.svg"
              alt=""
              width={40}
              height={40}
              className={`${isExpanded ? "w-8 h-8" : "w-10 h-10"} z-10`}
            />

            {/* Badge de notificação mobile */}
            <div className="absolute -top-3 -right-2 bg-[#E30613] text-white rounded-full flex items-center justify-center font-bold text-xs w-7 h-7 border-2 border-white z-20">
              1
            </div>
          </button>

          {/* Versão expandida */}
          {isExpanded && (
            <div
              className={`relative bg-whatsapp rounded-2xl flex flex-col justify-center drop-shadow-lg drop-shadow-whatsapp/50 w-[277px] -mr-16 -mt-4`}
            >
              <span className="flex items-center justify-between border-b border-white/30 px-4 py-2">
                <span className="flex items-center justify-start gap-2 text-left">
                  <span className="inline-block h-2 w-2 bg-[#7BF1A8] rounded-full"></span>
                  <span className="text-white text-shadow-sm font-normal text-sm">
                    {onlineUsers} online agora
                  </span>
                </span>

                <span className="bg-[#E30613] text-white text-shadow-sm rounded-xl flex items-center justify-center font-bold text-xs h-7 border-2 border-white px-2 drop-shadow-lg">
                  03:{minutes.toString().padStart(2, "0")}
                </span>
              </span>

              <span className="flex flex-col justify-center px-4 py-1 h-20">
                <span className="text-white text-shadow-sm text-lg font-bold text-left">
                  Desconto Especial
                </span>
                <span className="text-white text-shadow-sm text-sm font-medium text-left">
                  Planos Claro até 40% OFF
                </span>
              </span>

              <span className="flex items-center justify-start gap-2 text-left border-t border-white/30 px-4 py-2">
                <span className="inline-block h-2 w-2 bg-[#E30613] rounded-full"></span>
                <span className="text-white text-shadow-sm font-normal text-sm">
                  Oferta exclusiva hoje
                </span>
              </span>

              {/* Botão para fechar a versão expandida */}
              <button
                className="absolute -top-2 -left-2 text-white text-shadow-sm bg-black rounded-full w-5 h-5 flex items-center justify-center text-lg leading-none z-10 cursor-pointer"
                onClick={handleCloseExpandedButton}
                title="Fechar"
              >
                <X className="w-3 h-3" />
                <span className="sr-only">Fechar</span>
              </button>
            </div>
          )}
        </Link>
      </div>

      {/* Versão Mobile - apenas círculo */}
      <div className="sm:hidden fixed bottom-4 right-4 z-[9999]">
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row-reverse items-center justify-center"
        >
          <button className="w-16 h-16 bg-whatsapp transition-all duration-300 rounded-full flex items-center justify-center shadow-lg border-2 border-white drop-shadow-lg drop-shadow-whatsapp/50 z-10">
            {/* Ícone do WhatsApp */}
            <Image
              src="/icons/whatsapp.svg"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 z-10"
            />

            {/* Badge de notificação mobile */}
            <div className="absolute -top-3 -right-2 bg-[#E30613] text-white text-shadow-sm rounded-full flex items-center justify-center font-bold text-xs w-7 h-7 border-2 border-white z-20">
              1
            </div>
          </button>

          {/* Versão expandida */}
          {isExpanded && (
            <div
              className={`relative bg-whatsapp rounded-2xl flex flex-col justify-center px-4 py-1 pr-20 -mr-14 drop-shadow-lg drop-shadow-whatsapp/50`}
            >
              <span className="text-white text-shadow-sm text-base font-bold text-left">
                Desconto Especial
              </span>
              <span className="flex items-center justify-start gap-2 text-left">
                <span className="inline-block h-2 w-2 bg-[#E30613] rounded-full"></span>
                <span className="text-white text-shadow-sm font-normal text-sm">
                  Oferta exclusiva hoje
                </span>
              </span>

              {/* Botão para fechar a versão expandida */}
              <button
                className="absolute -top-2 -left-2 text-white bg-black rounded-full w-5 h-5 flex items-center justify-center text-lg leading-none z-10"
                onClick={handleCloseExpandedButton}
              >
                <X className="w-3 h-3" />
                <span className="sr-only">Fechar</span>
              </button>
            </div>
          )}
        </Link>
      </div>
    </>
  );
}
