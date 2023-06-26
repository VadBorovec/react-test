import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from '../components/Pokemon/Form.js';
import PokemonInfo from '../components/Pokemon/Info.js';

import { Section } from 'styles/ui';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Section title="Pokemon catch">
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </Section>
  );
}
