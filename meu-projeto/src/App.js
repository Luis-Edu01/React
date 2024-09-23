import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

    const nome = 'Maria'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <SayMyName nome="Luís Eduardo"/>
      <SayMyName nome="Julia"/>
      <SayMyName nome = {nome}/>
      <Pessoa nome="Luís Eduardo" idade="23" profissão="Militar" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  )
}
export default App
