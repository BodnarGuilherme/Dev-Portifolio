"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import type React from "react";

export const ConsoleToggleButton = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    const timer = setTimeout(() => {
      const footerElement = document.querySelector("#site-footer");
      if (!footerElement) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(footerElement);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("toggleConsole"));
  };

  return (
    <Button 
      variant="outline"
      size="icon"
      onClick={handleClick}
      title="Abrir Console (Ctrl + .)"
      className={`fixed left-5 z-40 transition-all ease-in-out duration-300
                 ${isFooterVisible ? 'bottom-12' : 'bottom-5'} // <<< A MUDANÇA ESTÁ AQUI
                 text-primary border-primary/50 hover:bg-primary/10 hover:border-primary`}
    >
      {">_"}
    </Button>
  );
};