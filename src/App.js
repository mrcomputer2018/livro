import './App.css';

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
      <label htmlFor="search">Search</label>
      <input id="search" type="text"></input>
    </div>
  );
}

export default App;
