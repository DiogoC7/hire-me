import './css/styles.css';
import WeatherData from './components/WeatherForecast.js';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <div className="about-me">
        <div className="neon-frame">
          <div class="name-container">
            <span className="my-name">DIOGO</span>
            <span class="my-name">CARVALHO</span>
          </div>
          <h2 className="my-role">Developer in the making</h2>
        </div>
        <div className="right-menu">
          <a href="./files/Diogo-Carvalho-IT-CV.pdf" download="Diogo Carvalho CV.pdf"><Button backgroundColor = "none">Download CV</Button></a>
          <a href="mailto: dcc.mkt@gmail.com"><Button backgroundColor = "blue">Contact me</Button></a>
        </div>
      </div>
    </div>
  );
}

export default App;
