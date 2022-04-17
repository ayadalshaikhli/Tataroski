import { gsap, Expo } from "gsap/dist/gsap";
import React, { useEffect } from "react";
const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

export default function FrontPage() {
  useEffect(() => {
    tl.from(".line", 2.5, {
      opacity: 0,
      y: -100,
      delay: 1,
    });
  });

  return (
    <div style={{ height: "70vh" }} className="relative text-white  s">
      <div className="justify-center text-center">
        <div className="line pt-36 text-4xl font-mono">
          <span>Ignite Your Dreams</span>
        </div>
        <div className="line font-mono py-5 text-xl">
          <span>
            Be your boldest self and embrace a new world of wonder in crystal
            and color.
          </span>
        </div>
      </div>
    </div>
  );
}
