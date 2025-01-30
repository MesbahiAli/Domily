import React from 'react';
import Client_Nav from './Components/Client_Nav';
import Footer from './Components/Footer';

const EmailUs = () => {
    return (
<>
        <Client_Nav />
        <div className="flex pt-28 pb-6 items-center bg-gray-50 justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Contactez-nous</h1>
                <p className="text-orange-500 text-center font-semibold mb-6">Nous aimerions avoir de vos nouvelles !</p>
                <form>
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">Nom</label>
                        <input type="text" className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" required />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email</label>
                        <input type="email" className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" required />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">Message</label>
                        <textarea className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Envoyer le message
                    </button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default EmailUs;
