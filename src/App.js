import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Draggable from "gsap/Draggable";
import Hero from "./components/hero";
import ScrollSection from "./components/scrollSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

// eslint-disable-next-line no-undef

const App = () => {
  // const class_one = useRef();
  // const class_two = useRef();
  // const class_three = useRef();

  // const text_build = useRef();
  // const text_shape = useRef();

  // const move = () => {
  //   gsap.fromTo(
  //     class_two.current,
  //     { opacity: 0, x: 0 },
  //     {
  //       opacity: 1,
  //       x: 400,
  //       duration: 4,
  //       rotation: -360,
  //       ease: "bounce.out",
  //       delay: 3,
  //       repeat: -1,
  //       yoyo: true,
  //       onStart: movetwo(),
  //     }
  //   );
  // };

  // const movetwo = () => {
  //   gsap.fromTo(
  //     class_three.current,
  //     { opacity: 0, x: 0 },
  //     { opacity: 1, x: 500, duration: 6, ease: "slow" }
  //   );
  // };

  // const moveBox = (e) => {
  //   gsap.set(class_one.current, { xPercent: 0, yPercent: 0 });
  //   const xSetter = gsap.quickSetter(class_one.current, "x", "px");
  //   const ySetter = gsap.quickSetter(class_one.current, "y", "px");

  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;

  //   xSetter(mouseX);
  //   ySetter(mouseY);
  // };

  // const stopBox = (e) => {
  //   gsap.set(class_one.current, { xPercent: 0, yPercent: 0 });

  //   const xSetter = gsap.quickSetter(class_one.current, "x", "px");
  //   const ySetter = gsap.quickSetter(class_one.current, "y", "px");

  //   const mouseX = 0;
  //   const mouseY = 0;

  //   xSetter(mouseX);
  //   ySetter(mouseY);
  // };

  // const triggerText = () => {
  //   gsap.fromTo(
  //     text_build.current,
  //     { x: 0, y: 30, opacity: 0 },
  //     {
  //       x: 40,
  //       y: 0,
  //       duration: 3,
  //       delay: 1,
  //       opacity: 1,
  //       ease: "elastic",
  //       yoyo: true,
  //       scrollTrigger: {
  //         trigger: text_shape.current,
  //         toggleActions: "restart pause resume",
  //       },
  //     }
  //   );
  // };

  // const scroll = () => {
  //   gsap.to(window, {
  //     duration: 2,
  //     scrollTo: text_build.current,
  //     ease: "power2",
  //   });
  // };

  // const drag = () => {
  //   Draggable.create(class_three.current, {
  //     type: "x",
  //     bounds: text_shape.current,
  //   });
  // };

  // useEffect(() => {
  //   move();
  //   triggerText();
  //   drag();
  // });

  return (
    <>
      <main>
        <Hero />
        <ScrollSection />
        <div className="w-full h-screen flex flex-col items-center justify-center text-[2vw] text-center px-8 text-red-700">
          Don’t forget to like, comment, and subscribe for more tutorials on web
          development and animations! If you have any questions or suggestions,
          feel free to leave them in the comments below.
        </div>
      </main>
    </>
  );
};

export default App;
