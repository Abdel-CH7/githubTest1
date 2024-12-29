import React, { useState, useEffect } from 'react';

export default function App1() {
  const [count, setCount] = useState(0);
  const [texte, setTexte] = useState("");

  useEffect(() => {
    console.log(`Le count a changé : ${count}`);
  }); // L'effet ne dépend que de `count`*/
{/*
  useEffect(() => {
    console.log(`Le count a changé : ${texte}`);
  },[texte]); // L'effet ne dépend que de `texte`
*/}
  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <input
        type="text"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Entrez du texte"
      />
    </div>
  );
}
