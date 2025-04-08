import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTools, FaMobileAlt, FaLaptop, FaTabletAlt } from 'react-icons/fa';

const companies = [
  { name: 'TechFix', logo: '/logos/techfix.png' },
  { name: 'SmartRepair', logo: '/logos/smartrepair.png' },
  { name: 'GadgetCare', logo: '/logos/gadgetcare.png' },
  { name: 'iFixPro', logo: '/logos/ifixpro.png' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-5xl text-center">

        {/* Botão de login no topo direito */}
        <button
          onClick={() => navigate("/login")}
          className="absolute top-4 right-4 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
        >
          Login
        </button>

        {/* Título e descrição */}
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Concertai</h1>
        <p className="text-gray-500 text-lg mb-6">
          Conserte seus dispositivos com rapidez e confiança através das nossas empresas parceiras.
        </p>

        {/* Ícones de dispositivos */}
        <div className="flex justify-center gap-6 text-blue-600 text-3xl mb-6">
          <FaMobileAlt />
          <FaLaptop />
          <FaTabletAlt />
          <FaTools />
        </div>

        {/* Empresas parceiras */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Nossas Empresas Parceiras</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-blue-50 p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
            >
              <img src={company.logo} alt={company.name} className="w-16 h-16 object-contain mb-2" />
              <p className="text-gray-700 font-medium text-sm">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
