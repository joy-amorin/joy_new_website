import React from "react";

const NewsletterForm = () => {
  return (
    <form
      action="https://hooks.zapier.com/hooks/catch/22621291/2xgl0a3/" // URL del webhook de Zapier
      method="POST"
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <label htmlFor="email" className="font-semibold">
        Ingresa tu correo electrónico:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
      >
        Descargar eBook
      </button>
    </form>
  );
};

export default NewsletterForm;
