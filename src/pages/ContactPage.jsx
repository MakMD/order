import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Зв'яжіться з нами</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Маєте ідею для проєкту або просто хочете дізнатись більше? Заповніть
            форму, і ми зв'яжемося з вами найближчим часом.
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
