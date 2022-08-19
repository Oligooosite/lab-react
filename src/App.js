import React from 'react';
import './App.css';
import WordCard from './WordCard';
const word = "Hello"
function App() {
 return (
 <div>
    {
      Array.from(word).map((c, i)=> <CharacterCard value={c} key={i}/>)
    }
    <WordCard value="hello"/>

 </div>
 );
}
export default App;
