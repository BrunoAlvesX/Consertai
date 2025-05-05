import React from 'react';
import concertai from '../assets/concertailogo-removebg-preview.png'
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="flex items-center justify-between bg-customBlue text-white px-6 py-2">
        <Link to="/" className="flex items-center">
          <img src={concertai} alt="Logo" className="h-24 invert" />
        </Link>
        <div className="flex items-center space-x-2">
          <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200 text-lg">Cadastrar-se</button>
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 text-lg">Login</button>
        </div>
      </header>



      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Tipos de Serviços</h1>
        <p className="text-center text-gray-700 mb-10 text-lg">
          Confira os tipos de atendimento disponíveis na nossa plataforma. Todos os serviços são
          realizados por profissionais qualificados, com agendamento flexível, orçamento rápido e
          acompanhamento direto pelo app.
        </p>

        <div className="space-y-8 max-w-3xl mx-auto text-gray-800">
          <div>
            <h2 className="text-2xl font-bold">Assistência Técnica em Eletrônicos</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Conserto de notebooks, PCs e monitores</li>
              <li>Troca de peças e upgrades</li>
              <li>Configuração e manutenção de software</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Reparo de Celulares e Tablets</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Troca de tela, bateria e componentes</li>
              <li>Recuperação de aparelhos com dano por água</li>
              <li>Atualizações e restauração de sistema</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Manutenção de TVs e Equipamentos de Áudio/Imagem</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Reparos em TVs LCD/LED/Smart</li>
              <li>Problemas de som, imagem ou conectividade</li>
              <li>Configuração e instalação</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Eletrodomésticos</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Conserto de geladeira, máquina de lavar, micro-ondas e mais</li>
              <li>Diagnóstico de falhas técnicas</li>
              <li>Troca de peças e manutenção preventiva</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Serviços gerais de suporte técnico</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Avaliação técnica no local</li>
              <li>Instalação de produtos e equipamentos</li>
              <li>Suporte remoto (quando aplicável)</li>
            </ul>
          </div>
        </div>


        <p className="italic text-center text-gray-700 mt-12 mb-4 text-lg">
          Todos os serviços podem ser solicitados pelo nosso app.
        </p>
        <p className="text-center text-gray-700 mb-10 text-lg">
          Descreva o problema, receba orçamentos e agende o atendimento com poucos toques.
        </p>


        <div className="flex justify-center space-x-6 mb-16">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-16 w-40 object-contain"
          />
          <img
            src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png"
            alt="App Store"
            className="h-16 w-40 object-contain"
          />
        </div>
      </main>


      <footer className="bg-customBlue text-white text-sm py-6 px-4 flex flex-col items-center space-y-2">
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Política de Privacidade</a>
        </div>
        <div>© 2024 Consertai - Todos os direitos reservados</div>
        <div className="flex space-x-2">
          <span>Fale com a gente:</span>
          <span><p>Tel: 22998966857</p></span>
        </div>
      </footer>
    </div>
  );
}

export default Service;
