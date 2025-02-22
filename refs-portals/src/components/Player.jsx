import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [name, setName] = useState(null);

  function handleSubmit() {
    setName(playerName.current.value)
  }

  return (

    <section id="player">
      <h2>Welcome {name ? name : 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
 