import React from 'react'
import {useQuery} from 'react-apollo'
import {gql} from 'apollo-boost'

const GET_CHARACTERS_QUERY = gql`
query getCharacters {
  characters {
    results {
      id
      name
      image
    }
  }
}
`

export default function CharacterWithRender(){

    // use react apollo hook
    const {loading, error, data} = useQuery(GET_CHARACTERS_QUERY)
    if(loading) return 'Loading'
    if(error) return `Error! ${error.message}`
    return (
      <div className="characters">
        {data.characters.results.map(character => (
          <div key={character.name} className="character">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    );
}