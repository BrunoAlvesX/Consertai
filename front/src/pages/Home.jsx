import React from 'react';
import quemsomos from '../assets/quemsomos.png';
import { Link } from 'react-router-dom';
import concertai from '../assets/concertailogo-removebg-preview.png'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
    <header className="flex items-center justify-between bg-blue-900 text-white px-6 py-2">
      <img src={concertai} alt="Logo" className="h-24 invert" />
      <div className="space-x-2">
        <button
          className="bg-white text-blue-900 px-4 py-1 rounded hover:bg-gray-200"
          onClick={() => navigate('/register')} // 👈 redireciona para a página de cadastro
        >
          Cadastrar-se
        </button>
        <button
          className="border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-900"
          onClick={() => navigate('/login')} // 👈 redireciona para a página de login
        >
          Login
        </button>
      </div>
    </header>


      <section className="relative bg-cover bg-center py-20 px-6 text-white" style={{ backgroundImage: `url(${quemsomos})` }}>
        <div className=" bg-opacity-80 p-8 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold italic mb-6 font-roboto">Quem somos?</h1>
          <p className="mb-4">
            Somos uma empresa de tecnologia que nasceu com o propósito de transformar a forma como pessoas e empresas contratam serviços técnicos. Desenvolvemos uma plataforma digital inteligente que conecta clientes a profissionais qualificados, tornando todo o processo de solicitação, atendimento e avaliação muito mais simples, rápido e seguro.
          </p>
          <p className="mb-4">
            Acreditamos que resolver um problema técnico não precisa ser difícil. Com nosso aplicativo, o processo é rápido: você recebe orçamento personalizado, acompanha avaliações, agenda o atendimento e acompanha cada etapa — tudo na palma da mão.
          </p>
          <p className="mb-4">
            Nosso modelo é transparente, acessível e pensado para gerar valor tanto para quem precisa do serviço quanto para quem atende. Atuamos com intermediadores confiáveis, garantindo a excelência e o atendimento dentro de normas de qualidade rígidas.
          </p>
          <p className="mb-4">
            Reunimos uma equipe comprometida com a inovação e a experiência do usuário — formada por desenvolvedores, designers, atendimento especializado e suporte técnico focados em criar soluções digitais que realmente ajudam.
          </p>
          <p>
            Somos mais que um app de serviços: somos uma ponte entre o problema e a solução.
          </p>
        </div>
      </section>


      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-12">Como ajudamos você</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold mb-4">Passo 1</h3>
            <p>
              Conectamos você ao profissional ideal através do nosso aplicativo, eliminando a distância e conectando clientes com técnicos capacitados de forma rápida e prática.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold mb-4">Passo 2</h3>
            <p>
              Facilite todo o processo em um só lugar: agende atendimentos, acompanhe o andamento dos serviços, envie fotos e aproveite a experiência direta pelo app.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold mb-4">Passo 3</h3>
            <p>
              Conferência e qualidade garantidas: oferecemos mecanismos seguros, avaliações e histórico de atendimento, além de um suporte ágil e eficiente.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 text-center">
        <h2 className="text-xl font-bold mb-6">Ainda não sabe se nosso app é pra você?</h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-700">
          Se você precisa resolver um problema técnico de forma rápida, segura e sem dor de cabeça, a nossa plataforma foi feita pra você.
        </p>
        <Link to="/service" className="text-blue-600 font-semibold hover:underline cursor-pointer">
          👉 Conheça nossos serviços
        </Link>
      </section>


      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">Empresas relacionadas</h2>
        <div className="flex justify-center space-x-12">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX5fhn////qbRHW1tj5cgD90rX5fBD7eQDU2t/osZXn5+n2hzrT3uXZ2dz81Lv5egT7nl37p3H+5tn1jEjY0tH7kk7nu6Tjw67ku6n7qnnuhUT6mljpaAD0kE7yoHDzeBX7omrntpv8yKj8upL+9vD93cv7tIr5gin8wqD5jj30uZjxmmXczcb19fX+7+bzk1bex7sbXS0XAAACPElEQVR4nO3cb1eCMByG4a1oo0xnpGVpZWrZ//r+ny6gzA2THivbz85zv+kFTC4Hh6O2g9LZ6VbRhRJSP9MqGwwKU2zKPKcydToQNU95rq/KcydoosqIQiMKjSg0otCIQiMKjSg0otCIQiMKjSg0otCIQiMKjSg0otCIQiMKjSi0TUOZ5DtZZ5YdywY7uu+gzNlx2c5KjcbDrks+P9Zl+Xqt9z3bS/E1KLu7n+bt6VWbXF07+8mbbJSvl852ay2hf4FKt/NWRxWNpwtnJ0cVr9eMh9LZWfWYAlD5ZFVOoQiUvgmPKgOlb4K5EoLSJ75KCkrfevciMagrb6rEoPTB/HYlB5XNjywH5V1Va0GNDrt1De86zbzqe5jfrNaC6ltTl0vs/UMxovkYnL/1zlS75gPQW04dLZzxp8ZMFQmlVHJZVU3a0VHKHVdVw9mweCgzTYMje3eqeKjFG4kElHneDqdKAkqph1L1GAFlXJF1b3/87yXuJRbKPJ8XnbzX9VS21wyG/RnKNDr7eR/flvxPKEkvjYQ67JTnaLYp8ybREkUUUdFQse5TmzdTRG3yNXUkcaaIIooooogiiiiiiPr/qD/7IZaodaB++5oKF0v0A1Sw7iHzfsmzvXCYj/r5YonKspLR1N94529ref9q/BjWWhz2C8tKqgtwgm01a2kqwww0CEbFiyg0otCIQiMKjSg0otCIQiMKjSg0otCIQiMKjSg0otCIQiMKjSg0otCIQhOJEvnoTJEPGZX4ONZXslVj2b+pMI0AAAAASUVORK5CYII=" alt="Xiaomi" className="h-16" />
          <img src="data:image/jpeg;base64,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" alt="LG" className="h-16" />
          <img src="data:image/png;base64,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" alt="Motorola" className="h-16" />
        </div>
      </section>


      <section className="py-12 px-6 text-center">
        <h2 className="text-xl font-bold mb-4">Pronto para resolver seu problema com praticidade e segurança?</h2>
        <p className="text-gray-700">
          Com o nosso app, você vai além de só encontrar um profissional.
        </p>
      </section>


      <footer className="bg-blue-900 text-white text-sm py-6 px-4 flex flex-col items-center space-y-2">
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
