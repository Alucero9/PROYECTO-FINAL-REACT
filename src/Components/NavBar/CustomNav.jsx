import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

const {Item} = Nav

const CustomNav = () => {
    return ( 
        <Nav>
            <Item className="d-flex justify-content-end ">
                <Link exact to="/productos/rubia" className="mx-3 link-dark  text-decoration-none color:light">rubia</Link>
                <Link exact to="/productos/roja" className="mx-3 link-dark text-decoration-none">roja</Link>
                <Link exact to="/productos/negra" className="mx-3 link-dark text-decoration-none">negra</Link>
            </Item>
        </Nav>
     );
}
 
export default CustomNav;