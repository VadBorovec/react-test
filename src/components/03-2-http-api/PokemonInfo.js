import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from './services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        pokemonAPI
          .fetchPokemon(nextName)
          .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 3000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Please, enter pokemon name</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

// ! can render this way

// render() {
//   const { pokemon, loading, error } = this.state;
//   const { pokemonName } = this.props;

//   return (
//     <div>
//       <h1>Pokemon info</h1>
//       {error && <div>{error.message}</div>}
//       {loading && <div>Loading...</div>}
//       {!pokemonName && <div>Please, enter pokemon name</div>}
//       {pokemon && (
//         <div>
//           <img
//             src={pokemon.sprites.other['official-artwork'].front_default}
//             width="240"
//             height="100"
//             alt={pokemon.name}
//           />
//           <h2>{pokemon.name}</h2>
//           <ul>
//             {pokemon.stats.map(entry => (
//               <li key={entry.stat.name}>
//                 {entry.stat.name}: {entry.base_stat}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
