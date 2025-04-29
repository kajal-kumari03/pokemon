
// src/components/PokemonCard.jsx


import './PokemonCard.css'; 

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">

      {/* Pokémon Image */}
      {pokemon.sprites?.front_default && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
      )}

      {/* Name */}
      <h2 className="pokemon-name">{pokemon.name}</h2>

      {/* Type badges */}
      <div className="pokemon-types">
        {pokemon.types.map((typeObj) => (
          <span key={typeObj.type.name} className={`type-badge ${typeObj.type.name}`}>
            {typeObj.type.name}
          </span>
        ))}
      </div>

      {/* Basic Details */}
      <div className="pokemon-details">
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
      </div>

      {/* Abilities */}
      <div className="pokemon-abilities">
        <h4>Abilities</h4>
        <ul>
          {pokemon.abilities.map((abilityObj) => (
            <li key={abilityObj.ability.name}>
              {abilityObj.ability.name}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default PokemonCard;





