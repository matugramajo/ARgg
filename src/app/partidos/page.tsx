import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NavbarMobile from "../components/navbar-mobile";
import Partidos from "../components/partidos";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <div className="flex ml-5 *:text-white text-3xl font-semibold md:ml-24 mt-4 md:mt-0">
        <a className="">Partidos</a>
      </div>
      <div className="flex ml-5 *:text-white text-lg md:ml-24 mt-4 md:mt-4">
        <a className="">Todos los juegos</a>
      </div>
      <div className="md:mx-24 mx-5">
        <Partidos />
      </div>
      <Footer />
    </>
  );
}
