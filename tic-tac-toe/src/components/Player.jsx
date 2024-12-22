import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {

    const [name, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function editHandler() {
        setIsEditing(isEditing => !isEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerName = <span className="player-name">{name}</span>
    let btnCaption = 'Edit'

    if (isEditing) {
        playerName = <input type="text" required value={name} onChange={handleChange} />
        btnCaption = "Save"
    }


    return (

        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {playerName}
                <span className="player-symbol">{symbol}</span>

                <button onClick={editHandler}>{btnCaption}</button>

            </span>
        </li>

    );
}; 