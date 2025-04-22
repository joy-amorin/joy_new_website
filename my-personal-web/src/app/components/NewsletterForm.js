import React, { useState } from "react";

const NewsletterForm = ({ onSubmit, downloadUrl }) => { // Recibe la prop downloadUrl
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/22621291/2xgl0a3/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        onSubmit(); // Llama a la función onSubmit cuando el correo se envíe con éxito

        // Iniciar la descarga del eBook después de enviar el correo
        window.location.href = downloadUrl; // Esto iniciará la descarga
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <label htmlFor="email" className="text-foreground">
        Ingresa tu correo electrónico:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="p-2 text-background border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
      >
        Descargar eBook
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-500">¡Gracias! El correo ha sido enviado correctamente.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-500">Hubo un error. Intenta nuevamente.</p>
      )}
    </form>
  );
};

export default NewsletterForm;
