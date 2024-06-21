import React from "react";

const productList = [
  {
    name: "Scrunchie",
    price: "$2",
    description: "Scrunchie decorada con flores.",
    image: "https://xxlandco.com/cdn/shop/files/22_everyonesfavmini_720x.jpg",
  },
  {
    name: "Moñeras",
    price: "$1",
    description: "Moñeras para el cabello con flores.",
    image: "/images/moñeras.png",
  },
  {
    name: "Lazo",
    price: "$4",
    description: "Lazo para el cabello de satén de gran tamaño.",
    image: "https://xxlandco.com/cdn/shop/files/xxlsatinleyahbow_360x.jpg",
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
            className="product-card border p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg flex flex-col justify-between h-[480px]"
          >
            <div className="product-info flex flex-col items-center text-center">
            <img src={product.image} alt={product.name} className="w-[200px] h-[200px] rounded-t-lg mb-4" />
              <h3 className="text-xl mb-2">{product.name}</h3>
              <p className="flex-grow overflow-hidden text-ellipsis">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
              <a href="https://instagram.com/cutecolitas" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#352b4d] text-white py-2 px-4 rounded-full">Comprar</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
