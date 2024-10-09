import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NavbarMobile from "../components/navbar-mobile";
import Equipo from "../components/equipo";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <a className="flex ml-5 text-white text-3xl font-semibold md:ml-24 mt-4 md:mt-0 justify-center md:justify-start">
        Equipos
      </a>
      <a className="flex ml-5 text-white md:text-lg text-base md:ml-24 mt-4 md:mt-4 justify-center md:justify-start">
        Todos los juegos
      </a>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-16 mx-5 md:mx-24 md:mb-5 mt-3">
        <Equipo />
        <Equipo />
        <Equipo />
        <Equipo />
        <Equipo />
        <Equipo />
        <Equipo />
        <Equipo />
      </div>
      <Footer />
    </>
  );
}
