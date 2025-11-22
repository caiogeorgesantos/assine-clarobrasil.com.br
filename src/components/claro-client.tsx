"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getWhatsappLink } from "@/lib/utils";
import { Building, Headphones, Home, Shield, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ClaroClient() {
  const whatsappLink = getWhatsappLink();

  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const handleContactDialogOpen = () => {
    setIsContactDialogOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Já é cliente Claro?
            </h2>
            <p className="text-xl text-gray-700">
              Resolva tudo pelo app ou encontre a central de atendimento certa
              para você.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* App Minha Claro */}
            <Card className="bg-white border border-[#E5E5E5] rounded-lg shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Smartphone className="w-6 h-6 text-[#E60000] mr-3" />
                  <h3 className="text-2xl font-bold text-black">
                    App Minha Claro
                  </h3>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  O jeito mais rápido de resolver sua conta, faturas e
                  benefícios.
                </p>

                <div className="flex items-center justify-between">
                  {/* Lado esquerdo - QR Code e instruções */}
                  <div className="flex items-center space-x-6">
                    {/* QR Code */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/qrcode.png"
                        alt="QR Code para download do App Minha Claro"
                        className="w-32 h-32 rounded-lg"
                        width={128}
                        height={128}
                      />
                    </div>

                    {/* Textos e botão */}
                    <div className="flex flex-col">
                      <p className="text-gray-600 text-sm mb-1">
                        Acesse o QR Code
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        com seu celular
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        ou Clique abaixo
                      </p>

                      <Link
                        href="https://claro-e.com/K0XyB"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-[#E60000] hover:bg-[#CC0000] text-white px-6 py-2 rounded-lg transition-colors duration-200 w-fit">
                          Baixar App
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Lado direito - Imagem da mão com celular */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <Image
                      src="/hero-image.svg"
                      alt="Mão segurando celular com app Minha Claro"
                      className="w-48 max-w-full"
                      width={192}
                      height={384}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Centrais de Atendimento */}
            <Card className="bg-white border border-[#E5E5E5] rounded-lg shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Headphones className="w-8 h-8 text-[#E60000] mr-3" />
                  <h3 className="text-2xl font-bold text-black">
                    Centrais de Atendimento
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Residencial */}
                  <div className="flex items-start space-x-4">
                    <Home className="w-6 h-6 text-[#E60000] mt-1 stroke-2" />
                    <div>
                      <p className="text-gray-800 font-medium">Residencial:</p>
                      <p className="text-gray-700">
                        <Link href="tel:10621">10621</Link> /{" "}
                        <Link href="tel:10699">10699</Link>
                      </p>
                    </div>
                  </div>

                  {/* Celular */}
                  <div className="flex items-start space-x-4">
                    <Smartphone className="w-6 h-6 text-[#E60000] mt-1 stroke-2" />
                    <div>
                      <p className="text-gray-800 font-medium">Celular:</p>
                      <p className="text-gray-700">
                        <Link href="tel:1052">1052</Link> /{" "}
                        <span className="text-[#E60000] underline cursor-pointer">
                          <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            WhatsApp
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Empresas */}
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-[#E60000] mt-1 stroke-2" />
                    <div>
                      <p className="text-gray-800 font-medium">Empresas:</p>
                      <p className="text-gray-700">
                        <Link href="tel:08007211021">0800 721 1021</Link> /{" "}
                        <Link href="tel:10321">10321</Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span
                      onClick={handleContactDialogOpen}
                      className="text-[#E60000] hover:underline cursor-pointer"
                    >
                      Mais números e acessibilidade →
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-black text-center">
              Centrais de Atendimento Claro
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Encontre o número certo para seu produto e acesso à acessibilidade
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 py-4">
            {/* Produtos Claro na Sua Residência */}
            <div>
              <div className="flex items-center mb-4">
                <Home className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produtos Claro na Sua Residência
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Banda Larga, TV, Telefone Fixo e Claro Multi
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:10621">10621</Link>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    TV via Satélite e Internet via satélite
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:10699">10699</Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Produtos Claro no seu Celular */}
            <div>
              <div className="flex items-center mb-4">
                <Smartphone className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produtos Claro no seu Celular
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Celular (Pré Pago, Controle e Pós Pago) e Internet Móvel
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:1052">1052</Link>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Atendimento Claro no Exterior
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:+5511991995555">+55 11 99199-5555</Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Produtos PME */}
            <div>
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produtos PME (Pequenas e Médias Empresas)
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    PME Residencial - Banda Larga, TV, Telefone Fixo e Claro
                    Multi
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:10621">10621</Link>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    PME Residencial - TV via Satélite e Internet via Satélite
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:10699">10699</Link>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    PME Móvel - Celular (Pré Pago, Controle e Pós Pago) e
                    Internet Móvel
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:1052">1052</Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Produto Grandes Empresas */}
            <div>
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Produto Grandes Empresas (Embratel)
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Todos os Produtos</span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:08007211021">0800 721 1021</Link>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">
                    Produtos Longa Distância (LD21)
                  </span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:10321">10321</Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Ouvidoria Claro */}
            <div>
              <div className="flex items-center mb-4">
                <Headphones className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Ouvidoria Claro
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Todos os Produtos</span>
                  <span className="font-bold text-[#E60000]">
                    <Link href="tel:08007010180">0800 701 0180</Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Atendimento com acessibilidade */}
            <div>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[#E60000] mr-3" />
                <h3 className="text-xl font-bold text-black">
                  Atendimento com acessibilidade
                </h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">Todos os produtos</span>
                  <a
                    href="https://www.claro.com.br/institucional/regulatorio/acessibilidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E60000] underline hover:text-[#CC0000] transition-colors"
                  >
                    claro.com.br/acessibilidade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
