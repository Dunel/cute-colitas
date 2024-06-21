const Contact = () => {
  return (
    <section id="contact" className="section py-8 bg-white text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        <form className="contact-form max-w-lg mx-auto">
          <label htmlFor="email" className="block text-left mb-2">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            required
          />
          <label htmlFor="message" className="block text-left mb-2">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
