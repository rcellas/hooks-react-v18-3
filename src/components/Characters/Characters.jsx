import { useEffect } from "react"
import { useState } from "react"
import CharacterDetail from "../CharacterDetail/CharacterDetail"

function Characters() {
    const [characters, setCharacters]=useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
            .then((response)=>response.json())
        .then((data)=>setCharacters(data.results))
    },[])
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