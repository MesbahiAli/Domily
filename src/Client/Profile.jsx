import React from 'react';
import Client_Nav from './Components/Client_Nav';
import Footer from './Components/Footer';
import Prof from '../img/rb_10.png';

const EmailUs = () => {
    return (
<>
        <Client_Nav />


        <div className="flex pt-28 pb-6 items-center bg-gray-50 justify-center">
            <div className="bg-white text-orange-500 rounded-lg flex flex-col items-center p-10 shadow-lg w-full max-w-lg">
<img src={Prof} alt="" className='h-72 w-72' />
                <h1 className='text-4xl font-bold text-center'>Anas <br /> El Ouarti</h1>
               
            </div>
        </div>


        <Footer />
        </>
    );
}

export default EmailUs;
