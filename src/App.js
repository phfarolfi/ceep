import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            notas: [],
        categorias: ["Trabalho", "Faculdade", "Arte", "Música"]
        }
    }

    criarNota(titulo, texto, categoria) {
        const novaNota = {titulo, texto, categoria}
        const novoArrayNotas = [...this.state.notas, novaNota]
        const novoEstado = {
            notas:novoArrayNotas
        }
        this.setState(novoEstado)
    }

    deletarNota(index) {
        const arrayNotas = this.state.notas
        arrayNotas.splice(index,1)
        this.setState({ notas: arrayNotas })
    }

    criarCategoria(nome) {
        const novoArrayCategorias = [...this.state.categorias, nome]
        const novoEstado = {
            categorias: novoArrayCategorias
        }
        this.setState(novoEstado)
    }

    deletarCategoria(index) {
        const arrayCategorias = this.state.categorias
        arrayCategorias.splice(index,1)
        this.setState({ categorias: arrayCategorias })
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro categorias={this.state.categorias} criarNota={this.criarNota.bind(this)}/>
                <main className="conteudo-principal">
                    <ListaDeCategorias categorias={this.state.categorias} criarCategoria={this.criarCategoria.bind(this)} deletarCategoria={this.deletarCategoria.bind(this)}/>
                    <ListaDeNotas notas={this.state.notas} deletarNota={this.deletarNota.bind(this)}/>
                </main>
            </section>
        );
    }
}

export default App;
