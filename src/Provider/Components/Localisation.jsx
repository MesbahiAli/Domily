import React, { useState } from "react";

const LocationInput = () => {
    const [userLocation, setUserLocation] = useState(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="flex flex-row w-full">

{userLocation && (
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5">
                    <p>N: {userLocation.latitude} W: {userLocation.longitude}</p>
                </div>
            )}
            { }
            <button onClick={getUserLocation} className="border border-gray-300 ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            </button>
            { }
            
        </div>
    );
}

export default LocationInput;
