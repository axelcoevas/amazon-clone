import React from 'react';
import "./Checkout.css";
import  Subtotal from  "./Subtotal";
import { useSateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Flipper, Flipped } from 'react-flip-toolkit';

function Checkout() {
    const [ { basket }, dispatch] = useSateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt=""/>
                <div>
                    <h2 className="checkout__title"> Your shopping basket</h2>
                        {basket.map((item) =>
                            <Flipped flipId="list">
                                <CheckoutProduct
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />      
                            </Flipped>
                            
                        )}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;