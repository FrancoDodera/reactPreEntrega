import React from "react";
import styles from "./characterDetail.module.css";

function CharacterDetail({ character, onClose }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleClose}>
          {" "}
          X{" "}
        </button>
        <h2>{character.nombre}</h2>
        <img src={character.img} alt={character.nombre} />
        <p>Precio: {character.precio}</p>
        <p>Rol: {character.rol}</p>
      </div>
    </div>
  );
}

export default CharacterDetail;
