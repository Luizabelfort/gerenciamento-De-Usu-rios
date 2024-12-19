import style from './Login.module.css'
import starlogo from '../assets/star.png'
import { Formulario } from './formulario'


export function Login(){
    return(
        <section className={style.section}>

            <header className={style.divInfos}>
                <img src={starlogo} alt="logo" className={style.logoImg} />
                <h1 className={style.h1}><span className={style.fontColor}>In</span>form</h1>

            </header>

            <Formulario/>
            

        </section>
    )
}