import './App.css';
import Exerc02 from './components/Exercicies/exerc02';
import Exerc03 from './components/Exercicies/exerc03_key';
import Exerc04 from './components/Exercicies/exerc04_KeyHooks';
import Search from './components/Search/Search';

/* const welcome = {
  greeting: 'Hey',
  tittle: 'React'
} */

function getTitle(title) {
  return title;
}

function App() {
 /*  const tittle = "React" */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {getTitle('React')}</h1>
       {/*  <h1>{welcome.greeting} {welcome.tittle}</h1> */}
      </header>
      {/* <label htmlFor="search">Search</label>
      <input id="search" type="text"></input> */}
      <Exerc02/>
      <hr/>
      <Exerc03/>
      <hr/>
      <Exerc04/>
      <hr/>
      <Search />
    </div>
  );
}

export default App;
