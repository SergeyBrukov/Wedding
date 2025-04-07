"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import { useTimerDateEvent } from "@/hooks/useTimerDateEvent";
import { Fireworks } from "fireworks-js";

const TimeBlockMainSection = () => {
  const { timeLeft } = useTimerDateEvent(new Date("2025-09-23T00:00:00"));
  const fireworksRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    if (!timeLeft && fireworksRef.current && !instanceRef.current) {
      const fireworks = new Fireworks(fireworksRef.current, {
        autoresize: true,
        opacity: 0.8,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.2,
        particles: 100,
        traceLength: 5,
        traceSpeed: 20,
        explosion: 10,
        intensity: 80,
        flickering: 60,
        lineStyle: "round",
        hue: { min: 0, max: 360 },
        delay: { min: 10, max: 30 },
        rocketsPoint: { min: 0, max: 100 },
        lineWidth: {
          explosion: { min: 1, max: 3 },
          trace: { min: 1, max: 2 },
        },
        brightness: { min: 60, max: 90 },
        decay: { min: 0.01, max: 0.02 },
        mouse: { click: false, move: false, max: 1 },
      });


      instanceRef.current = fireworks;
      fireworks.start();

      return () => {
        setTimeout(() => {
          fireworks.stop();
        }, 3000);
      };
    }
  }, [timeLeft]);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="mt-10 flex justify-center gap-5 md:gap-10 text-xl md:text-6xl font-bold font-avenir">
        <div>
          <p>...</p>
          <p className="text-sm md:text-2xl">день</p>
        </div>
        <div>
          <p>...</p>
          <p className="text-sm md:text-2xl">година</p>
        </div>
        <div>
          <p>...</p>
          <p className="text-sm md:text-2xl">хвилина</p>
        </div>
        <div>
          <p>...</p>
          <p className="text-sm md:text-2xl">секунда</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {timeLeft ? (
        <div className="mt-10 flex justify-center gap-5 md:gap-10 text-xl md:text-6xl font-bold font-avenir">
          <div>
            <p>{timeLeft.days}</p>
            <p className="text-sm md:text-2xl">день</p>
          </div>
          <div>
            <p>{timeLeft.hours}</p>
            <p className="text-sm md:text-2xl">година</p>
          </div>
          <div>
            <p>{timeLeft.minutes}</p>
            <p className="text-sm md:text-2xl">хвилина</p>
          </div>
          <div>
            <p>{timeLeft.seconds}</p>
            <p className="text-sm md:text-2xl">секунда</p>
          </div>
        </div>
      ) : (
        <div className="mt-10 text-sm md:text-2xl font-semibold">
          Великий день настав! 🥂
        </div>
      )}
      <div ref={fireworksRef} className="fixed inset-0 pointer-events-none z-50" />
    </>
  );
};

export default memo(TimeBlockMainSection);
