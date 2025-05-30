import { useState } from 'react';
import concertai from '../assets/concertailogo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-customBlue">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <Link to="/" className="flex justify-center">
          <img src={concertai} alt="Logo ConsertAI" className="h-48 object-contain" />

        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-800">Entrar na sua conta</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 ">Email</label>
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
            className="w-full py-2 font-semibold text-white bg-customBlue rounded-lg hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        <div className="text-center">
          <p className="text-gray-600">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}