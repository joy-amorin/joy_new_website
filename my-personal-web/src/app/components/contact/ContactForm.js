"use client"

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    form.current,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("✅ ¡Mensaje enviado con éxito!");
      e.target.reset();
    }, (error) => {
      alert("❌ Error al enviar: " + JSON.stringify(error));
    });
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="max-w-xl mx-auto p-6 rounded space-y-4 border border-foreground/30 mt-20" 
    >
      <h2 className="text-2xl text-foreground font-body mb-4">
        ¿Problemas con tu compra? Contáctanos
      </h2>

      <div>
        <label className="block text-foreground font-body mb-2">Nombre:</label>
        <input 
          type="text" 
          name="name" 
          required 
          className="w-full border border-foreground/30 rounded px-3 py-2 font-body text-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-foreground font-body mb-2">Email:</label>
        <input 
          type="email" 
          name="email" 
          required 
          className="w-full border border-foreground/30 rounded px-3 py-2 font-body text-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-foreground font-body mb-2">Producto/s:</label>
        <input 
          type="text" 
          name="order" 
          className="w-full border border-foreground/30 rounded px-3 py-2 font-body text-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-foreground font-body mb-2">Mensaje:</label>
        <textarea 
          name="message" 
          rows="4" 
          required 
          className="w-full border border-foreground/30 rounded px-3 py-2 font-body text-background focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="bg-primary text-foreground px-4 py-2 rounded font-body hover:brightness-110 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
