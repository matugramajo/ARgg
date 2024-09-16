import Navbar from "./components/navbar";
import MenuJuegos from "./components/menujuegos";
import Cards from "./components/cards";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import NavbarMobile from "./components/navbar-mobile";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <MenuJuegos />
      <div className="text-white text-3xl font-semibold ml-24 mt-4 md:mt-0">
        <a>Todos los juegos</a>
      </div>
      <Cards />
      <div className="text-white text-lg md:ml-24 md:pt-14 md:pb-10 mt-8 mx-6 pb-6">
        <a>Próximos eventos</a>
      </div>
      <Carousel />
      <Footer />
    </>
  );
}
