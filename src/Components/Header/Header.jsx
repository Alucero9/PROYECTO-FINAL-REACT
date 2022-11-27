import CustomNav from "../NavBar/CustomNav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { GiBeerStein } from "react-icons/gi";


const {Brand,Toggle,Collapse} = Navbar 

const Header = () => {

 

    return ( 
        <Navbar as="header" className="bg-success" expand="sm" variant="success">
            <Container fluid={true} className="d-flex justify-content-between">
                <Brand>
                    <Link to="/" className="text-decoration-none">
                        <div className="d-flex flex-row justify-content-center align-items-center text-white">
                            <h1 className="text-white">Cerveceria</h1>
                            <GiBeerStein className="m-2 w-25"/>
                        </div>
                    </ Link>
                </Brand>
                <div>
                    <Toggle />
                    <Collapse>
                        <CustomNav />
                        <Link to="/cart">
                            <CartWidget />
                        </Link>
                    </Collapse>
                </div>
            </Container>
        </Navbar>

     );
}

export default Header;