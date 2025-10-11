import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { supabase } from "@/lib/supabaseClient";

const Subscribe = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // controla envio
  const [submitted, setSubmitted] = useState(false);

  // 🔹 envia para o Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const { error } = await supabase.from("waitlist").insert([{ name, email }]);
      if (error) {
        console.error(error);
        alert("Ocorreu um erro ao enviar sua inscrição. Tente novamente.");
      } else {
        setSubmitted(true); // mostra a mensagem de sucesso
      }
    } catch (err) {
      console.error(err);
      alert("Erro de conexão com o servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9E8] flex flex-col justify-center items-center px-6 py-10 relative">
      {/* 🔹 Botão de idioma fixo, flutuante no canto superior direito */}
      <div className="absolute top-4 right-6">
        <LanguageSwitcher />
      </div>

      {/* 🔹 Layout principal */}
      <main className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-6xl w-full">
        {/* Imagem */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="./public/subscription.png"
            alt="Educação"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Conteúdo: formulário OU mensagem */}
        <div className="w-full lg:w-1/2 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-md text-center transition-all duration-500">
          {!submitted ? (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {t.subscribe.title}
              </h1>
              <p className="text-gray-600 mb-8">{t.subscribe.description}</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t.subscribe.namePlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.subscribe.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="mt-4 w-full text-lg bg-[#1E3A8A] hover:bg-[#1E40AF]"
                >
                  {t.subscribe.button}
                </Button>
              </form>
            </>
          ) : (
            // 🔹 Mensagem após envio
            <div className="animate-in fade-in duration-700">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.subscribe.successTitle}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {t.subscribe.successMessage}
              </p>
            </div>
          )}

          {/* 🔹 Botão de voltar sempre visível abaixo */}
          <Button
            variant="link"
            onClick={() => navigate("/")}
            className="text-primary hover:text-primary/80 mt-6 text-sm"
          >
            ← {t.subscribe.back}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Subscribe;