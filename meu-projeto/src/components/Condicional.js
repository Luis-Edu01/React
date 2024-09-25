import {useState} from 'react'
function Condicional(){
    
    const [email, setEmail] = useState()
    const [useEmail, setUseEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUseEmail(email)
    }
    function limparEmail(){
        setUseEmail("")
    }

    return (
        <>
            <h2>Cadastre o seu e-mail: </h2>
            <form>
                <input type="email" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar-email</button>
                {useEmail &&(
                    <div>
                        <p>O E-mail do usuário é: {useEmail}</p>
                        <button onClick={limparEmail} >Limpar E-mail</button>
                    </div>
                )}
            </form>
        </>
    )
}
export default Condicional