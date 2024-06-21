'use client'
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';

export default function Page() {
  return (
    <>
      <Hero />

      <section id="about" className="section bg-white w-full text-[#352b4d] text-justify leading-relaxed text-2xl py-8">
        <h2 className="text-5xl font-bold mb-4 text-[#352b4d]">Sobre Nosotros</h2>
        <div className="bg-white p-8">
          <h2 className="text-3xl text-center">Somos Cute Colitas</h2>
          <p className="max-w-7xl mx-auto text-justify mt-4">
            🎀 Somos Cute Colitas y nos dedicamos al diseño y confección especializada de scrunchies, colitas y moñeras para el cabello, con detalles cuidadosamente elaborados. Cada accesorio es creado con atención al detalle, desde la selección de los materiales hasta el acabado final, asegurando que cada pieza sea perfecta.
          </p>
          <p className="max-w-7xl mx-auto text-justify mt-4">
            📍 Nuestro taller artesanal está ubicado en el municipio San Francisco del estado Zulia. Allí es donde ocurre la magia, nos inspiramos en ti y tu estilo de vida. Estamos completamente dedicados a la confección y decoración manual de accesorios femeninos para realzar el look de la mujer Venezolana.
          </p>
          <p className="max-w-7xl mx-auto text-justify mt-4">
            Aunque nuestro taller es físico, te brindamos asesoría online y comercializamos nuestros productos de forma digital, visita en nuestro Instagram <b><a href="https://www.instagram.com/cutecolitas" target="_blank" rel="noopener noreferrer"><i>@cutecolitas.</i></a></b>
          </p>
        </div>
      </section>

      <section id="value-proposition" className="section bg-[#7262968a] w-full text-[#352b4d] text-justify leading-relaxed text-2xl py-8">
        <h2 className="text-5xl font-bold mb-4">Propuesta de Valor</h2>
        <div className="flex justify-center">
          <img
            src={"./images/49100882125.png"}
            width={400}
            height={400}
            alt=""
            className="rounded-t-lg mb-4"
          />
        </div>
        <div className="p-8">
          <p className="max-w-7xl mx-auto text-justify mt-4">
          Te ofrecemos atención personalizada y productos de alta calidad.
          Envíanos una foto de tu cabello por mensaje directo, indicando su
          textura, largo y color, y cuéntanos sobre la ocasión. De esta forma,
          podremos asesorarte y recomendarte los accesorios que mejor te
          lucirán. Nos comprometemos a brindarte una experiencia de compra
          excepcional, con un servicio al cliente atento y personalizado para
          asegurar tu completa satisfacción.
          </p>
        </div>
      </section>

      <Products />
      <Contact />
    </>
  );
}
