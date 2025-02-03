import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Provider_Nav from "./Components/Entreprise_Nav";
import { Label, Select } from "flowbite-react";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8081/api/services/${id}`)
      .then((response) => response.json())
      .then((data) => setService(data))
      .catch((error) => console.error("Error fetching service:", error));
  }, [id]);

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8081/api/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((response) => {
        if (response.ok) {
          alert("Service mis à jour avec succès !");
          navigate("/EservicesListe");
        } else {
          alert("Échec de la mise à jour du service");
        }
      })
      .catch((error) => console.error("Error updating service:", error));
  };

  return (
    <>
      <Provider_Nav />
      <div className="flex items-center justify-center mt-20 p-4 bg-gray-50">
        <div className="w-2/3 bg-white rounded-xl p-8">
          <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Modifier le <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">service</span>
          </h1>
          <form onSubmit={handleSubmit}>
           

            <div className="w-full mb-4">
              <Label htmlFor="name" value="Nom du Service*" />
              <input type="text" name="name" value={service.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
            </div>

            <div className="w-full mb-4">
              <Label htmlFor="description" value="Descriptif de l'annonce*" />
              <textarea name="description" value={service.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
            </div>

          

            <div className="w-full mb-4">
              <Label htmlFor="price" value="Prix(DH)*" />
              <input type="number" name="price" value={service.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
            </div>

            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditService;
