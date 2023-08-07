import React, { useState } from "react";
import CharacterItem from "../characterItem/characterItem";
import CharacterDetail from "../characterDetail/characterDetail";

import styles from "./characterList.module.css";

function CharacterList({ characters }) {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  const handleCloseCharacterDetail = () => {
    setSelectedCharacterId(null);
  };

  return (
    <div>
      <h2 className={styles.titulo}>Lista de personajes</h2>
      <div className={styles.characterList}>
        {characters.map((character) => (
          <CharacterItem
            key={character.id}
            character={character}
            onClick={handleCharacterClick}
          />
        ))}
      </div>
      {selectedCharacterId && (
        <CharacterDetail
          character={characters.find(
            (character) => character.id === selectedCharacterId
          )}
          onClose={handleCloseCharacterDetail}
        />
      )}
    </div>
  );
}

export default CharacterList;
