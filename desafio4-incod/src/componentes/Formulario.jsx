import style from './Formulario.module.css'

export function Formulario(){
     return(
        <form className={style.formulario}>
   
                <p className={style.pInfo}>Faça o seu login no Inform!</p>
                <div className={style.divInputs}>

                <label htmlFor='Email'className={style.labelEmail} >Email</label>
                <input type="email" id="Email" placeholder='Digite seu email'/>

                <label htmlFor="senha" className={style.labelSenha} >Senha</label>
                <input type="password"  id="senha" placeholder='Digite sua senha'/>

                <button>Enviar</button>

                </div>

            </form>
     )

}