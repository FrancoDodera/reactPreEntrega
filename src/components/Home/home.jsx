import React from "react";
import style from "./home.module.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>¡Bienvenidos a Ezcencia!</h1>
      <p className={style.description}>
        En Ezcencia, nos apasiona el mundo de League of Legends y queremos
        ofrecerte la mejor experiencia para que puedas adquirir los campeones
        que más te gustan. Nos enorgullece presentarte nuestro exclusivo
        catálogo de campeones, donde encontrarás una amplia selección de
        personajes únicos con habilidades extraordinarias. ¿Estás buscando
        ampliar tu roster de campeones y dominar la Grieta del Invocador? En
        Ezcencia, tenemos todo lo que necesitas para potenciar tu estrategia y
        alcanzar la victoria. Nuestro equipo se ha encargado de recopilar a los
        campeones más populares y solicitados, para que puedas elegir entre
        ellos y llevar tus habilidades al siguiente nivel. Además, nos
        preocupamos por brindarte una experiencia de compra excepcional. Navega
        por nuestro sitio, explora las descripciones detalladas de cada campeón
        y descubre sus habilidades únicas. Ya sea que estés interesado en
        campeones de rol de daño, tanques resistentes o magos poderosos, tenemos
        opciones para todos los estilos de juego. En Ezcencia, la calidad y la
        satisfacción del cliente son nuestra máxima prioridad. Trabajamos
        arduamente para asegurarnos de que cada compra que realices sea segura,
        rápida y sin complicaciones. Además, ofrecemos un servicio de atención
        al cliente excepcional para responder a todas tus preguntas y brindarte
        la asistencia que necesites. No pierdas más tiempo y adéntrate en el
        emocionante mundo de League of Legends con Ezcencia. ¡Explora nuestro
        catálogo, elige tus campeones favoritos y prepárate para la batalla!
        ¡Gracias por visitar Ezcencia, tu tienda de campeones de League of
        Legends!
      </p>
      <Carousel className={style.carousel}>
        <div>
          <img src={image1} alt="Imagen 1" className={style.image} />
        </div>
        <div>
          <img src={image2} alt="Imagen 2" className={style.image} />
        </div>
        <div>
          <img src={image3} alt="Imagen 3" className={style.image} />
        </div>
        <div>
          <img src={image4} alt="Imagen 4" className={style.image} />
        </div>
        <div>
          <img src={image5} alt="Imagen 5" className={style.image} />
        </div>
        <div>
          <img src={image6} alt="Imagen 6" className={style.image} />
        </div>
        <div>
          <img src={image7} alt="Imagen 7" className={style.image} />
        </div>
        <div>
          <img src={image8} alt="Imagen 8" className={style.image} />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
