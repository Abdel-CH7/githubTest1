
import React, { useState, useEffect } from 'react';

export default function App0() {
  const [count, setCount] = useState(4);
  const [a, setA] = useState(0);
{
  useEffect(() => {
    console.log(`Le count est maintenant  de count est : ${count},${a} `);
    },[]); 
  }
{/*
  useEffect(() => {
    console.log(`Le a est maintenant  de a est :${a}`);
  },[a]); 
}*/}
  return (
    <div>
      <p>Compteurs: <br/>
      count:{count}<br/>
      la variable a:{a}</p>
      <button onClick={() => {setCount(count + 1)}}>Incrémenter count</button>
      <button onClick={() => {setA(a+3)}}>IncrémenterA</button>
    
    </div>
  );
}