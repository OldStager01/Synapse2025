import React from "react";

const SpiderWeb = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 2L58 30L78 20L66 40L94 50L66 60L78 80L58 70L50 98L42 70L22 80L34 60L6 50L34 40L22 20L42 30L50 2Z"
        stroke="white"
        strokeWidth="2"
        strokeOpacity="0.3"
        fill="none"
      />
    </svg>
  );
};

export default SpiderWeb;
