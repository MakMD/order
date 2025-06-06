import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-6 text-center">
        <p>&copy; {currentYear} YourCreativeDev. Всі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;
