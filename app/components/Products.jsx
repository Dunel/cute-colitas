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
      <h2 className="text-2xl md:text-3xl mb-8 text-center">Nuestros Productos</h2>
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

