import React from 'react';
import Client_Nav from './Components/Provider_Nav';
import Footer from '../Client/Components/Footer';
import Prof from '../img/rb_20.png';
import { Link } from 'react-router-dom';

const EditPProfile = () => {
    return (
        <>
            <Client_Nav />


            <div className="flex w-full pt-28 pb-6 items-center bg-gray-50 justify-center">
                <div className="grid grid-cols-3 bg-white text-white rounded-lg items-center p-4 shadow-lg w-2/3">
                    <div className='col-span-1 bg-orange-500 rounded-lg p-3'>
                        <img src={Prof} alt="" className='' />
                        <h1 className='text-4xl font-bold text-center mb-2 tracking-wider'>Anas</h1>
                        <h1 className='text-4xl font-bold text-center mb-2 tracking-wide'>El Ouarti</h1>

                        <div className='flex flex-row p-2 text-orange-600 font-semibold items-center justify-center'>
                            <p className='rounded-full bg-white py-2 px-4 mr-3'>Age: <span className='font-bold'>22</span></p>
                            <p className='rounded-full bg-white py-2 px-4'>Sexe: <span className='font-bold'>Male</span></p>
                        </div>

                    </div>


                    <div className='col-span-2 text-orange-600 p-4 w-full items-start relative'>
                        <form action="">
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Nom</h2>
                                    <input type="text" id="first_name" class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom" required />
                                </div>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Prénom</h2>
                                    <input type="text" id="first_name" class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Prénom" required />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Age</h2>
                                    <input type="number" id="first_name" class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom" required />
                                </div>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Sexe</h2>
                                    <select id="sexe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Sexe</option>
                                        <option value="Ma">Male</option>
                                        <option value="Fe">Femele</option>
                                    </select>
                                </div>
                            </div>
                            <h2 className='font-bold text-xl mb-2'>A propos de moi</h2>
                            <textarea id="message" rows="4" class="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                            <h2 className='font-bold text-xl mb-2'>Numéro de téléphone</h2>
                            <div class="relative mb-2">
                                <div class="absolute inset-y-0 start-0 top-0 flex items-center p-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </div>
                                <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                            </div>


                            <h2 className='font-bold text-xl mb-2'>Adresse email</h2>
                            <div class="relative mb-2">
                                <div class="absolute inset-y-0 start-0 top-0 flex items-center p-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                    </svg>
                                </div>
                                <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="exemple@gmail.com" required />
                            </div>
                            <button type="submit" class="focus:outline-none w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900">Enregistrer</button>
                        </form>
                    </div>

                </div>


            </div >


            <Footer />
        </>
    );
}

export default EditPProfile;
