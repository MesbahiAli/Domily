import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function Card({ imagen, title, description, button1Text, button1Link, button2Text, button2Link }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-300"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-2xl text-center font-bold mt-4 text-orange-500">{title}</h2>
      <p className="text-gray-600 mt-3 text-center">{description}</p>
      <div className="flex gap-4 mt-4 justify-center">
        <Link to={button1Link}>
          <Button className="bg-orange-500 text-white">{button1Text}</Button>
        </Link>
      </div>
    </animated.div>
  );
}

export default Card;

