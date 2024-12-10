"use client";
import { useState, useEffect } from "react";

export default function useDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detectar si el dispositivo es táctil
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Alterna la visibilidad en dispositivos táctiles
  const handleToggleDropdown = () => {
    if (isTouchDevice) {
      setDropdownVisible((prev) => !prev);
    }
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
