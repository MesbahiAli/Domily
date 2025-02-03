import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client_Nav from './Components/Client_Nav';
import Footer from '../Client/Components/Footer';
import Prof from '../img/rb_20.png';
import { Button, Modal } from 'flowbite-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false); // State for modal
  const [bookingDetails, setBookingDetails] = useState({
    address: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  // Fetch provider details
  useEffect(() => {
    fetch(`http://localhost:8081/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProvider(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching provider details:', error);
        setError('Failed to load provider details.');
        setLoading(false);
      });
  }, [id]);

  // Handle input changes for booking details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for booking
  const handleBookingSubmit = () => {
    console.log('Booking Details:', bookingDetails);
    // Add your API call or logic to handle booking here
    setOpenModal(false); // Close modal after submission
  };

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
          <div className="flex flex-col items-center justify-center bg-orange-500 rounded-lg pb-3">
            <img src={Prof} alt="" className="h-52 w-52" />

            <div>
              <h1 className="text-4xl font-bold text-center mb-2 tracking-wider">
                {provider.nom} {provider.prenom}
              </h1>
              <div className="flex flex-row p-2 text-orange-600 font-semibold items-center justify-center">
                <p className="rounded-full bg-white py-2 px-4 mr-3">
                  Age: <span className="font-bold">{provider.age}</span>
                </p>
                <p className="rounded-full bg-white py-2 px-4">
                  Sexe: <span className="font-bold">{provider.sexe}</span>
                </p>
                <p className="rounded-full bg-white py-2 px-4 ml-3">
                  Secteur: <span className="font-bold">{provider.secteur}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 text-orange-600 p-4 w-full items-start">
            <h2 className="font-bold text-2xl mb-3">A propos de moi</h2>
            <p className="mb-3 text-gray-500">{provider.about}</p>

            <h2 className="font-bold text-2xl mb-3">Notation</h2>
            <div className="flex items-center mb-3">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">de</p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
            </div>

            <h2 className="font-bold text-2xl mb-3">Nombre de services complets</h2>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">16</p>

            <hr />

            <div className="flex flex-row items-center justify-center my-4">
              <div className="flex flex-row m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <p className="font-semibold">{provider.phone}</p>
              </div>
              <div className="flex flex-row m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                  />
                </svg>
                <p className="font-semibold">{provider.email}</p>
              </div>
            </div>

            {/* Reservation Button */}
            <button
              onClick={() => setOpenModal(true)}
              type="submit"
              className="focus:outline-none w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-5 py-2.5 dark:focus:ring-yellow-900"
            >
              Reserver
            </button>
          </div>
        </div>

        {/* Reservation Modal */}
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            <h1 className="text-2xl font-bold text-red-800">Détails de réservation</h1>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-xl mb-2 text-orange-600">Adresse</h2>
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center p-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-orange-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={bookingDetails.address}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Hamria..."
                    required
                  />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-xl mb-2 text-orange-600">Date</h2>
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center p-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-orange-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={bookingDetails.date}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="font-semibold text-xl mb-2 text-orange-600">Heure de début:</h2>
                  <div className="relative">
                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                      <svg
                        className="size-6 text-orange-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="time"
                      name="startTime"
                      value={bookingDetails.startTime}
                      onChange={handleInputChange}
                      className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      min="09:00"
                      max="18:00"
                      required
                    />
                  </div>
                </div>
                <div>
                <h2 className='font-semibold text-xl mb-2 text-orange-600'>Heure de fin:</h2>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg class="size-6 text-orange-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="time" id="end-time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="justify-center">
                        <Button onClick={() => setOpenModal(false)} className="bg-green-600">Confirmer</Button>
                        <Button onClick={() => setOpenModal(false)} className="bg-red-600">Annuler</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <Footer />
        </>
    );
}

export default ServiceDetails;