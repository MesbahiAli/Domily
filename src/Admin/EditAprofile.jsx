import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Admin_Nav from './Components/Admin_Nav';
import Footer from '../Client/Components/Footer';
import Prof from '../img/rb_30.png';

const EditAprofile = () => {
    const [user, setUser] = useState({ nom: '', prenom: '', phone: '', email: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8081/api/users/${localStorage.getItem('userId')}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8081/api/users/${localStorage.getItem('userId')}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    setSuccessMessage('Profil mis à jour avec succès!');
                    setTimeout(() => navigate('/aprofile'), 2000);
                }
                return response.json();
            })
            .then(data => console.log("Profile updated", data));
    };

    return (
        <>
            <Admin_Nav />

            <div className="flex pt-28 pb-6 items-center bg-gray-50 justify-center">
                <div className="bg-white text-orange-500 rounded-lg flex flex-col items-center p-6 shadow-lg w-full max-w-lg">
                    <img src={Prof} alt="" className='h-72 w-72' />
                    {successMessage && <p className="text-green-500 font-bold mb-4">{successMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <h2 className='font-bold text-lg mb-2'>Nom</h2>
                                <input type="text" name="nom" value={user.nom} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <h2 className='font-bold text-lg mb-2'>Prénom</h2>
                                <input type="text" name="prenom" value={user.prenom} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <h2 className='font-bold text-lg mb-2'>Numéro de téléphone</h2>
                                <input type="text" name="phone" value={user.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div>
                                <h2 className='font-bold text-lg mb-2'>Adresse email</h2>
                                <input type="email" name="email" value={user.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                        </div>
                        <button type="submit" className="focus:outline-none w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5">Enregistrer</button>
                    </form>
                </div>
            </div >
            <Footer />
        </>
    );
}

export default EditAprofile;
