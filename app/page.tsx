"use client";
import { MenuBar } from "./component/menuBar";
import { HeroSection } from "./component/heroSection";
import { Section3 } from "./component/Section3";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Section4 } from "./component/section4";
import { Section5 } from "./component/section5";
import { Footer } from "./component/footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="md:px-5 px-3">
      <MenuBar/>
      <HeroSection />
      <Section3 />
      <Section5 />
      <Section4 />
      <Footer/>
    </div>
  );
}
