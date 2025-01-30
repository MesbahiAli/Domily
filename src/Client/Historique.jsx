import React from "react";
import { Label, Select, HR, Card, Rating } from "flowbite-react";
import Client_Nav from "./Components/Client_Nav";
import { Link } from "react-router-dom";

const Historique = () => {
    return (

        <>
            <Client_Nav />
            <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col ">

                    <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Liste des <span class="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">demandes</span></h1>

                    <HR.Trimmed />
                    <div className="grid grid-cols-3 gap-4">

                        <Card className="max-w-sm">
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Titre de service
                                </h2>
                                <p>Service menager</p>
                            </div>

                            <hr />

                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Nom et prénom du fournisseur
                                </h2>
                                <p className="ml-3">Anas el ouarti</p>
                            </div>

                            <hr />

                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg text-center font-semibold text-gray-900 dark:text-white">
                                    Numéro de téléphone du fournisseur
                                </h2>
                                <p className="ml-3">+212 35465743</p>
                            </div>

                            <hr />

                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Date de service
                                </h2>
                                <p className="ml-3">25-01-2025</p>
                            </div>

                            <hr />

                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Frais de service
                                </h2>
                                <p className="ml-3">150DH</p>
                            </div>

                        </Card>
                    </div>


            </div>
        </>
    );
}

export default Historique;

