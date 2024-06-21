import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <Link href={"/"}>
            <img className="h-8 w-auto" src="/logo.png" alt="" />
          </Link>
          <h1 className="text-xl font-bold">Cute Colitas</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="#about">Sobre Nosotros</Link>
            </li>
            <li>
              <Link href="#value-proposition">Propuesta de Valor</Link>
            </li>
            <li>
              <Link href="#products">Productos</Link>
            </li>
            <li>
              <Link href="#contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
