
import React,{ useState } from 'react'

function Insert({oninsert,reception}) {
    const [id,setId]=useState()
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [adr,setAdr]=useState("")
   
   
  return (
     
     <form onSubmit={(e)=>e.preventDefault()}>
        <pre>
        <label>Id</label><input type="number"
        value={id}  onChange={(e)=>setId(e.target.value)} required/>
        <label>Nom</label><input type="text" onChange={(e)=>setNom(e.target.value)}
        value={nom} required />
        <label>Prenom</label><input type="text" onChange={(e)=>setPrenom(e.target.value)}
        value={prenom} required />
        <label>Adresse</label><input type="text" onChange={(e)=>setAdr(e.target.value)}
        value={adr} required />
        <button onClick={()=>oninsert({id:id,nom:nom,prenom:prenom,adr:adr})}>Ajouter</button>
        </pre>
        le message recu est :{reception}


    </form>
  )
}

export default Insert