import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';

function App() {

    const nome = 'Maria'

  return (
    <div className="App">
      <HelloWorld /> 
      <SayMyName nome="Luís Eduardo"/>
      <SayMyName nome="Julia"/>
      <SayMyName nome = {nome}/>
    </div>
  )
}
export default App
