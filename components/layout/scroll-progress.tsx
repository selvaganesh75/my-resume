"use client";
 
import { useEffect, useState } from "react";
 
export function ScrollProgress() {
  const [width, setWidth] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;
 
      const progress =
        (window.scrollY / total) * 100;
 
      setWidth(progress);
    };
 
    window.addEventListener("scroll", handleScroll);
 
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);
 
  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 bg-blue-500"
      style={{
        width: `${width}%`,
      }}
    />
  );
}
 