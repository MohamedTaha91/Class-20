/* eslint-disable react/prop-types */
import "./navBar.css";
import robotJson from '../robot_products.json'

const NavBar = (props) => {

    const handleSearch = (searchValue) => {
        console.log(props.robots);
        const robotsUpdated = props.robots.filter((eachRobot) => {
            return eachRobot.Name.includes(searchValue)
        })
        if (searchValue === "") {
            props.setRobots(robotJson)
        } else {
            props.setRobots(robotsUpdated)
        }
    }

    return (
        <nav id="navbar-element">
            <h1>RoboZon.com</h1>
            <div>
                <input onChange={(event) => handleSearch(event.target.value)} id="search-input" type="search" placeholder="Search robot" /><span>🔍</span>
            </div>
            <p>Products in the cart: <span>{props.cartNumber}</span> </p>
        </nav>
    )
}

export default NavBar;