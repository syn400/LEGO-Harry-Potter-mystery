import { useNavigate } from "react-router-dom"


export const OrderSite = () => {
    const nav = useNavigate();
    return (
        <div className="orderSite">
            <div>
                <h1>Thank You!</h1>
                <h2>All informations about order was sent to your email.</h2>
                <button onClick={()=> nav('/')}>Back to homepage</button>
            </div>
        </div>
    )
}