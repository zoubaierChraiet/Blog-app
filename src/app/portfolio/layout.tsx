import React from "react";

const PortfolioLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <h2 className="text-7xl font-bold mb-4">Our works</h2>
      {children}
    </>
  );
};

export default PortfolioLayout;
