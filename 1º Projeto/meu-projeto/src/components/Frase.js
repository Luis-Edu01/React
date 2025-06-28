import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent} >Este é o componente com uma Frase!</h1>
        </div>
    )
}
export default Frase