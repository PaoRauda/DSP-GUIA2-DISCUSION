"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };
  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };
  const multiplicar = () => {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicacion: ${resultadoMultiplicacion}`);
  };
  const dividir = () => {
    if(numero2 == 0){
      setResultado(`No se puede dividir entre 0`);
    }
    else{
      const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la division: ${resultadoDivision}`);
    }
  };
  const potenciar = () => {
    const resultadoRaiz =  Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la raiz del número 1: ${resultadoRaiz}`);
  };
  const raiz = () => {
    const resultadoRaiz =  Math.sqrt(parseFloat(numero1));
    setResultado(`Resultado de la raiz del número 1: ${resultadoRaiz}`);
  };
  const reset = () => {
    setNumero1('');
    setNumero2('');
    setResultado('');
  };



    return (
      <main className={styles.main}>
      <div className={styles.calculadora}>
      <div className={styles.numeros}>
      <label className={styles.text}>Número 1:</label>
      <input className={styles.inputnum} type="number"
     value={numero1} onChange={(e) => setNumero1(e.target.value)} />
      </div>
      <div className={styles.numeros}>
      <label className={styles.text} >Número 2:</label>
      <input className={styles.inputnum} type="number"
     value={numero2} onChange={(e) => setNumero2(e.target.value)} />
      </div>
      <div>
      <button className={styles.button}
     onClick={sumar}>Sumar</button>
      <button className={styles.button}
     onClick={restar}>Restar</button>
     <button className={styles.button}
     onClick={multiplicar}>Multiplicar</button>
     <button className={styles.button}
     onClick={dividir}>Dividir</button>
     <button className={styles.button}
     onClick={potenciar}>Potenciar</button>
     <button className={styles.button}
     onClick={raiz}>Raiz Cuadrada</button>
     <button className={styles.button}
     onClick={reset}>Resetear</button>
      </div>
      {resultado && <div
     className={styles.resultado}>{resultado}</div>}
      </div>
      </main>
      );
   
  
}
