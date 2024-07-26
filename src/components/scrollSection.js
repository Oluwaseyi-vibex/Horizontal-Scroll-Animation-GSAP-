import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-[100vh] w-[400vw] flex relative ">
          <div className="scroll-section h-[100vh] w-[100vw] flex items-center justify-center ">
            <h3 className="text-[16vw] uppercase">machine</h3>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex items-center justify-center">
            <h3 className="text-[16vw] uppercase">learning</h3>
          </div>
          <div className="scroll-section h-[100vh] w-[100vw] flex items-center justify-center">
            <h3 className="text-[16vw] uppercase">engineer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
