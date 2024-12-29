import React, { useState, useEffect } from 'react';

function App3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
      try {
        const response = fetch('https://jsonplaceholder.typicode.com/posts')
     .then ((response)=>response.json())
        .then((response)=>setData(response));
      } 
      catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    }, []); // Exécuté une seule fois au montage

  if (!data) return <div>Chargement...</div>;
  return (
    <div>
      <h3>Données récupérées :</h3>
      <ul>
        
{data.map(post =><li key={post.id}>{post.id} <br/>{post.title} <br/>,{post.body}<br/>,{post.userId}</li>)}
      </ul>
    </div>
  );
}

export default App3;




