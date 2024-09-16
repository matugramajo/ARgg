import Navbar from "../components/navbar";
import MenuJuegos from "../components/menujuegos";
import Cards from "../components/cards";
import Footer from "../components/footer";
import NavbarMobile from "../components/navbar-mobile";
import Partidos from "../components/partidos";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <MenuJuegos />
      <div className="flex justify-center md:justify-normal *:text-white text-3xl font-semibold md:ml-24 mt-4 md:mt-0">
        <a className="">Todos los juegos</a>
      </div>
      <Partidos />
      <Footer />
    </>
  );
}
