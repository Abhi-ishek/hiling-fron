import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const AmbientAuraFollower = () => {
  const [hasPointer, setHasPointer] = useState(false);

  // Smooth springs for golden aura coordinates
  const springX = useSpring(-100, { stiffness: 120, damping: 20 });
  const springY = useSpring(-100, { stiffness: 120, damping: 20 });

  useEffect(() => {
    // Only activate for non-touch devices to save mobile battery
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setHasPointer(true);

    const handlePointerMove = (e) => {
      springX.set(e.clientX - 160);
      springY.set(e.clientY - 160);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [springX, springY]);

  if (!hasPointer) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-30 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.14)_0%,rgba(147,51,234,0.06)_45%,transparent_70%)] blur-2xl"
      aria-hidden="true"
    />
  );
};

export default AmbientAuraFollower;
