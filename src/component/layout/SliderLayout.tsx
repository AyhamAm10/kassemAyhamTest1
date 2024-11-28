import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface SliderLayoutProps {
  children?: React.ReactNode;
  style? : string
}

const SliderLayout: React.FC<SliderLayoutProps> = ({ children , style }) => {
  const containerRef = useRef<HTMLDivElement>(null); 
  const contentRef = useRef<HTMLDivElement>(null);   
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;


      const leftConstraint = -(contentWidth - containerWidth);

      setConstraints({ left: leftConstraint, right: 0 });
    }
  }, []);

  return (
    <section ref={containerRef} className="overflow-hidden" style={{ width: "100%" }}>
      <motion.div
        ref={contentRef}
        className={`cursor-grab lg:cursor-auto ${style}`}
        drag="x"
        dragConstraints={constraints} 
        style={{ display: "flex", whiteSpace: "nowrap" }} 
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SliderLayout;
