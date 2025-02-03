import { useState } from "react";
import { Label, Table, HR, Button, Modal, Card, Rating } from "flowbite-react";
import Admin_Nav from "./Components/Admin_Nav";
import { Edit_Client } from "./Components/Edit_Client";

const Gestion_Client = () => {
    const [openModal, setOpenModal] = useState(false);


    return (
        <>
            <Admin_Nav />
            <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col">
                <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    Gestion des{" "}
                    <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">
                        clients
                    </span>
                </h1>

                <HR.Trimmed />

                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head className="text-center text-base text-white">
                            <Table.HeadCell className="bg-orange-500">
                                Nom et prénom
                            </Table.HeadCell>
                            <Table.HeadCell className="bg-orange-500">Modifier</Table.HeadCell>
                            <Table.HeadCell className="bg-orange-500">Supprimer</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y text-center border">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <span
                                        onClick={() => setOpenModal(true)}
                                        className="cursor-pointer text-orange-600 font-semibold text-lg hover:underline"
                                    >
                                        Anas El Ouarti
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                        <Edit_Client />
                                </Table.Cell>
                                <Table.Cell>
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        Supprimer
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                        <Modal.Header>
                            <h2 className="text-2xl font-bold text-red-800">Details de client</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div class="flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <h2 className='font-semibold text-xl mb-2 text-orange-600'>Nom et prénom</h2>
                                    </div>
                                    <p className="font-semibold ml-4">Anas El Ouarti</p>
                                </div>

                                <div>
                                    <div class="flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                        </svg>
                                        <h2 className='font-semibold text-xl mb-2 text-orange-600'>Email</h2>
                                    </div>
                                    <p className="font-semibold ml-4">exemple@gmail.com</p>
                                </div>

                                <div>
                                    <div class="flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                        <h2 className='font-semibold text-xl mb-2 text-orange-600'>Numéro de téléphone</h2>
                                    </div>
                                    <p className="font-semibold ml-4">+212</p>
                                </div>

                                <div>
                                    <div class="flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <h2 className='font-semibold text-xl mb-2 text-orange-600'>Adress</h2>
                                    </div>
                                    <p className="font-semibold ml-4">Hamria</p>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div> 

                 
                
            </div>
        </>
    );
};

export default Gestion_Client;
