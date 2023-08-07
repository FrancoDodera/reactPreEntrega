import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1 className={style.aboutTitle}>Sobre mí</h1>
      <p className={style.aboutDescription}>
        ¡Hola! Mi nombre es Franco y soy el creador de esta página. Me apasiona
        el juego League Of Legends, por lo cual cree esta pagina. Me he formado
        como desarrollador Fornt End con React durante 1 año.
      </p>
      <p className={style.aboutDescription}>
        En mi tiempo libre me gusta explorar nuevos hobbies y actividades que me
        apasionan. Disfruto cocinar, leer y estar al aire libre. Además, soy una
        persona creativa y curiosa.
      </p>
      <p className={style.aboutDescription}>
        Si tienes alguna pregunta o sugerencia sobre esta página, no dudes en
        contactarme en fancododera@gmail.com o por linkedin Franco Rodriguez
        Dodera . ¡Gracias por visitar mi sitio!
      </p>
    </div>
  );
};

export default About;
