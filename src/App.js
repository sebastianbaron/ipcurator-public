import logo from './logo.svg';
import './App.css';
import curate from "./components/curate.js"

function App() {
  return (
    <div>
        <input type="text" id="IPS" placeholder="Ips aca" />
        <button onClick={curate.curate}>Curar</button>
        <h2>IPs que hay que configurar hoy</h2>
        <div>
          <ul id="ipList" />
          <ul id="ipYaConfiguradas" />
        </div>
      </div>
  );
}

export default App;
