import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // Count the number of orders for the service
  const orderCount = service.orders ? service.orders.length : 0;

  // Calculate the average rating
  const calculateAverageRating = (reviews) => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
      return (totalRating / reviews.length).toFixed(2); // Round to 2 decimal places
    }
    return 0;
  };

  const averageRating = calculateAverageRating(service.reviews);

  return (
    <Link
      to={`/servicedetails/${service.provider.id}/${service.id}`}
      className="w-1/5 flex-shrink-0 m-2 bg-white transform hover:scale-105 transition-transform hover:bg-gray-50 rounded-xl p-4 border shadow-md"
    >
      {/* Image commented out for now */}
      {/* <img
        src={service.image || "/path/to/default/image.jpg"} // Use a default image if service.image is null
        alt={service.name}
        className="w-full h-48 object-cover rounded-t-xl mb-4"
      /> */}

      <div className="flex flex-row justify-between px-4 mb-4">
        <h4 className="text-lg font-bold text-gray-900">
          {service.provider?.nom} {service.provider?.prenom}
        </h4>
        <Rating>
          <Rating.Star />
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{averageRating}</p>
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
      <div className="flex justify-between items-center mt-4">
        <h5 className="text-xl font-semibold text-center text-gray-900">
          {service.price} DH
        </h5>
        <p className="text-sm text-gray-600">
          {orderCount} {orderCount === 1 ? "order" : "orders"}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
