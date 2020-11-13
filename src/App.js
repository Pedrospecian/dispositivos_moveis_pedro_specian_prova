import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
    { nome: "teste", tempo: 12, movimentos: 3 },
    { nome: "teste", tempo: 1, movimentos: 4 },
    { nome: "teste", tempo: 2, movimentos: 5 }
  ]
};

function Home() {
  return <div>
    <a target="_blank" href="https://github.com/Pedrospecian/dispositivos_moveis_pedro_specian_prova">Visite a página do desenvolvedor</a>
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
      <tbody>
        {estadoGlobal.ganhadores.map(function(elemento){
          return (<tr><td>1</td><td>{elemento.nome}</td><td>{elemento.movimentos}</td><td>{elemento.tempo}</td></tr>)
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

