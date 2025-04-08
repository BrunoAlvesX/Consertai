import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica de cadastro real (API etc)
    console.log("Usuário cadastrado:", { email, senha });

    // Redireciona para a tela de login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Concertai</h1>
          <p className="text-gray-500">Crie sua conta</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@email.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
