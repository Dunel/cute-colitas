import React from "react";

const productList = [
  {
    name: "Scrunchie",
    price: "$5",
    description: "Scrunchie decorada con flores.",
    image: "https://xxlandco.com/cdn/shop/files/22_everyonesfavmini_720x.jpg",
  },
  {
    name: "Moñeras",
    price: "$0.5",
    description: "Moñeras para el cabello con flores.",
    image: "/images/moñeras.png",
  },
  {
    name: "Lazo",
    price: "$4",
    description: "Lazo para el cabello de satén XXL de gran tamaño, completo con una pinza de cocodrilo en la parte posterior para permanecer en su sitio durante todo el día.",
    image: "https://xxlandco.com/cdn/shop/files/xxlsatinleyahbow_540x.jpg",
  },
  {
    name: "Antifaz",
    price: "$5",
    description: "Antifaz de gatito para dormir.",
    image: "/images/antifaz.png",
  },
];


const Products = ({ products = productList }) => {
  return (
    <section id="products" className="section py-8">
      <br/>
      <br/>
      <h2 className="text-5xl font-bold mb-4 text-[#352b4d]">Nuestros Productos</h2>
      
      <p class="max-w-7xl mx-auto text-justify text-2xl text-[#352b4d]">
  Nuestros productos están diseñados con finas telas y los más sutiles detalles, 
  para complementar tu look de una forma única y delicada. Utilizamos materiales 
  de alta calidad para asegurar que nuestros accesorios sean duraderos y cómodos de usar.
  <br/>
  A continuación, te mostramos nuestro catálogo de productos. Si no puedes decidirte por 
  alguno de nuestros hermosos diseños, no te preocupes!! envíanos una foto de cabello 
  para asesorarte según su largo, textura y color. Estamos comprometidos en brindarte una 
  experiencia de compra excepcional, con un servicio al cliente atento y personalizado para 
  asegurar tu completa satisfacción.
</p>
      <div className="product-grid flex flex-wrap justify-center gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card border p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl mb-2">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

