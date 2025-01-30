import React from "react";
import { Label, Select, HR, Card, Rating } from "flowbite-react";
import Provider_Nav from "./Components/Provider_Nav";
import { Link } from "react-router-dom";

const ServiceList = () => {
    return (

        <>
            <Provider_Nav />
            <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col ">

                <div className="">
                    <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Liste des <span class="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">services</span></h1>

                    <HR.Trimmed />
                    <div className="grid grid-cols-3 gap-4">

                        <Card className="max-w-sm">
                            <h5 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
                                Titre de service
                            </h5>
                            <hr />
                            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
                                Dépoussiérage et nettoyage des meubles, étagères, tables, et autres surfaces.
                                Essuyage des vitres, miroirs et fenêtres pour un résultat impeccable.
                                Nettoyage des murs (si nécessaire) pour éliminer les tâches ou traces.      </p>
                            <hr />
                            <h5 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
                                200DH
                            </h5>
                            <hr />
                            <div className="flex flex-row items-center justify-center">
                                <Link to="/editservice" class="text-white bg-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Modifier</Link>
                                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Supprimer</button>
                            </div>
                        </Card>

                        <Link to="/service" className="bg-slate-50 rounded-lg shadow-md border flex hover:bg-white text-8xl items-center justify-center text-gray-600 hover:text-orange-500">
                            +
                        </Link>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ServiceList;

