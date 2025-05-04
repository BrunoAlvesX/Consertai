import React from 'react';
import quemsomos from '../assets/quemsomos.png';
import { Link } from 'react-router-dom';
import concertai from '../assets/concertailogo-removebg-preview.png'
import { useNavigate } from 'react-router-dom';
import iconexiaomi from '../assets/iconexiaomi.png'
import iconelg from '../assets/iconelg.png'
import iconemotorola from '../assets/iconemotorola.png'

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between bg-customBlue text-white px-6 py-2">
        <img src={concertai} alt="Logo" className="h-24 invert" />
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            className="bg-white text-blue-900 px-4 py-1 rounded hover:bg-gray-200 text-lg"
            onClick={() => navigate('/register')}
          >
            Cadastrar-se
          </button>
          <button
            className="border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-900 text-lg"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </header>

      <section className="relative bg-cover bg-center py-20 px-6 text-white" style={{ backgroundImage: `url(${quemsomos})` }}>
        <div className=" bg-opacity-80 p-8 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold italic mb-6 font-roboto">Quem somos?</h1>
          <p className="mb-4 text-lg">
            Somos uma empresa de tecnologia que nasceu com o propósito de transformar a forma como pessoas e empresas contratam serviços técnicos. Desenvolvemos uma plataforma digital inteligente que conecta clientes a profissionais qualificados, tornando todo o processo de solicitação, atendimento e avaliação muito mais simples, rápido e seguro.
          </p>
          <p className="mb-4 text-lg">
            Acreditamos que resolver um problema técnico não precisa ser difícil. Com nosso aplicativo, o processo é rápido: você recebe orçamento personalizado, acompanha avaliações, agenda o atendimento e acompanha cada etapa — tudo na palma da mão.
          </p>
          <p className="mb-4 text-lg">
            Nosso modelo é transparente, acessível e pensado para gerar valor tanto para quem precisa do serviço quanto para quem atende. Atuamos com intermediadores confiáveis, garantindo a excelência e o atendimento dentro de normas de qualidade rígidas.
          </p>
          <p className="mb-4 text-lg">
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
          <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold mb-4">Passo 1</h3>
            <p className='text-lg'>
              Conectamos você ao profissional ideal através do nosso aplicativo, eliminando a distância e conectando clientes com técnicos capacitados de forma rápida e prática.
            </p>
          </div>
          <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold mb-4">Passo 2</h3>
            <p className='text-lg'>
              Facilite todo o processo em um só lugar: agende atendimentos, acompanhe o andamento dos serviços, envie fotos e aproveite a experiência direta pelo app.
            </p>
          </div>
          <div className="bg-customBlue text-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold mb-4">Passo 3</h3>
            <p className='text-lg'>
              Conferência e qualidade garantidas: oferecemos mecanismos seguros, avaliações e histórico de atendimento, além de um suporte ágil e eficiente.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 bg-customBlue text-white px-6 text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 font-roboto">Ainda não sabe se nosso app é pra você?</h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-200 text-lg">
          Se você precisa resolver um problema técnico de forma rápida, segura e sem dor de cabeça, a nossa plataforma foi feita pra você.
        </p>
        <Link
          to="/service"
          className="text-white text-lg bg-gradient-to-r from-blue-500 bg-customBlue px-6 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 transform hover:scale-105"
        >
          Conheça nossos serviços
        </Link>
      </section>


      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">Empresas relacionadas</h2>
        <div className="flex justify-center items-center gap-4 flex-nowrap overflow-x-auto px-4">
          <img
            src={iconexiaomi}
            alt="iconexiaomi"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
          />
          <img
            src={iconelg}
            alt="iconelg"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
          />
          <img
            src={iconemotorola}
            alt="iconemotorola"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
          />
        </div>
      </section>


      <section className="py-12 px-6 text-center">
        <h2 className="text-xl font-bold mb-4 text-lg">Pronto para resolver seu problema com praticidade e segurança?</h2>
        <p className="text-gray-700 text-lg">
          Com o nosso app, você vai além de só encontrar um profissional.
        </p>
      </section>


      <footer className="bg-customBlue text-white text-sm py-6 px-4 flex flex-col items-center space-y-2">
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="#" className="hover:underline text-lg">Termos de Uso</a>
          <a href="#" className="hover:underline text-lg">Política de Privacidade</a>
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
