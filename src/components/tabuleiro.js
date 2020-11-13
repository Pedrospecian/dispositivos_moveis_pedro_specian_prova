import React from "react";
import Casa from './casa.js';
import Timer from './timer.js';

class Tabuleiro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casas: Array(9).fill(null),
      tempo: this.props.tempo,
      pensando: false,
    };
  }

  handleClick(i) {
    const casas = this.state.casas.slice();
    if (conferirVencedor(casas) || casas[i]) {
      return;
    }
    casas[i] = 'X';
    let casaComputador = i;
    this.setState({
      casas: casas
    });

    if(!conferirVencedor(casas)) {

      while(casas[casaComputador] === 'X' || casas[casaComputador] === 'O') {
        casaComputador = Math.floor(Math.random() * (9));
      }

      this.setState({
        pensando: true
      });

      setTimeout(() => {
        casas[casaComputador] = 'O';
        this.setState({
          casas: casas,
          pensando: false
        });
      }, 2000);
    }  
  }

  renderizaCasa(i) {
    return (
      <Casa
        value={this.state.casas[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const vencedor = conferirVencedor(this.state.casas);
    let status;
    let infoBottom;
    if (vencedor === 'X') {
      status = 'Você venceu!';
      infoBottom = (<div className>formulario de vitoria</div>)
    } else {
      if (vencedor === 'O') {
        status = 'Você perdeu!';
      } else {
        status = '';
        infoBottom = (<div className="tempo">
            Tempo: <Timer />
          </div>);
      }
    }

    let mensagemPensando = '';

    if(this.state.pensando) {
      mensagemPensando = 'O computador está pensando em sua próxima jogada.';
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="pensando">{mensagemPensando}</div>
        <div className="linha">
          {this.renderizaCasa(0)}
          {this.renderizaCasa(1)}
          {this.renderizaCasa(2)}
        </div>
        <div className="linha">
          {this.renderizaCasa(3)}
          {this.renderizaCasa(4)}
          {this.renderizaCasa(5)}
        </div>
        <div className="linha">
          {this.renderizaCasa(6)}
          {this.renderizaCasa(7)}
          {this.renderizaCasa(8)}
        </div>
        {infoBottom}
      </div>
    );
  }
}

const conferirVencedor = casas => {
  const linhasVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < linhasVitoria.length; i++) {
    const [a, b, c] = linhasVitoria[i];
    if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) {
      return casas[a];
    }
  }
  return null;
}

export default Tabuleiro;