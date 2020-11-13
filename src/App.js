import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import './App.css';

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

const estadoGlobal = {
  ganhadores: [
    { nome: "Pedro", tempo: 12, movimentos: 3 },
    { nome: "João", tempo: 9, movimentos: 4 },
    { nome: "Ricardo", tempo: 10, movimentos: 5 },
  ]
};

function Home() {
  return <div>
    <a target="_blank" href="https://github.com/Pedrospecian/dispositivos_moveis_pedro_specian_prova">Visite a página do desenvolvedor</a>
    <h1>Bem-vindo ao Jogo da Velha</h1>
    <h3>Pedro Toupitzen Specian - RA 1840481923023</h3>
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
      <tbody>
        {estadoGlobal.ganhadores.sort((a, b) => (a.tempo > b.tempo) ? 1 : -1).slice(0, 10).map(function(elemento, index){
          return (<tr>
            <td>{index + 1}</td>
            <td>{elemento.nome}</td>
            <td>{elemento.movimentos}</td>
            <td>{Math.floor(elemento.tempo / 60)}:{(elemento.tempo % 60) < 10 ? '0' + (elemento.tempo % 60) : (elemento.tempo % 60) }</td>
          </tr>)
        })}
      </tbody>
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
          <Tabuleiro estadoGlobal={estadoGlobal} />
        </div>
      </div>;
}

