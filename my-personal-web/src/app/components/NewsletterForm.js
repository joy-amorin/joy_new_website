"use client";

import { useEffect } from "react";

const NewsletterForm = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.mailerlite.com/js/universal.js"]'
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.ml === "function") {
        window.ml("account", "1468258"); //ID de MailerLite
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="ml-embedded" data-form="BnayXz"></div>
    </div>
  );
};

export default NewsletterForm;
