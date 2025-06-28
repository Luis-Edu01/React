import Item from './Item';

function List(){
    return(
        <>
        <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Porche" ano_lancamento={2017}/>
                <Item marca="Mercedes" ano_lancamento={2019}/>
            </ul>
        </>
    )
} 
export default List