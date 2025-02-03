import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    return (
      <Link to={`/servicedetails/${service.provider.id}`} 
            className="w-1/5 flex-shrink-0 m-2 bg-white transform hover:scale-105 transition-transform hover:bg-gray-50 rounded-xl p-4 border shadow-md">
        <img 
          src={service.imgPath} 
          alt={service.name}
          className="w-full h-48 object-cover rounded-t-xl mb-4"
        />
        <div className="flex flex-row justify-between px-4 mb-4">
          <h4 className="text-lg font-bold text-gray-900">
            {service.provider?.nom} {service.provider?.prenom}
          </h4>
          <Rating>
            <Rating.Star />
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
          </Rating>
        </div>
        <hr />
        <h5 className="text-lg mt-2 font-semibold text-center text-gray-900">
          {service.name}
        </h5>
        <p className="font-normal my-4 text-justify text-gray-700">
          {service.description}
        </p>
        <hr />
        <h5 className="text-xl mt-4 font-semibold text-center text-gray-900">
          {service.price} DH
        </h5>
      </Link>
    );
  };
  
  export default ServiceCard;