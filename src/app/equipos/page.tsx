import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NavbarMobile from "../components/navbar-mobile";
import Equipos from "../components/equipos";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <div className="flex ml-5 *:text-white text-3xl font-semibold md:ml-24 mt-4 md:mt-0">
        <a className="">Equipos</a>
      </div>
      <div className="flex ml-5 *:text-white text-lg md:ml-24 mt-4 md:mt-4">
        <a className="">Todos los juegos</a>
      </div>
      <Equipos />
      <Footer />
    </>
  );
}
