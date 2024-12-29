import React,{useState} from 'react'
import Insert from './Insert'
import Recherche from './Recherche'
import Edit from './Edit'
import Affiche from './Affiche'

const list = [{id:11,nom:"ahmadi",prenom:"aicha",adr:"casa"},
{id:1,nom:"ahmadi",prenom:"aicha",adr:"casa"},
{id:12,nom:"aLAMi",prenom:"aicha",adr:"casa"},
{id:13,nom:"MOUSSAOUIi",prenom:"aicha",adr:"casa"},
{id:15,nom:"BADRANE",prenom:"HAMID",adr:"casa"},]
function App() {
    const [affiche,setAffiche]=useState("none")
    const [tabrech,setTabrech]=useState([])
    const [mes,setMes]=useState("")
    const [obj,setObj]=useState({})
    const [data,setData]=useState(list)
    const f1=(num)=>{setObj(data.find(el=>el.id==num));setAffiche("")}
    const f2=(num)=>setData(data.filter(el=>el.id!==num))             
    const f3=(obj)=>[setData([...data.filter(el=>el.id!=obj.id),obj]),setAffiche("none")]
    const rechercher=(num)=>data.find(el=>el.id==num)
    const f6=(me)=>{setMes(me)}
const f4=(obj)=>{
try {
    obj.id.length!=0&&obj.nom.length!=0&&obj.prenom.length!=0&&obj.adr.length!=0
    &&!rechercher(obj.id)&&setData([...data,obj])
}
 catch (error) {}
}
const f5=(nomrecherche)=>setTabrech(data.filter(el=>el.nom==nomrecherche))
    
  return (
    <>App
    <fieldset>
        <legend>Insertion</legend>
        <Insert oninsert={f4} reception={mes}/>
    </fieldset>
    <fieldset>
        <legend>Affichage</legend>
        <Affiche tableau={data} onedit={f1} onsupprime={f2} />
    </fieldset>
    <fieldset style={{display:affiche}}>
        <legend>Edition</legend>
        <Edit objet={obj} onmodif={f3} nblignes={data.length} onmessage={f6}/>
    </fieldset>
    <fieldset>
        <legend>Recherche</legend>
        <Recherche onsearch={f5}/>
    </fieldset>
    {tabrech.length==0?<h1>Aucune données!!</h1>:
    <ul>
{
    tabrech.map(el=><li key={el.id}>{el.id},{el.nom},{el.prenom},{el.adr}</li>)
}
    </ul>
   
    }

    </>
  )
}

export default App