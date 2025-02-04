import React, { useEffect, useState } from "react";
import { Label, Select, HR, Card, Rating } from "flowbite-react";
import Client_Nav from "./Components/Client_Nav";
import { Link } from "react-router-dom";

const Historique = () => {
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
        <>
            <Client_Nav />
            <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col ">
                <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    Liste des <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">demandes</span>
                </h1>
                <HR.Trimmed />
                <div className="grid grid-cols-3 gap-4">
                    {orders.map((order) => (
                        <Card key={order.id} className="max-w-sm">
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    service
                                </h2>
                                <p>{order.service.name}</p>
                            </div>
                            <hr />
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    details
                                </h2>
                                <p>{order.service.description}</p>
                            </div>
                            <hr />
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                     fournisseur
                                </h2>
                                <p className="ml-3">{order.service.provider.nom}  {order.service.provider.nom}</p>
                            </div>
                            <hr />
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg text-center font-semibold text-gray-900 dark:text-white">
                                    téléphone du fournisseur
                                </h2>
                                <p className="ml-3">{order.service.provider.phone}</p>
                            </div>
                            <hr />
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Date de service
                                </h2>
                                <p className="ml-3">{order.orderDate}</p>
                            </div>
                            <hr />

                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Date de Debut
                                </h2>
                                <p className="ml-3">{order.start_hour}</p>
                            </div>
                            <hr />

                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Heur de fin
                                </h2>
                                <p className="ml-3">{order.end_hour}</p>
                            </div>
                            <hr />
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Frais de service
                                </h2>
                                <p className="ml-3">{order.service.price}DH</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Historique;