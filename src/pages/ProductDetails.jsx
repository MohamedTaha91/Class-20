import { useParams } from "react-router-dom"
import robotData from "../robot_products.json"


const ProductDetails = () => {
    const robotIndex = useParams().index;
    const robot = robotData[robotIndex]
    return (
        <>
            <h1>Details page about {robot.Name}</h1>
            <img src={robot.ImageUrl} alt={robot.Name}/>
            <h2>Description{robot.Description}</h2>
            <h2>{robot.Price}€</h2>
            <h2>{robotIndex}</h2>
        </>

    )
}
export default ProductDetails