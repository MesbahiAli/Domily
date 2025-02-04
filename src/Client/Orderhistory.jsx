import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const userResponse = await fetch('http://localhost:8081/api/users/2');
                const userData = await userResponse.json();
                const ordersWithServiceDetails = await Promise.all(
                    userData.orders.map(async (order) => {
                        const serviceResponse = await fetch(`http://localhost:8081/api/services/${order.serviceId}`);
                        const serviceData = await serviceResponse.json();
                        return { ...order, service: serviceData };
                    })
                );
                setOrders(ordersWithServiceDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setError('Failed to load orders.');
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Order History</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            <h2>Order ID: {order.id}</h2>
                            <p>Address: {order.ordre_adresse}</p>
                            <p>Order Date: {order.orderDate}</p>
                            <p>Status: {order.status}</p>
                            <p>Start Hour: {order.start_hour}</p>
                            <p>End Hour: {order.end_hour}</p>
                            <h3>Service Details</h3>
                            <p>Name: {order.service.name}</p>
                            <p>Description: {order.service.description}</p>
                            <p>Price: {order.service.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderHistory;