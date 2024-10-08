import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NavbarMobile from "../components/navbar-mobile";
import Partido from "../components/partido";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <a className="flex ml-5 *:text-white text-3xl font-semibold md:ml-24 mt-4 md:mt-0">
        Partidos
      </a>
      <a className="flex ml-5 *:text-white text-lg md:ml-24 mt-4 md:mt-4">
        Todos los juegos
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-24 md:my-5 mt-3">
        <Partido />
        <Partido />
        <Partido />
        <Partido />
        <Partido />
        <Partido />
      </div>
      <Footer />
    </>
  );
}
