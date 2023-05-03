import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import About from './components/About.js'

let name="Özlem";
let lastName="Karaduman";
let isActive=true;
let greating="Hoşgeldiniz"
function App() {
  return (
    <div className="App">
      <Header />
      <p>{`Burası ${name} ${lastName}'ın çalışma alanıdır.`}</p>
      <p>{isActive ? greating : "Üye değilsiniz"}</p>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
