import { data } from "./data/data";
import { useState } from "react";
import './App.css';
import IMC from "./components/IMC";
import ImcTable from "./components/ImcTable";

function App() {

 
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

   return (
  <div className="container">{!imc ? <IMC calcImc={calcImc} /> : <ImcTable />}</div>
);
}

export default App;