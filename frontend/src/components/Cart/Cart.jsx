import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const {myCart, total, addToCart, setTotal} = useContext(CartContext)
    console.log('my cart: >>>>', myCart)
    const navigate = useNavigate();

    
    const handleDone= ()=>{
        addToCart([{}])
        setTotal(0)
    }

    const goHome=()=>{
        navigate ('/');
    }
    
    return ( <>
    <section className="cart-container">
        <div className="cart-header">Checkout</div>
    
    <div className="cart-item">
{myCart.slice(1).map((item)=>{
    return(
        <div className="cart-item" key={item.name}>
            <img src={item.imageUrl} alt=""/>
            {item.name} : {item.price}$
        </div>
    )
})}
    </div>
    <div className="cart-total">
        
        Total: {total}$</div>
        <button className="done" onClick={handleDone}>Done</button>
    </section>
    <button className="go-home-btn"
    onClick={goHome}
    >Go Home</button>
    </> );
}
 
export default Cart;