import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

import "./style.scss";
//Statefull component -- com comportamento
class App extends Component {
  state = {
    counter: 0
  };

  //m[etodo executado imediatamente ap[os a inicializacao do componente
  //ideal para chamadas de api ou carragar componentes de listagem ou cadastrar eventlisteners]
  componentDidMount() {}

  //ao contratio do didmount, idelal para fazer algo qdo o compoenente deixa de existir
  componentWillMount() {}

  //toda vez que o componente eh atualizado e o render é chamado passa antes por aqui
  // retornando true ou false determinamos se renderizamos ou nao
  // é possível vetar a atuaizacao do render
  //shouldComponentUpdate(nextProps, nextState) {}

  //executa depois de sofrer atualizacap
  componentDidUpdate(prevProps, presState) {}

  handleClick = () => {
    //this.state.counter += 1; -- nao mostra a mudanca de estado
    this.setState({ counter: this.state.counter + 1 });

    //collocando funcao de callback para pegar o valor atuaizado imediatamente
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });

    //pegando o resultado diretamente da fila so state
    //this.setState(state => ({ counter: state.counter + 1 }));
    //this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    return (
      <Fragment>
        <h1 className="title">Hello React</h1>
        <h2 style={{ color: "#f00" }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}> Send </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
