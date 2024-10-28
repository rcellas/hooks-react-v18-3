
function CharacterDetail({character}) {
  return (
    <div key={character.id}>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
    </div>
  )
}

export default CharacterDetail