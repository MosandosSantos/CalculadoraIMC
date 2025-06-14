import { useState } from 'react';
import './IMC.css';
import Button from './Button';

const Imc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  }
  const calcImc = (e, height, weight ) => {
    e.preventDefault()
    console.log("executou")
  }
      
  const validDigits = (text) => {
  // Substitui vírgulas por pontos
  let value = text.replace(",", ".");

  // Remove tudo que não for número ou ponto
  value = value.replace(/[^0-9.]/g, "");

  // Garante que só exista um ponto decimal
  const parts = value.split(".");
  if (parts.length > 2) {
    value = parts[0] + "." + parts.slice(1).join("");
  }

  return value;
};

 const handleHeightChange = (e) => {
  const updatedValue = validDigits(e.target.value); 
  setHeight(updatedValue);
};


 const handleWeightChange = (e) => {
  const updatedValue = validDigits(e.target.value); 
  setWeight(updatedValue);
};

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
 <div className="form-control">
  <label htmlFor="height">Altura:</label>
  <input 
    type="text" 
    name="height" 
    id="height" 
    placeholder="Exemplo: 1,75"
    value={height}
    onChange={handleHeightChange}
  />
</div>

<div className="form-control">
  <label htmlFor="weight">Peso:</label>
  <input 
    type="text" 
    name="weight" 
    id="weight" 
    placeholder="Exemplo: 60,5"
    value={weight}
    onChange={handleWeightChange}
  />
</div>
       </div>

        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={calcImc} />
          <Button id="clear-btn" text= "Limpar" action={clearForm}/>
         
        </div>
      </form>
    </div>
  );
};

export default Imc;
