"use client"


import styles from './page.module.css';
import poweredImage from "../../public/images/powered.png"
import { useState } from 'react';
import leftArrowImage from "../../public/images/leftarrow.png"

import { levels, calculateImc, Level } from './helpers/imc';
import { Griditem } from './components/Griditem';
import Image from 'next/image';

const Page = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField){
        setToShow(calculateImc(heightField, weightField))
    } else {
      alert("Preencha todos os campos.")
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={poweredImage.src} alt='' width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa</p>

          <input 
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5m'
            value={heightField > 0 ? heightField: ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
            />

            <input 
            type="number"
            placeholder='Digite seu peso. Ex: 80kg'
            value={weightField> 0 ? weightField: ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
            />

            <button onClick={handleCalculateButton} disabled={toShow ? true : false} >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
              {levels.map((item, key) => (
                <Griditem key={key} item= {item} />
              ))}
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}> 
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <Image src={leftArrowImage} alt="" width={25} />
              </div>
              <Griditem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;