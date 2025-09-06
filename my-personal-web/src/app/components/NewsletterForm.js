import React, { useState } from "react";

const NewsletterForm = ({ onSubmit, downloadUrl }) => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // evita que el formulario se envíe de manera tradicional

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/22621291/2xgl0a3/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        onSubmit(); // llama a la función onSubmit cuando el correo se envíe con éxito

        // forzar la descarga del eBook
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = downloadUrl.split("/").pop(); // nombre del archivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

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
        <p className="mt-4 text-green-500">¡Genial! Tu mini guía ha sido descargada exitosamente.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-500">Hubo un error. Intenta nuevamente.</p>
      )}
    </form>
  );
};

export default NewsletterForm;
