import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import NavbarMobile from "./components/navbar-mobile";
import Partido from "./components/partido";
import Equipo from "./components/equipo";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <a className="flex ml-5 *:text-white text-3xl font-semibold md:ml-24 mt-4 md:mt-0">
        Todo
      </a>
      <a className="flex ml-5 *:text-white text-lg md:ml-24">
        Todos los juegos
      </a>
      <a className="flex ml-5 *:text-white text-xl font-semibold md:ml-24 mt-4">
        Proximos partidos
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-24 md:my-3 mt-3">
        <Partido />
        <Partido />
        <Partido />
        <Partido />
        <Partido />
        <Partido />
      </div>
      <a className="flex ml-5 *:text-white text-xl font-semibold md:ml-24 mt-7">
        Equipos mas vistos
      </a>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-16 mx-5 md:mx-24 md:mb-5 mt-3">
        <Equipo />
        <Equipo />
        <Equipo />
        <Equipo />
      </div>
      <a className="flex ml-5 *:text-white text-xl font-semibold md:ml-24 mt-7">
        Proximos eventos
      </a>
      <Carousel />
      <Footer />
    </>
  );
}
