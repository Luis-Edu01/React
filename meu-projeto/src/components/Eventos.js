function Eventos ({ numero }){
    function meuEvento(){
        console.log(`Fui Ativado! ${numero}`)
    }

    return (
        <>
           <p>Clique para disparar um evento: </p>
           <button onClick={meuEvento}>Ativar!</button> 
        </>
    )
}
export default Eventos