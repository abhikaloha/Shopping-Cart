import react from "react";
import { useCustomhook } from './context';
import { useNavigate } from "react-router-dom";
import { FaBorderNone } from "react-icons/fa";
 let Cart = () => {
    let { state, dispatch } = useCustomhook()
    let history = useNavigate()
    if (state.cart.length == 0) {
        return (
            <>
            <div style={{border:"1px solid green",textAlign:"center",marginTop:"200px"}}>
                <h1 style={{border:"1px solid red",textAlign:"center",paddingBottom:"20px"}}>YOUR CART IS EMPTY</h1>
                <button style={{border:"none",outline:"none",padding:"5px 14px",fontSize:"15px",textAlign:"center",backgroundColor:"dodgerblue",color:"white"}} onClick={() => history(`/`)}>FILL CART</button>
            </div>
            </>
        )
    }
    return (
        <>
            <div className="grid-cart" style={{ border: "1px solid crimson", width: "70%", margin: "auto", marginTop: "35px" }}>
                <h1 style={{ textAlign: "center" }}>YOUR ITEMS</h1>
                {state.cart.map((unit) => {
                    let { title, price, src, amount, id } = unit
                    return (
                        <div style={{ border: "1px solid blue", display: "flex", justifyContent: "space-between", marginTop: "20px", alignItems: "center", padding: "20px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.3)" }} key={id}>
                            <div style={{ border: "1px solid black", display: "flex", alignItems: "center", width: "31%" }}>
                                <img src={src} style={{ height: "100px", width: "100px" }}></img>
                                <div style={{ border: "1px solid  yellow", marginLeft: "15px" }}>
                                    <div style={{ border: "1px solid green", padding: "2px" }}>{title}</div>
                                    <div style={{ border: "1px solid green", padding: "2px", color: "chartreuse" }}>${price}</div>
                                    <div style={{ border: "1px solid green", padding: "2px" }}><button className="removebtncart" style={{ border: "none", outline: "none", padding: "5px 9px", backgroundColor: "crimson", color: "white" }} onClick={() => dispatch({ type: "remove", payload: id })}>Remove</button></div>
                                </div>
                            </div>
                            <div style={{ border: "1px solid black" }}>
                                <button className="plus" style={{ fontSize: "21px", padding: "0px 6px", border: "none", outline: "none", backgroundColor: "dodgerblue" }} onClick={() => dispatch({ type: "increment", payload: id })}> + </button>
                                <span>&nbsp;&nbsp;{amount}&nbsp;&nbsp;</span>
                                <button className="minus" style={{ fontSize: "21px", padding: "0px 9px", border: "none", outline: "none", backgroundColor: "dodgerblue" }} onClick={() => dispatch({ type: "decrement", payload: id })}> - </button>
                            </div>
                        </div>
                    )
                })}
                <h1 style={{ border: "1px solid yellow", paddingTop: "30px",paddingBottom:"30px", textAlign: "center" }}>Total is : ${state.total}</h1>
            </div>
        </>
    )
}
export default Cart;