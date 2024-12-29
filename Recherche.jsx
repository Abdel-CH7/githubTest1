import React from 'react'
import { useState } from 'react'

function Recherche({onsearch}) {
    const [nom,setNom]=useState("")
  return (
    <div><label>Nom</label><input type="text" onChange={(e)=>setNom(e.target.value)}
    value={nom}  />
    <button onClick={()=>onsearch(nom)}>Mdifier</button>
 </div>
  )
}

export default Recherche