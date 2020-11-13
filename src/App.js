import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

/*import Timer from './components/timer.js';
import Casa from './components/casa.js';*/
import Tabuleiro from './components/tabuleiro.js';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/jogar">
            <Jogar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
    <h1>Bem-vindo ao Jogo da Velha</h1>
    <h2>Ranking</h2>
    <table>
      <thead>
        <tr>
          <th>Posição</th>
          <th>Jogador</th>
          <th>Movimentos</th>
          <th>Tempo</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    Mostrar os 10 primeiros jogadores do Ranking
    <br/>
    <Link to="/jogar">Jogar</Link>
  </div>;
}

function Jogar() {
  return <div className="jogo">
        <Link to="/">Voltar para a página inicial</Link>
        <div className="tabuleiro-wrapper">
          <Tabuleiro />
        </div>
      </div>;
}

