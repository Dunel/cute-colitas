import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#352b4d] shadow-md text-black py-5">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-0">
        <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-start">
          <Link href={"/"}>
            <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
          </Link>
          <h1 className="text-xl font-extrabold text-white">Cute Colitas</h1>
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-10">
            <li className="w-full text-center font-bold md:w-auto md:text-left">
              <Link className="text-[#b9afd3] hover:text-white" href="/">Inicio</Link>
            </li>
            <li className="w-full text-center font-bold md:w-auto md:text-left">
              <Link className="text-[#b9afd3] hover:text-white" href="#about">Sobre Nosotros</Link>
            </li>
            <li className="w-full text-center font-bold md:w-auto md:text-left">
              <Link className="text-[#b9afd3] hover:text-white" href="#value-proposition">Propuesta de Valor</Link>
            </li>
            <li className="w-full text-center font-bold md:w-auto md:text-left">
              <Link className="text-[#b9afd3] hover:text-white" href="#products">Productos</Link>
            </li>
            <li className="w-full text-center font-bold md:w-auto md:text-left">
              <Link className="text-[#b9afd3] hover:text-white" href="#contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
