import { useLoaderData } from "react-router-dom";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";

function Characters() {
  // primera version
  // useEffect: Es más adecuado para lógica de datos que dependa de acciones específicas dentro del componente. Los datos llegan después del primer renderizado.
//   const [characters, setCharacters]=useState([])
//   useEffect(()=>{
//      getData()
//   },[])
//   const getData = () => {
//     fetch("https://rickandmortyapi.com/api/character")
//     .then(response => response.json())
//     .then((data)=>setCharacters(data.results))
//     .catch(error => console.log("Mensaje de error: ", error))
// }
  // segunda version
  // useLoaderData: Es ideal cuando se usa react-router-dom, ya que permite cargar los datos antes del renderizado, manteniendo el componente limpio y mejorando la eficiencia.
  const characters = useLoaderData();

  return (
        <div>
            {characters.map((character) => (
                <CharacterDetail key={character.id} character={character} />
            ))}
        </div>
  );
}

export default Characters;
