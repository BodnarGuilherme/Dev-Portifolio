"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import type React from "react";

export const ConsoleToggleButton = () => {
  // Estado para saber se o rodapé está visível
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Efeito que observa o rodapé de forma segura
  useEffect(() => {
    let observer: IntersectionObserver;

    // O setTimeout atrasa a execução para garantir que o rodapé já exista na página
    const timer = setTimeout(() => {
      const footerElement = document.querySelector("#site-footer");
      if (!footerElement) return;

      // Cria o observador
      observer = new IntersectionObserver(
        ([entry]) => {
          // Muda o estado baseado na visibilidade do rodapé
          setIsFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Gatilho quando 10% do rodapé está na tela
      );

      // Inicia a observação
      observer.observe(footerElement);
    }, 100); // Atraso de 100ms

    // A função de limpeza é crucial
    return () => {
      clearTimeout(timer); // Limpa o timer se o componente for desmontado
      if (observer) {
        observer.disconnect(); // E desconecta o observador se ele foi criado
      }
    };
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // Função que dispara o evento para abrir/fechar o console
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("toggleConsole"));
  };

  return (
    <Button 
      variant="outline"
      size="icon"
      onClick={handleClick}
      title="Abrir Console (Ctrl + .)"
      // A classe de posicionamento agora funciona de forma confiável
      className={`fixed left-5 z-40 transition-all ease-in-out duration-300
                 ${isFooterVisible ? 'bottom-24' : 'bottom-5'}
                 text-primary border-primary/50 hover:bg-primary/10 hover:border-primary`}
    >
      {">_"}
    </Button>
  );
};