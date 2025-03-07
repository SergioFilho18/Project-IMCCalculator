import { Level } from "@/app/helpers/imc";
import styles from './Griditem.module.css'
import upImage from '../../../../public/images/up.png'
import downImage from '../../../../public/images/down.png'
import Image from "next/image";


type Props = {
    item: Level
};

export const Griditem = ({item} : Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}> 
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <Image src={upImage} alt="Descrição da imagem" width={30}   />}
                {item.icon === 'down' && <Image src={downImage} alt="Descrição da imagem" width={30}  />}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC esta entre <strong>{item.imc[0]}</strong> e <strong >{item.imc[1]}</strong>                
                </>

            </div>
        </div>
    );
}