import Navbar from "./components/navbar";
import MenuJuegos from "./components/menujuegos";
import Cards from "./components/cards";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MenuJuegos />
      <div className="text-3xl font-semibold ml-24">
        <a>Todos los juegos</a>
      </div>
      <Cards />
      <div className="text-lg ml-24 pt-14 pb-10">
        <a>Próximos eventos</a>
      </div>
      <Carousel />
      <Footer />
    </>
  );
}
