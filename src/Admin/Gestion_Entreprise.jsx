import { useState } from "react";
import { Label, Table, HR, Button, Modal, Card, Rating } from "flowbite-react";
import Admin_Nav from "./Components/Admin_Nav";
import { Edit_Entreprise } from "./Components/Edit_Entreprise";

const Gestion_Entreprise = () => {
    const [openModal, setOpenModal] = useState(false);


    return (
        <>
            <Admin_Nav />
            <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col">
                <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    Gestion des{" "}
                    <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">
                        entreprises
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
                                        Beauty center
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <Edit_Entreprise />
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
                            <h2 className="text-2xl font-bold text-red-800">Details de l'entreprise</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <div className="mb-3">
                                        <div class="flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                            </svg>
                                            <h2 className='font-semibold text-xl mb-2 text-orange-600'>Nom de l'entreprise</h2>
                                        </div>
                                        <p className="font-semibold ml-4">Beauty center</p>
                                    </div>
                                    <hr />

                                    <div className="my-3">
                                        <div class="flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                            </svg>
                                            <h2 className='font-semibold text-xl mb-2 text-orange-600'>Email</h2>
                                        </div>
                                        <p className="font-semibold ml-4">exemple@gmail.com</p>
                                    </div>
                                    <hr />
                                </div>

                                <div>
                                    <div className="mb-3">
                                        <div class="flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <h2 className='font-semibold text-xl mb-2 text-orange-600'>Numéro de téléphone</h2>
                                        </div>
                                        <p className="font-semibold ml-4">+212 34354637</p>
                                    </div>

                                    <hr />

                                    <div className="my-3">
                                        <div class="flex flex-row">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                            </svg>
                                            <h2 className='font-semibold text-xl mb-2 text-orange-600'>Nombre d'employés</h2>
                                        </div>
                                        <p className="font-semibold ml-4">15</p>
                                    </div>

                                    <hr />
                                </div>

                                <div>
                                    <div class="flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <h2 className='font-semibold text-xl mb-2 text-orange-600'>Adresse</h2>
                                    </div>
                                    <p className="font-semibold ml-4">Hamria...</p>
                                </div>

                                <div>
                                    <div class="flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                        <h2 className='font-semibold text-xl mb-2 text-orange-600'>Site web</h2>
                                    </div>
                                    <p className="font-semibold ml-4">Exemple.ma</p>
                                </div>

                                <div className="mb-3 col-span-2 flex flex-col items-center">
                                    <div class="flex flex-row mt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        <h2 className='font-semibold text-xl mb-2 text-orange-600'>A propos</h2>
                                    </div>
                                    <p className="font-semibold ml-4">This is just an exemple....</p>
                                </div>


                            </div>
                        </Modal.Body>
                    </Modal>
                </div>



            </div>
        </>
    );
};

export default Gestion_Entreprise;
