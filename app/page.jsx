'use client'
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <section id="about" className="section py-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="max-w-2xl mx-auto">Somos Coquette Creations, un taller artesanal dedicado a la confección y decoración manual de accesorios femeninos. Nos especializamos en la creación de scrunchies, colitas y moñeras para el cabello, así como antifaces para dormir, siguiendo una estética "Coquette" vintage y femenina.</p>
      </section>
      <section id="value-proposition" className="section py-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Propuesta de Valor</h2>
        <p className="max-w-2xl mx-auto">Nuestros accesorios son piezas únicas y exclusivas, elaboradas con materiales económicos pero de alta calidad. Cada producto es decorado manualmente con detalles artísticos, bordados y pedrería, asegurando que cada pieza sea una obra de arte que resalte la belleza y estilo de cada mujer.</p>
      </section>
      <Products />
      <Contact />
    </>
  );
}
