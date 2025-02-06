import React, { useEffect, useState } from "react";
import { Card, Textarea, Button } from "flowbite-react";
import Client_Nav from "./Components/Client_Nav";
import ReactStars from "react-rating-stars-component";

const Historique = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ratings, setRatings] = useState({});

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

    const handleSubmitReview = async (orderId, comment) => {
        try {
            const currentDate = new Date().toISOString().split('T')[0];
            const rating = ratings[orderId] || 0;

            if (rating === 0) {
                alert("Please select a rating before submitting.");
                return;
            }

            const reviewPayload = {
                rating,
                comment,
                date: currentDate,
                user: { id: 2 },
                service: { id: orders.find(order => order.id === orderId).serviceId },
            };

            const response = await fetch('http://localhost:8081/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reviewPayload),
            });

            if (response.ok) {
                alert('Review submitted successfully!');
            } else {
                alert('Failed to submit review.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const handleRatingChange = (orderId, newRating) => {
        setRatings((prev) => ({ ...prev, [orderId]: newRating }));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <Client_Nav />
            <div className="w-4/5 mx-auto pt-24 pb-10 min-h-screen">
                <h1 className="text-4xl mb-8 text-center font-extrabold text-gray-900">Historique des demandes</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <Card key={order.id} className="p-4 shadow-lg rounded-xl">
                            <h2 className="text-lg font-semibold">{order.service.name}</h2>
                            <p className="text-gray-700">{order.service.description}</p>
                            <p><strong>Fournisseur:</strong> {order.service.provider.nom} {order.service.provider.prenom}</p>
                            <p><strong>Contact:</strong> {order.service.provider.phone}</p>
                            <p><strong>Date:</strong> {order.orderDate}</p>
                            <p><strong>Début:</strong> {order.start_hour} - <strong>Fin:</strong> {order.end_hour}</p>
                            <p><strong>Prix:</strong> {order.service.price} DH</p>
                            <p className={`px-4 py-1 rounded-full text-sm font-semibold ${
                                order.status === "Completed" ? "bg-green-100 text-green-800" :
                                order.status === "Cancelled" ? "bg-red-100 text-red-800" :
                                "bg-yellow-100 text-yellow-800"
                            }`}>{order.status}</p>
                            {order.status === "Completed" && (
                                <div className="mt-4">
                                    <h3 className="text-md font-semibold">Laisser un avis</h3>
                                    <ReactStars
                                        count={5}
                                        value={ratings[order.id] || 0}
                                        onChange={(newRating) => handleRatingChange(order.id, newRating)}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                    <Textarea placeholder="Votre avis..." rows={3} className="mb-2" id={`comment-${order.id}`} />
                                    <Button onClick={() => {
                                        const comment = document.getElementById(`comment-${order.id}`).value;
                                        handleSubmitReview(order.id, comment);
                                    }}>Envoyer</Button>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Historique;
