
import ProductCard from '../components/ProductCard';


const ProductPage = ({robots, setCartNumber, cartNumber}) => {
    //const { robots} = props;
    
    return (
        <section className='robots-container'>
            {
                robots.map((eachRobot, index) => {
                    return <ProductCard 
                    key={index} 
                    index={index}
                    details={eachRobot} 
                    setCartNumber={setCartNumber} 
                    cartNumber={cartNumber} />
                })
            }
        </section>
    )
}

export default ProductPage