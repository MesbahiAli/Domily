import React from 'react';
import Client_Nav from './Components/Client_Nav';
import Footer from './Components/Footer';
import Prof from '../img/rb_10.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            <Client_Nav />


            <div className="flex pt-28 pb-6 items-center bg-gray-50 justify-center">
                <div className="bg-white text-orange-500 rounded-lg flex flex-col items-center p-6 shadow-lg w-full max-w-lg">

                    <img src={Prof} alt="" className='h-72 w-72' />
                    <h1 className='text-4xl mb-3 font-bold text-center'>Anas <br /> El Ouarti</h1>
                    
                    <div className='flex flex-row items-center justify-center'>
                        <div className='flex flex-row m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className='font-semibold'>+212 34526354</p>
                        </div>
                        <div className='flex flex-row m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                            </svg>
                            <p className='font-semibold'>exemple@gmail.com</p>
                        </div>
                    </div>

                        <div className='flex flex-row text-sm font-bold justify-center items-center mt-3'>
                            <Link to="/editprofile" className='text-sm font-semibold text-orange-600'>Modifier mon profile</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                </div>


            </div>


            <Footer />
        </>
    );
}

export default Profile;
