import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent TextTitle="Prima Prova con React!" textOfButton="Ciao, clicca qui!"/>
        <ImageComponent UrlImg="https://picsum.photos/200" DescriptionImg="img"/>
        <ImageComponent UrlImg="https://picsum.photos/300" DescriptionImg="landscape"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
