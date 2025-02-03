import { useState, useEffect } from "react";
import { Label, Table, HR, Button, Modal } from "flowbite-react";
import Admin_Nav from "./Components/Admin_Nav";
import { Edit_Provider } from "./Components/Edit_Provider";

const Gestion_Provider = () => {
    const [openModal, setOpenModal] = useState(false); // For details modal
    const [providers, setProviders] = useState([]); // State to store providers data
    const [selectedProvider, setSelectedProvider] = useState(null); // Selected provider for details
    const [providerToEdit, setProviderToEdit] = useState(null); // Provider to edit

    // Fetch providers data on component mount
    useEffect(() => {
        fetchProviders();
    }, []);

    const fetchProviders = async () => {
        try {
            const response = await fetch("http://localhost:8081/api/users/role/PROVIDER");
            const data = await response.json();
            setProviders(data);
        } catch (error) {
            console.error("Error fetching providers:", error);
        }
    };

    const handleProviderClick = (provider) => {
        setSelectedProvider(provider);
        setOpenModal(true);
    };

    const handleEditClick = (provider) => {
        setProviderToEdit(provider); // Set the provider to edit
    };

    const handleUpdateProvider = async (updatedProvider) => {
        try {
            const response = await fetch(`http://localhost:8081/api/users/${updatedProvider.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProvider),
            });

            if (response.ok) {
                // Refresh the provider list after successful update
                fetchProviders();
                setProviderToEdit(null); // Close the edit drawer
            } else {
                console.error("Failed to update provider");
            }
        } catch (error) {
            console.error("Error updating provider:", error);
        }
    };

    const handleDeleteProvider = async (providerId) => {
        try {
            const response = await fetch(`http://localhost:8081/api/users/${providerId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // Refresh the provider list after successful deletion
                fetchProviders();
            } else {
                console.error("Failed to delete provider");
            }
        } catch (error) {
            console.error("Error deleting provider:", error);
        }
    };

    return (
        <>
            <Admin_Nav />
            <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col">
                <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    Gestion des{" "}
                    <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">
                        prestataires
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
                            {providers.map((provider) => (
                                <Table.Row key={provider.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <span
                                            onClick={() => handleProviderClick(provider)}
                                            className="cursor-pointer text-orange-600 font-semibold text-lg hover:underline"
                                        >
                                            {provider.nom} {provider.prenom}
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <button
                                            onClick={() => handleEditClick(provider)}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Modifier
                                        </button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <button
                                            onClick={() => handleDeleteProvider(provider.id)}
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Supprimer
                                        </button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>

                    {/* Details Modal */}
                    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                        <Modal.Header>
                            <h2 className="text-2xl font-bold text-red-800">Details de prestataire</h2>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedProvider && (
                                 <div className="grid grid-cols-2 gap-4">
                                
                                 <div>
                                     <div className="mb-3">
                                         <div class="flex flex-row">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                             </svg>
                                             <h2 className='font-semibold text-xl mb-2 text-orange-600'>Nom et prénom</h2>
                                         </div>
                                         <p className="font-semibold ml-4">{selectedProvider.nom} {selectedProvider.prenom}</p>
                                     </div>
                                     <hr />
 
                                     <div className="my-3">
                                         <div class="flex flex-row">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                             </svg>
                                             <h2 className='font-semibold text-xl mb-2 text-orange-600'>Email</h2>
                                         </div>
                                         <p className="font-semibold ml-4">{selectedProvider.email}</p>
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
                                         <p className="font-semibold ml-4">{selectedProvider.phone}</p>
                                     </div>
 
                                     <hr />
 
                                     <div className="my-3">
                                         <div class="flex flex-row">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                             </svg>
                                             <h2 className='font-semibold text-xl mb-2 text-orange-600'>Age</h2>
                                         </div>
                                         <p className="font-semibold ml-4">{selectedProvider.age}</p>
                                     </div>
 
                                     <hr />
                                 </div>
 
                                     <div>
                                         <div class="flex flex-row">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                             </svg>
                                             <h2 className='font-semibold text-xl mb-2 text-orange-600'>Sexe</h2>
                                         </div>
                                         <p className="font-semibold ml-4">{selectedProvider.sexe}</p>
                                     </div>
 
                                     <div>
                                         <div class="flex flex-row">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3 text-orange-600">
                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                             </svg>
                                             <h2 className='font-semibold text-xl mb-2 text-orange-600'>A propos</h2>
                                         </div>
                                         <p className="font-semibold ml-4">{selectedProvider.about}</p>
                                     </div>
                             </div>

                                
                            )}
                        </Modal.Body>
                    </Modal>

                    {/* Edit Drawer */}
                    {providerToEdit && (
                        <Edit_Provider
                            provider={providerToEdit}
                            onUpdateProvider={handleUpdateProvider}
                            onClose={() => setProviderToEdit(null)}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Gestion_Provider;
