import { useEffect } from "react"
import { useState } from "react"
import CharacterDetail from "../CharacterDetail/CharacterDetail"

function Characters() {
    const [characters, setCharacters]=useState([])
    useEffect(()=>{
       getData()
    },[])
    const getData = () => {
      fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then((data)=>setCharacters(data.results))
      .catch(error => console.log("Mensaje de error: ", error))
  } 
  return (
    <div>
        {characters.map((character)=>{
            return(
              <CharacterDetail character={character}/> 
            )
        })}
    </div>
  )
}

export default Characters