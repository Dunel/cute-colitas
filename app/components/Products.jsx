const Products = () => {
  const productList = [
    { name: 'Scrunchie', price: '$5', description: 'Scrunchie decorada con bordados y pedrería.' },
    { name: 'Colita', price: '$3', description: 'Colita para el cabello con detalles únicos.' },
    { name: 'Moñera', price: '$4', description: 'Moñera artesanal con estilo vintage.' },
    { name: 'Antifaz para dormir', price: '$7', description: 'Antifaz decorado con encajes y lentejuelas.' },
  ];

  return (
    <section id="products" className="section py-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Productos</h2>
      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productList.map((product, index) => (
          <div key={index} className="product-card p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="mb-2">{product.description}</p>
            <p className="text-lg font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
