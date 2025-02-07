import React, { useEffect, useState } from 'react';
import { Card, Badge, Spinner } from "flowbite-react";
import Entreprise_Nav from "./Components/Entreprise_Nav";

const Ehistorique = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
console.log(localStorage.getItem('userId'));

    useEffect(() => {
        const fetchProviderOrders = async () => {
            try {
                const servicesResponse = await fetch(`http://localhost:8081/api/services/provider/${localStorage.getItem('userId')}`);
                const servicesData = await servicesResponse.json();
                
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
        return <div className="flex justify-center items-center h-screen"><Spinner size="xl" /></div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <>
            <Entreprise_Nav />
            <div className="w-3/4 mx-auto my-10">
                <h1 className="text-3xl font-bold text-center mb-8">Historique des commandes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        service.orders.length > 0 && (
                            <Card key={service.id} className="p-4 shadow-md">
                                <h2 className="text-xl font-semibold">{service.name}</h2>
                                <p className="text-gray-600">{service.description}</p>
                                <p className="font-bold">Prix: {service.price} DH</p>
                                <h3 className="text-lg font-semibold mt-4">Commandes</h3>
                                <div className="space-y-4">
                                    {service.orders.map((order) => (
                                        <div key={order.id} className="border-t pt-3">
                                            <p><strong>Adresse:</strong> {order.ordre_adresse}</p>
                                            <p><strong>Date:</strong> {order.orderDate}</p>
                                            <p><strong>Heure:</strong> {order.start_hour} - {order.end_hour}</p>
                                            <Badge color={order.status === "Completed" ? "green" : order.status === "Pending" ? "yellow" : "red"}>
                                                {order.status}
                                            </Badge>
                                            <h4 className="mt-2 font-semibold">Client</h4>
                                            <p>{order.client.nom} {order.client.prenom}</p>
                                            <p>{order.client.email}</p>
                                            <p>{order.client.phone}</p>

                                            {/* Display reviews if available */}
                                            {service.reviews.length > 0 && (
                                                <div className="mt-4">
                                                    <h4 className="font-semibold">Reviews</h4>
                                                    <div className="space-y-2">
                                                        {service.reviews.map((review) => (
                                                            <div key={review.id} className="border-b pb-2">
                                                                <p><strong>Note:</strong> {review.rating} / 5 stars</p>
                                                                <p><strong>Commentaire:</strong> {review.comment}</p>
                                                                <p><strong>Date:</strong> {review.date}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default Ehistorique;
