import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/images/delete.svg";
class CardNota extends Component {
  apagarNota() {
    const index = this.props.index
    this.props.apagarNota(index)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagarNota.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
