import React,{useState,useEffect} from 'react'

function Edit({objet,onmodif,nblignes,onmessage}) {
    const [id,setId]=useState(objet.id)
    const [nom,setNom]=useState(objet.nom)
    const [prenom,setPrenom]=useState(objet.prenom)
    const [adr,setAdr]=useState(objet.adr)
    const [message,setMessage]=useState("")
    
    useEffect(() =>{
        setId(objet.id);
        setNom(objet.nom)
        setPrenom(objet.prenom)
        setAdr(objet.adr)
    }
    , [objet.id,objet.nom,objet.prenom,objet.adr])
    


  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <pre>
        <label>Id</label><input type="number"
        value={id} disabled />
        <label>Nom</label><input type="text" onChange={(e)=>setNom(e.target.value)}
        value={nom} />
        <label>Prenom</label><input type="text" onChange={(e)=>setPrenom(e.target.value)}
        value={prenom}  />
        <label>Adresse</label><input type="text" onChange={(e)=>setAdr(e.target.value)}
        value={adr}  />
        <button onClick={()=>onmodif({id:id,nom:nom,prenom:prenom,adr:adr})}>Mdifier</button>
        </pre>
        

<br/>le nombre de ligne est :{nblignes}<br/>

<label>message</label><input type="text" onChange={(e)=>setMessage(e.target.value)}
        value={message}  />
        <button onClick={()=>onmessage(message)}>envoyer message</button>

    </form>
  )
}

export default Edit