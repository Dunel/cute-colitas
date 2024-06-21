'use client'
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <section id="about" className="section bg-white h-screen w-screen text-[#352b4d] text-justify leading-relaxed text-2xl">
        <br/>
        <h2 className="text-5xl font-bold mb-4 text-[#352b4d]">Sobre Nosotros</h2>
        <br/>
        <div class="bg-white p-8">
          <h2 class="text-3xl text-center">Somos Cute Colitas</h2>
        <br/>
          <p class="max-w-7xl mx-auto text-justify">
            🎀 Somos Cute Colitas y nos dedicamos al diseño y confección especializada de scrunchies, colitas y moñeras para el cabello, con detalles cuidadosamente elaborados. Cada accesorio es creado con atención al detalle, desde la selección de los materiales hasta el acabado final, asegurando que cada pieza sea perfecta.
          </p>
        <br/>
          
          <p class="max-w-7xl mx-auto text-justify">
            📍 Nuestro taller artesanal está ubicado en el municipio San Francisco del estado Zulia. Allí es donde ocurre la magia, nos inspiramos en ti y tu estilo de vida. Estamos completamente dedicados a la confección y decoración manual de accesorios femeninos para realzar el look de la mujer Venezolana.
          </p>
        <br/>
          
          <p class="max-w-7xl mx-auto text-justify">
            Aunque nuestro taller es físico, te brindamos asesoría online y comercializamos nuestros productos de forma digital, visita en nuestro Instagram <b><a><i>@cutecolitas.</i></a></b>
          </p>
        </div>



      </section>
      <section id="value-proposition" className="section py-8 bg-[#7262968a] text-center h-screen w-screen">
        <h2 className="text-5xl font-bold mb-4">Propuesta de Valor</h2>
        <p className="max-w-2xl mx-auto"> Nuestros accesorios son piezas únicas y exclusivas, elaboradas con materiales económicos pero de alta calidad. Cada producto es decorado manualmente con detalles artísticos, bordados y pedrería, asegurando que cada pieza sea una obra de arte que resalte la belleza y estilo de cada mujer.</p>
      </section>
      <Products />
      <Contact />
    </>
  );
}
