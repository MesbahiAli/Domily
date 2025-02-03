import React, { useState, useEffect } from 'react';
import Footer from '../Client/Components/Footer';
import Eprof from '../img/eprofile.png';
import Eproff from '../img/eprofile2.png';
import { Link, useNavigate } from 'react-router-dom';
import Entreprise_Nav from './Components/Entreprise_Nav';

const EProfile = () => {
    const [UserData, setUserData] = useState({
        nom: '',
        phone: '',
        about: '',
        adresse: '',
        website: '',
        email: '',
    });

    const navigate = useNavigate();

    // Fetch user data from the backend API
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/users/20');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUserData({
                    nom: data.nom,
                    website: data.website,
                    adresse: data.adresse,
                    about: data.about,
                    phone: data.phone,
                    email: data.email,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...UserData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8081/api/users/20`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UserData),
            });

            if (!response.ok) {
                throw new Error('Failed to update user data');
            }

            const result = await response.json();
            console.log('User data updated successfully:', result);

            // Redirect to the profile page after successful update
            navigate('/Eprofile');
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <>
            <Entreprise_Nav />

            <div className="flex w-full pt-28 pb-6 items-center bg-gray-50 justify-center">
                <div className="grid grid-cols-3 bg-white text-white rounded-lg items-center p-4 shadow-lg w-2/3">
                    <div className='col-span-1 flex flex-col rounded-lg p-3 h-full items-center justify-center' style={{
                        backgroundImage: `url(${Eproff})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                        <img src={Eprof} alt="" className='' />
                        <h1 className='text-4xl font-bold text-center my-2 tracking-wider'>{UserData.nom}</h1>
                    </div>

                    <div className='col-span-2 text-orange-600 p-4 w-full items-start'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Nom</h2>
                                    <input
                                        type="text"
                                        id="nom"
                                        className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Nom"
                                        value={UserData.nom}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Numéro de téléphone</h2>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="123-456-7890"
                                        value={UserData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Adresse</h2>
                                    <input
                                        type="text"
                                        id="adresse"
                                        className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Adresse"
                                        value={UserData.adresse}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <h2 className='font-bold text-xl mb-2'>Site Web</h2>
                                    <input
                                        type="text"
                                        id="website"
                                        className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Website"
                                        value={UserData.website}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <h2 className='font-bold text-xl mb-2'>A propos</h2>
                            <textarea
                                id="about"
                                rows="4"
                                className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="A propos de votre entreprise"
                                value={UserData.about}
                                onChange={handleInputChange}
                            ></textarea>

                            <h2 className='font-bold text-xl mb-2'>Adresse email</h2>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="exemple@gmail.com"
                                value={UserData.email}
                                onChange={handleInputChange}
                                required
                            />

                            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5">
                                Enregistrer
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default EProfile;