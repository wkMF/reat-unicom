import logo from './logo.svg';
import './App.css';
import Hook from './component/Hook.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
      </header>
      <aside>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </aside>
      <main>
        <content>
          <Hook></Hook>
        </content>
      </main>
      <footer>
        2023-07-13
      </footer>
    </div>
  );
}

export default App;
