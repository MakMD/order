import React from "react";

const ContactInfo = () => {
  // Використаємо CSS Modules, якщо є, або інлайн-стилі для простоти
  const infoSectionStyles = {
    backgroundColor: "#f9fafb", // bg-gray-50
    padding: "2rem",
    borderRadius: "0.5rem",
  };

  const itemStyles = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "1.5rem",
  };

  const svgStyles = {
    width: "1.5rem",
    height: "1.5rem",
    marginRight: "1rem",
    color: "#3b82f6", // text-blue-600
    flexShrink: 0,
    marginTop: "0.25rem",
  };

  const headingStyles = {
    fontWeight: "600",
    marginBottom: "0.25rem",
  };

  const linkStyles = {
    color: "#3b82f6",
    textDecoration: "none",
  };

  return (
    <div style={infoSectionStyles}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Контактна інформація
      </h2>
      <div style={{ color: "#374151" }}>
        {/* Address */}
        <div style={itemStyles}>
          <svg
            style={svgStyles}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <div>
            <h4 style={headingStyles}>Адреса</h4>
            <p>6327 Dalmarnock Crescent NW, Calgary, AB T3A 1H3</p>
          </div>
        </div>

        {/* Email */}
        <div style={itemStyles}>
          <svg
            style={svgStyles}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <div>
            <h4 style={headingStyles}>Email</h4>
            <a href="mailto:hello@yourcreativedev.com" style={linkStyles}>
              myroslav.dzikh@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div style={itemStyles}>
          <svg
            style={svgStyles}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <div>
            <h4 style={headingStyles}>Телефон</h4>
            <a href="tel:+380991234567" style={linkStyles}>
              +1 587 545 9399
            </a>
          </div>
        </div>

        {/* Hours */}
        <div style={{ ...itemStyles, marginBottom: "0" }}>
          <svg
            style={svgStyles}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h4 style={headingStyles}>Години роботи</h4>
            <p>Пн - Пт: 9:00 - 22:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
