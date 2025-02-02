import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Provider_Nav from "./Components/Provider_Nav";
import { Link } from "react-router-dom";

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/services/provider/3")
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error("Error fetching services:", error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8081/api/services/${id}`, {
            method: "DELETE",
        })
        .then((response) => {
            if (response.ok) {
                // Remove the deleted service from the state
                setServices(services.filter((service) => service.id !== id));
                alert("Service supprimé avec succès!");
            } else {
                alert("Échec de la suppression du service");
            }
        })
        .catch((error) => {
            console.error("Error deleting service:", error);
            alert("Erreur lors de la suppression du service");
        });
    };

    return (
        <>
            <Provider_Nav />
            <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col">
                <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    Liste des <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">
                        services
                    </span>
                </h1>

                <div className="grid grid-cols-3 gap-4">
                    {services.map((service) => (
                        <Card key={service.id} className="max-w-sm">
                            <h5 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
                                {service.name}
                            </h5>
                            <hr />
                            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
                                {service.description}
                            </p>
                            <hr />
                            <h5 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
                                {service.price} DH
                            </h5>
                            <hr />
                            <div className="flex flex-row items-center justify-center">
                                <Link to={`/editservice/${service.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                                    Modifier
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(service.id)} // Call handleDelete with the service id
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </Card>
                    ))}

                    <Link to="/service" className="bg-slate-50 rounded-lg shadow-md border flex hover:bg-white text-8xl items-center justify-center text-gray-600 hover:text-orange-500">
                        +
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ServiceList;
