import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender';
import { Counter, Counter1, Counter2 } from './components/Counter/Counter';
import PokemonView from './views/PokemonView';
import { Friends } from './components/Friends';

import { UserMenu } from './components/MyContext/UserMenu';

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App1() {
  return (
    <div style={containerStyles}>
      <UserMenu />
      <AppBar />
      <Switch>
        <Route path="/skip-first-render">
          <SkipEffectOnFirstRender />
        </Route>
        <Route path="/pokemon">
          <PokemonView />
        </Route>
        <Route path="/counter">
          <Counter />
          <br />
          <Counter1 />
          <br />
          <Counter2 />
        </Route>
        <Route path="/notes">
          <Friends />
        </Route>
      </Switch>
    </div>
  );
}
