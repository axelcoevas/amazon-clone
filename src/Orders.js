import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from './firebase';
import { useSateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{ basket, user }, dispatch] = useSateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                });
        } else {
            setOrders([]);
        }
    }, [user])

    return (
        <div className="orders">
            {orders.map(order => 
                <Order 
                    order={order} />
            )}
        </div>
    )
}

export default Orders
