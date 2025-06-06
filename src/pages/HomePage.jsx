import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Вміст секцій Hero, Features, Services Overview, CTA перенесено сюди
  // Замість <a> використовуються <Link> для внутрішньої навігації
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Створюємо цифрові рішення, що надихають
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Від ідеї до запуску: ми перетворюємо ваші бізнес-цілі на ефективні
            веб-сайти та додатки.
          </p>
          <Link
            to="/services"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 smooth-transition text-lg"
          >
            Дізнатися більше про послуги
          </Link>
        </div>
      </section>

      {/* Інші секції (Features, Services Overview, CTA) з index.html */}
      {/* ... їхній JSX-код аналогічний до HTML ... */}

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Готові розпочати ваш проєкт?
          </h2>
          <p className="mb-6">
            Давайте обговоримо ваші ідеї та знайдемо найкраще рішення для вашого
            бізнесу.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 smooth-transition"
          >
            Зв'язатися з нами
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
