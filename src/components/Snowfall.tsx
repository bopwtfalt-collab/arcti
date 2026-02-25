import { useEffect, useRef } from "react";

const Snowfall = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSnowflake = () => {
      const flake = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 5;

      flake.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(180, 220, 255, 0.9) 0%, rgba(180, 220, 255, 0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 50;
        animation: snowfall ${duration}s linear ${delay}s infinite;
      `;

      container.appendChild(flake);
      return flake;
    };

    const flakes: HTMLDivElement[] = [];
    for (let i = 0; i < 40; i++) {
      flakes.push(createSnowflake() as HTMLDivElement);
    }

    return () => {
      flakes.forEach((f) => f.remove());
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
};

export default Snowfall;
