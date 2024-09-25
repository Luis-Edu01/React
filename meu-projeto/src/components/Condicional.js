import {useState} from 'react'
function Condicional(){
    
    const [email, setEmail] = useState()
    const [useEmail, setUseEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUseEmail(email)
        console.log(useEmail)
    }

    return (
        <>
            <h2>Cadastre o seu e-mail: </h2>
            <form>
                <input type="email" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar-email</button>
                {useEmail}
            </form>
        </>
    )
}
export default Condicional