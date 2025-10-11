import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Subscribe = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🎉 Você foi adicionado à fila de espera!");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#FFF9E8] px-6 py-10 md:py-0">
      {/* IMAGEM */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          src="../public/subscription.png"
          alt="ThinkForge product"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* FORMULÁRIO */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2A3A4D]">
            Entre na Fila de Espera
          </h1>

          <p className="text-[#445566] text-base md:text-lg mb-8 leading-relaxed">
            Garanta seu lugar e seja o primeiro a testar as novas
            funcionalidades de ensino com uma ferramenta pensada para os
            educadores.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              className="px-4 py-2.5 rounded-lg border border-[#DDD] bg-white text-gray-800 placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#1E4ED8] transition"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              className="px-4 py-2.5 rounded-lg border border-[#DDD] bg-white text-gray-800 placeholder:text-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[#1E4ED8] transition"
            />

            <Button
              type="submit"
              className="w-full text-base font-medium bg-[#204070] hover:bg-[#2a4d91] text-white rounded-lg py-3 shadow-md"
            >
              Quero Participar
            </Button>
          </form>

          {/* BOTÃO VOLTAR */}
          <button
            onClick={() => navigate("/")}
            className="mt-8 text-sm font-medium text-[#445566] hover:text-[#1E4ED8] transition-colors"
          >
            ← Voltar para a Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;