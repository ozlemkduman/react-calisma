import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'

let name="Özlem"
let lastName="Karaduman"
function App() {
  return (
    <div className="App">
      <Header />
      <p>{`Burası ${name} ${lastName}'ın çalışma alanıdır.`}</p>
      <Main/>
    </div>
  );
}

export default App;
