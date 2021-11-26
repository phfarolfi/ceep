import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import { Component } from 'react';
import './assets/index.css'
import "./assets/App.css"

class App extends Component {
    render () {
        return (
            <section className="conteudo">
                <FormularioCadastro/>
                <ListaDeNotas/>
            </section>
        );
    }
}

export default App;
