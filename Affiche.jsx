import React from 'react'

function Affiche({tableau,onedit,onsupprime}) {
  return (
    <>
    <table align='center'>
        <thead>
            <tr>
                <th>Numero</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Adresse</th>
                <th>Edition</th>
                <th>Suppression</th>

            </tr>
        </thead>
        <tbody>
            {
                tableau.map(el=><tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.nom}</td>
                    <td>{el.prenom}</td>
                    <td>{el.adr}</td>
                    <button onClick={()=>onedit(el.id)}>Edit</button>
                    <button onClick={()=>onsupprime(el.id)}>Supprime</button>

                </tr>)
            }
        </tbody>
    </table>



    </>
  )
}

export default Affiche