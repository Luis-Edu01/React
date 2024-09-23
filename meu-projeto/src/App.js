import './App.css';
import Evento from './components/Eventos'

function App() {

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
    </div>
  )
}
export default App
