import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import { Component } from 'react';
import './assets/index.css'

class App extends Component {
    render () {
        return (
            <section>
            <FormularioCadastro/>
            <ListaDeNotas/>
        </section>
        );
    }
}

export default App;
