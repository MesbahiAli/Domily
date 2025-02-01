import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client_Nav from './Components/Client_Nav';
import Footer from '../Client/Components/Footer';
import Prof from '../img/rb_20.png';

const ServiceDetails = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProvider(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching provider details:", error);
        setError("Failed to load provider details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading provider details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!provider) {
    return <p className="text-center text-gray-500">No provider data found.</p>;
  }

  return (
    <>
      <Client_Nav />

      <div className="flex w-full pt-24 pb-6 items-center bg-gray-50 justify-center">
        <div className="bg-white text-white rounded-lg items-center p-4 shadow-lg w-2/3">
          <div className='flex flex-col items-center justify-center bg-orange-500 rounded-lg pb-3'>
            <img src={Prof} alt="" className='h-52 w-52' />

            <div>
              <h1 className='text-4xl font-bold text-center mb-2 tracking-wider'>{provider.nom} {provider.prenom}</h1>
              <div className='flex flex-row p-2 text-orange-600 font-semibold items-center justify-center'>
                <p className='rounded-full bg-white py-2 px-4 mr-3'>Age: <span className='font-bold'>{provider.age}</span></p>
                <p className='rounded-full bg-white py-2 px-4'>Sexe: <span className='font-bold'>{provider.sexe}</span></p>
                <p className='rounded-full bg-white py-2 px-4 ml-3'>Secteur: <span className='font-bold'>{provider.secteur}</span></p>
                
              </div>
            </div>
          </div>

          <div className='col-span-2 text-orange-600 p-4 w-full items-start'>
            <h2 className='font-bold text-2xl mb-3'>A propos de moi</h2>
            <p className='mb-3 text-gray-500'>{provider.about}</p>

            <h2 className='font-bold text-2xl mb-3'>Notation</h2>
            <div className="flex items-center mb-3">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">de</p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
            </div>

            <h2 className='font-bold text-2xl mb-3'>Nombre de services complets</h2>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">16</p>

            <hr />

            <div className='flex flex-row items-center justify-center my-4'>
              <div className='flex flex-row m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p className='font-semibold'>{provider.phone}</p>
              </div>
              <div className='flex flex-row m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                </svg>
                <p className='font-semibold'>{provider.email}</p>
              </div>
            </div>

            <button type="submit" className="focus:outline-none w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-5 py-2.5 dark:focus:ring-yellow-900">Reserver</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;