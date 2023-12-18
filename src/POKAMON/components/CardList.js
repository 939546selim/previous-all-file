import Card from "./Card";
import './CardList.css'
const CardList = ({ pokemonData }) => {

    return (<>



        <div className="pokemonList">
            {pokemonData.map(({ id, name, type, image }) => {
                return <Card id={id} name={name} type={type} imageUrl={image} />
            })}
        </div>





    </>


    )


}
export default CardList;