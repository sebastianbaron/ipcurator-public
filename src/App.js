import './App.css';
import curate from "./components/curate.js"
import copy from "./components/copy.js"

function App() {
  return (
    <div>
    <div className="input-group m-auto mt-3 mb-3 w-50 d-flex">
    <span className="input-group-text" id="inputGroup-sizing-default">IPs</span>
    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="IPS" />
    <button className="btn btn-dark ml-2" onClick={curate}>Curar</button>
    </div>
    
    <h2 className="d-flex justify-content-center mt-5">Hay que configurar : </h2>
    <div className="d-flex justify-content-center">
    <div className="d-flex flex-column">
    <ul className="mt-5" id="ipList" />
    {/* <ul className="list-group-item" id="ipYaConfiguradas" /> */}
    <button onClick={ ()=> copy(document.getElementById("ipList").innerText)} className="btn btn-dark">Copiar</button>
    </div>
    
    </div>
    
    </div>
    );
  }
  
  export default App;
  