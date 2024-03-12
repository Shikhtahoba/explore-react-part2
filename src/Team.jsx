import { useState } from "react"

export default function Team (){

     const [team, setTeam] = useState(11);

     const newAdd = () =>{
        const newTeam = team + 1;
        setTeam (newTeam);
     }

     const removeAdd = () =>{
        const newCount = team-1;
         setTeam(newCount);
     }

    const teamStyle = {
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'14px'
    }

    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={newAdd}>Add New</button>
            <button onClick={removeAdd}>Remove</button>
        </div>
    )
}