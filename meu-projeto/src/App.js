import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  const name = "Luís Eduardo"

  const newName = name.toUpperCase()
  
  function sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/50'

  return (
    <div className="App">
      <h2> Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>soma : {sum (33,36)}</p>
      <img src={url} alt="Minha imagem" /> 
      <HelloWorld />
    </div>
  );
}

export default App;
