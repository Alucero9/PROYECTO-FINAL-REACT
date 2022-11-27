import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ( {item} ) => {


    const { addToCart, isInCart } = useContext(CartContext)
    
    console.log(item)
    
    const handleAgregar = (cantidad) => {

       
        
        const newItem = {
            id: item.id,
            image : item.image,
            price : item.price,
            title : item.title,
            category : item.category,
            description : item.description,
            cantidad,
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    return ( 
        <div className="col d-flex justify-content-center m-4">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={item.image} alt="imagen_producto" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                        {item.description}
                        {item.category}</p>
                        <p>$ {item.price}</p>
                        
                                { isInCart(item.id) ? <Link to="/cart" className="btn btn-info">Ir al Carrito</Link>
                        : <ItemCount handleAgregar={handleAgregar} stock={item.stock} id={item.id}/> }
                        <Link to="/"><button className="btn btn-success m-2">Seguir comprando</button></Link>
                </div>
            </div>
        </div>
        );
}
    
export default ItemDetail;