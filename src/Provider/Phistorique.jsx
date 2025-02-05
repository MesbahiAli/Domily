import React, { useEffect, useState } from 'react';
import { Label, Select, HR, Card, Rating } from "flowbite-react";
import Provider_Nav from "./Components/Provider_Nav";

const Phistorique = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProviderOrders = async () => {
            try {
                // Fetch services for the provider
                const servicesResponse = await fetch('http://localhost:8081/api/services/provider/3');
                const servicesData = await servicesResponse.json();

                // Fetch client details for each order in the services
                const servicesWithOrdersAndClients = await Promise.all(
                    servicesData.map(async (service) => {
                        const ordersWithClients = await Promise.all(
                            service.orders.map(async (order) => {
                                const clientResponse = await fetch(`http://localhost:8081/api/users/${order.clientId}`);
                                const clientData = await clientResponse.json();
                                return { ...order, client: clientData };
                            })
                        );
                        return { ...service, orders: ordersWithClients };
                    })
                );

                setServices(servicesWithOrdersAndClients);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching provider orders:', error);
                setError('Failed to load orders.');
                setLoading(false);
            }
        };

        fetchProviderOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return ( 
        <>
    < Provider_Nav />
        <div>
            <h1>Provider Order History</h1>
            {services.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {services.map((service) => (
                        <li key={service.id}>
                            <h2>Service: {service.name}</h2>
                            <p>Description: {service.description}</p>
                            <p>Price: {service.price} DH</p>
                            <h3>Orders</h3>
                            {service.orders.length === 0 ? (
                                <p>No orders for this service.</p>
                            ) : (
                                <ul>
                                    {service.orders.map((order) => (
                                        <li key={order.id}>
                                            <h4>Order ID: {order.id}</h4>
                                            <p>Address: {order.ordre_adresse}</p>
                                            <p>Order Date: {order.orderDate}</p>
                                            <p>Status: {order.status}</p>
                                            <p>Start Hour: {order.start_hour}</p>
                                            <p>End Hour: {order.end_hour}</p>
                                            <h5>Client Details</h5>
                                            <p>Name: {order.client.nom} {order.client.prenom}</p>
                                            <p>Email: {order.client.email}</p>
                                            <p>Phone: {order.client.phone}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    );
};

export default Phistorique;