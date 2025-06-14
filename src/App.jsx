import { useState } from "react";
import './App.css';
import IMC from "./components/IMC";
import ImcTable from "./components/ImcTable";
import { data } from "./data/data";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    const weightFloat = parseFloat(weight.replace(",", "."));
    const heightFloat = parseFloat(height.replace(",", "."));

    if (!weightFloat || !heightFloat) return;

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
  };

  const resetCalc = () => {
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <div className="container">
      {!imc ? (
        <IMC calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App;
