import React from "react";
import styles from "./characterItem.module.css";

function CharacterItem({ character, onClick }) {
  const handleCharacterClick = () => {
    onClick(character.id);
  };

  return (
    <div className={styles.container}>
      <img src={character.img} alt={character.nombre} />
      <p className={styles.nombre}>{character.nombre}</p>
      <p className={styles.descripcion}>💎{character.precio}</p>
      <p className={styles.descripcion}>{character.rol}</p>
      <button className={styles.comprar}>Comprar</button>
      <button className={styles.button} onClick={handleCharacterClick}>
        Ver detalles
      </button>
    </div>
  );
}

export default CharacterItem;
