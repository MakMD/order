import React from "react";

const PortfolioPage = () => {
  const containerStyles = {
    padding: "4rem 1.5rem",
    textAlign: "center",
  };

  const titleStyles = {
    fontSize: "2.25rem", // 36px
    fontWeight: "700",
    marginBottom: "1rem",
  };

  const textStyles = {
    fontSize: "1.125rem", // 18px
    color: "#4b5563", // text-gray-600
  };

  return (
    <div className="container" style={containerStyles}>
      <h1 style={titleStyles}>Наше Портфоліо</h1>
      <p style={textStyles}>Ця сторінка наразі знаходиться у розробці.</p>
      <p style={textStyles}>
        Незабаром тут з'являться приклади наших найкращих робіт!
      </p>
    </div>
  );
};

export default PortfolioPage;
