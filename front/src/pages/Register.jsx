import { useState } from 'react';
import concertai from '../assets/concertailogo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Aqui você pode chamar a API de login
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center">
          <img src={concertai} alt="Logo ConsertAI" className="h-48 object-contain" />

        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">Cadastre sua conta</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Nome</label>
            <input
              type="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Cadastrar
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Faça o Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}