"use client";

import { useState, useEffect } from "react";

export default function useDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar si hay soporte para eventos táctiles
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();

    // Escuchar cambios en la orientación para detectar dispositivos híbridos
    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  // Alterna la visibilidad en dispositivos táctiles
  const handleToggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Manejo de visibilidad para escritorio
  const handleMouseEnter = () => {
    if (!isTouchDevice) setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setDropdownVisible(false);
  };

  return {
    isDropdownVisible,
    handleToggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
  };
}
