"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const pawRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            setIsFinished(true);
            if (onComplete) onComplete();
          },
        });
      },
    });

    tl.fromTo(
      pawRef.current,
      { scale: 0, opacity: 0, rotate: -20 },
      { scale: 1.2, opacity: 1, rotate: 0, duration: 0.6, ease: "back.out(1.8)" }
    );

    tl.fromTo(
      lineRef.current,
      { width: "0%" },
      { width: "100%", duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );

    const letters = textRef.current?.querySelectorAll(".letter");
    if (letters && letters.length > 0) {
      tl.fromTo(
        letters,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.03, duration: 0.4, ease: "power3.out" },
        "-=0.5"
      );
    }

    tl.to({}, { duration: 0.2 });

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [onComplete]);

  if (isFinished) return null;

  const brandName = "LIFELINE PET CARE";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#00201d] text-white flex flex-col items-center justify-center overflow-hidden font-sans"
    >
      <div className="absolute w-96 h-96 bg-[#6bd8cb]/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center space-y-6">
        <div
          ref={pawRef}
          className="w-20 h-20 rounded-full bg-[#00685f] border-2 border-[#6bd8cb]/40 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(107,216,203,0.4)]"
        >
          🐾
        </div>

        <div className="w-full h-1 bg-[#005048] rounded-full overflow-hidden">
          <div
            ref={lineRef}
            className="h-full bg-gradient-to-r from-[#6bd8cb] via-[#89f5e7] to-[#6bd8cb] shadow-[0_0_15px_#6bd8cb]"
          ></div>
        </div>

        <div ref={textRef} className="overflow-hidden">
          <h1 className="text-2xl sm:text-3xl font-black tracking-widest text-[#89f5e7] flex justify-center gap-1">
            {brandName.split("").map((char, index) => (
              <span key={index} className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-[#6bd8cb]/80 font-bold">
            Preparing Ultra-Premium Veterinary Sanctuary
          </p>
          <div className="text-2xl font-black text-white font-mono">
            {progress}<span className="text-[#6bd8cb] text-lg">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
